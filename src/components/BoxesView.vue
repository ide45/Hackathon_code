<template>
    <div class="cards">
        <img src="@/assets/image0.jpg" alt="sea">

        <div class="item">
            <h2 class="title">Why should we care about the ocean?</h2>
            <p class="fact">-The ocean produces over half of the world's oxygen and absorbs 50 times more carbon dioxide than our atmosphere.</p> <br> <br>
        </div>
    </div>
    
    <div class="cards">
        <img src="@/assets/image1.jpg" alt="sea">

        <div class="item">
            <h2 class="title">What can we do to protect it?</h2>
            <p class="fact">Conserve Water </p>
            <p class="fact">Reduce pollutants</p>
            <p class="fact">Respect the habitat</p>
            <p class="fact">Shop wisely</p>  
            <p class="fact">Use less energy</p> 
            <p class="fact">Reduce vehicle pollution</p> 
        </div>
    </div>

    <div class="cards">
        <img src="@/assets/image0.jpg" alt="beach">

        <div class="item">
            <h2 class="title">Your choice</h2>
            <p class="fact">It is your choice, the time is ticking and, while it ticks, more and more species are at risk, make the change.</p>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "BoxesView",  
}
</script>

<style scoped>
    * {
        font-family: 'Roboto Mono', monospace;
    }
    .cards {
        margin-top: 4em;
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: column;

        max-width: min-content;

        margin-inline: 2em;

        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    .cards:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .item {
        padding: 2px 35px;
        flex: 1 1 100px;
    }

    .title {
        color: #001e63;
        line-height: 1.5em;
        font-weight: 800;
    }

    .fact {
        line-height: 2em;
        font-weight: 400;
    }
</style>