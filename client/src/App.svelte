<script>
import AddPlayer from './components/AddPlayer.svelte';
import Navbar from './components/Navbar.svelte'
import Player from './components/Player.svelte';
	let players = [
		{
			name: 'John Doe',
			points: 53
		},
		{
			name: 'Sam Smith',
			points: 48
		},
		{
			name: 'Peter Walker',
			points: 20
		}
	]	 

	const addPlayer = (e) => {
		const newPlayer = e.detail;
		players = [...players, newPlayer]
	}

	const deletePlayer = (e) => {
		const playersName = e.detail
		players = players.filter(player => player.name != playersName)
		console.log(players)
	}
</script>

<Navbar />
<div class="container">
	<AddPlayer on:addplayer={addPlayer} />
	{#if players.length <= 0}
		<p>No players found</p>
	{:else}
		{#each players as player }
		 <Player on:deletePlayer={deletePlayer} name={player.name} points={player.points} />	
		{/each}
	{/if}
</div>
