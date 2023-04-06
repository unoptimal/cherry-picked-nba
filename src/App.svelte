<script>
  import { onMount } from 'svelte';

  let players = [];
  let filteredPlayers = [];

  onMount(async () => {
    const response = await fetch('player_data.json');
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
<p>Statistics are a very cool and fun part of sports. Hilariously, though, they can be sometimes be a bit <i>too</i> specific.</p>
<p>Take, for example, this infamous Thaddeus Young graphic:</p>
<img src="thaddeus.jpg" alt="thaddeus" width=100%>
<p>Inspired by this, I gathered the career statistics of every player in the NBA database (as of April 5th, 2023) and filtered out those with incomplete stats (including those who played before the 3 pointer was introduced), whittling down around 4800 players to 3129.</p>
<p>So now, I hope you enjoy roleplaying as a member of your local sports graphic team.</p>

<form on:submit={handleSubmit}>
  <label>
    GP (Games Played)):
    <input type="number" name="gp" value = 800>
  </label>

  <label>
    PTS (Points)):
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

<i><p style='text-align:center'>View the source data here, and code here.</p></i>
<i><p style='text-align:center'>If you find anything silly, please let me know at <a href='https://twitter.com/thatsnotoptimal'>@thatsnotoptimal</a>. I would also love to make the filtering options more elaborate in the future, so let me know if you're interested in this too.</p></i>

