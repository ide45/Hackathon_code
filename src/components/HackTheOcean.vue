<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#5884ea" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,213.3C384,181,480,139,576,106.7C672,75,768,53,864,53.3C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
    <h1>HACK THE &nbsp;&nbsp;&nbsp;OCEAN</h1>
    <br>
    <hr>
</template>

<script>
export default {
    name: "HackTheOcean",  
}
</script>

<style scoped>
    * {
        font-family: 'Roboto Mono', monospace;
    }
    
    svg {
        z-index: -1;
    }

    h1 {
        display: flex;
        justify-content: flex-start;
        margin-left: 1em;
        font-weight: 200;
        line-height: 1.5em;
        font-size: 3em;
    }

    h1::after {
        content: "Hack the ocean is an iniciative powered by Microsoft where front and backend developers come together to find a solution or generate awareness about the state of the oceans and living things coexisting in it.";
        display: flex;
        flex-wrap: wrap;
        align-content: center;

        line-height: 1.5em;
        margin-left: 1em;
        margin-right: 2em;
        font-size: .55em;
    }

    hr {
        display: flex;
        justify-content: flex-end;
        margin-left: 16em;
        margin-right: 2em;
        height: .5em;
        background: #0d5f95;
    }

    @media (max-width: 40em) and (max-width: 984px) {
        h1 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: .5em;
        }
    }
</style>