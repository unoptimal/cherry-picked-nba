<script>
  import { onMount } from 'svelte';

  let players = [];
  let filteredPlayers = [];

  onMount(async () => {
    const response = await fetch('./player_data.json');
    players = await response.json();
  });

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    filteredPlayers = players.filter(player => {
      const stats = player.stats;
      return stats.GP >= formData.get('gp')
        && stats.PTS >= formData.get('pts')
        && stats.REB >= formData.get('reb')
        && stats.STL >= formData.get('stl')
        && stats.FG_PCT >= (Number(formData.get('fgPct')) * 0.01)
        && stats.FG3_PCT >= (Number(formData.get('fg3Pct')) * 0.01);
    });
  }

  function formatNumber(num, places) {
    return num.toFixed(places);
  }

</script>

<h1>Find your own cherry-picked NBA stats</h1>
<p style='text-align:center;'>by <a href='https://unoptimal.com/'>unoptimal</a></p>
<p>Statistics are a very cool and fun part of sports. Hilariously, though, they can be sometimes be a bit <i>too</i> specific:</p>
<img src="./thaddeus.jpg" alt="thaddeus" width=100%>
<p>I love this graphic so much that I felt inspired to make a simple tool to replicate it's energy.</p>
<p>So I gathered the career statistics of every player in the NBA database (as of April 5th, 2023) and filtered out those with incomplete stats (including those who played before the 3 pointer was introduced).</p>
<p>Now, I hope you enjoy role-playing as a member of your local sports graphic team.</p>
<p><i>Note: some players might still be missing due to rate-limited scraping issues. My bad.</i></p>
<p>Oh, and by the way, the <a href='https://twitter.com/TheMMQBL/status/969017127264051200'>13.5/5.9/1.4/49%/30%3point club</a> is now the 12.4/5.7/1.4/49%/30% club. Unfortunately, Father Time stops for no man, not even all-time great Thaddeus Young.</p>

<form on:submit={handleSubmit}>
  <label>
    GP (Games Played):
    <input type="number" name="gp" value = 800>
  </label>

  <label>
    PTS (Points):
    <input type="number" name="pts" step="0.1" value = 12.4>
  </label>

  <label>
    REB (Rebounds):
    <input type="number" name="reb" step="0.1" value = 5.7>
  </label>

  <label>
    STL (Steals):
    <input type="number" name="stl" step="0.1" value = 1.4>
  </label>

  <label>
    FG% (Field Goal Percentage):
    <input type="number" name="fgPct" step="0.1" value = 49>
  </label>

  <label>
    3P% (3 Point Percentage):
    <input type="number" name="fg3Pct" step="0.1" value = 30>
  </label>

  <button type="submit">Find Players</button>
</form>

{#if filteredPlayers.length > 0}
  <h2>Filtered Players: ({filteredPlayers.length}/{players.length}) </h2>
  <ul>
    {#each filteredPlayers as player}
    <li><b>{player.name}</b> - GP: {player.stats.GP} - PTS: {formatNumber(player.stats.PTS, 1)} - REB: {formatNumber(player.stats.REB, 1)} - STL: {formatNumber(player.stats.STL, 1)} - FG%: {formatNumber(player.stats.FG_PCT * 100, 1)}% - 3P%: {formatNumber(player.stats.FG3_PCT * 100, 1)}%</li>
    {/each}
  </ul>
{:else}
  <p>No matching players found.</p>
{/if}

<i><p style='text-align:center'>View the source data <a href='https://github.com/unoptimal/cherry-picked-nba/blob/master/public/player_data.json'>here</a>, and code <a href='https://github.com/unoptimal/cherry-picked-nba'>here</a>.</p></i>
<i><p style='text-align:center'>If you find anything silly, please let me know at <a href='https://twitter.com/thatsnotoptimal'>@thatsnotoptimal</a>. I would also love to make the filtering options more elaborate in the future, so let me know if you're interested in this too.</p></i>

