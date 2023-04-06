import time
import json
import pandas as pd
from nba_api.stats.static import players
from nba_api.stats.endpoints import playercareerstats
count=0;

def fetch_player_career_stats(player_id, retries=5, sleep_time=2, timeout=120):
    for retry in range(retries):
        try:
            time.sleep(sleep_time)
            career = playercareerstats.PlayerCareerStats(player_id=player_id, timeout=timeout)
            career_totals = career.get_data_frames()[1]
            stats = {}
            stats['GP'] = int(career_totals.iloc[0]['GP'])
            
            pts = career_totals.iloc[0]['PTS']
            if pd.isna(pts):
                return None
            else:
                stats['PTS'] = round(pts / stats['GP'], 1)
                
            oreb = career_totals.iloc[0]['OREB']
            dreb = career_totals.iloc[0]['DREB']
            if pd.isna(oreb) or pd.isna(dreb):
                return None
            else:
                stats['REB'] = round((oreb + dreb) / stats['GP'], 1)
                
            stl = career_totals.iloc[0]['STL']
            if pd.isna(stl):
                return None
            else:
                stats['STL'] = round(stl / stats['GP'], 1)
            
            fg_pct = career_totals.iloc[0]['FG_PCT']
            if pd.isna(fg_pct):
                return None
            else:
                stats['FG_PCT'] = round(fg_pct, 3)
            
            fg3_pct = career_totals.iloc[0]['FG3_PCT']
            if pd.isna(fg3_pct):
                return None
            else:
                stats['FG3_PCT'] = round(fg3_pct, 3)
                
            return stats
        except Exception as e:
            print(f"Error fetching career stats for player ID {player_id}: {e}")
            sleep_time *= 2  # Exponential backoff

    return None


player_data = []
all_players = players.get_players()

for i, player in enumerate(all_players):
    player_stats = fetch_player_career_stats(player['id'])
    if player_stats is None:
        continue

    player_data.append({
        'id': player['id'],
        'name': player['full_name'],
        'stats': player_stats
    })
    count += 1
    print(count, player['full_name'])

    # Save intermediate results after processing every 100 players
    if (i + 1) % 100 == 0:
        with open(f'player_data_{i - 99}_{i}.json', 'w') as f:
            json.dump(player_data, f, indent=2)
        player_data = []

# Save the remaining data
if player_data:
    start = (i // 100) * 100
    with open(f'player_data_{start}_{i}.json', 'w') as f:
        json.dump(player_data, f, indent=2)