<script>
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher()

    let player = {
        name: '',
        points: 0
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch('addplayer', player)
        player = {
            name: '',
            points: 0
        }
    }
</script>

<form on:submit={handleSubmit} class="grid-3">
    <input type="text" placeholder="Player name" bind:value={player.name} >
    <input type="number" placeholder="Player point" bind:value={player.points} >
    <input type="submit" class="btn btn-primary" value="Add">
</form>