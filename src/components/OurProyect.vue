<template>
    <hr>
    <h1>Our proyect</h1>

    <h4>We decided to develop a "dictionary" webpage, where we compiled several endengered fish species, so 
        everyone can see for themselves the harm we have caused to the ecosystem. <br> <br>

        Also, we developed a bot in telegram, so you can search freely while texting.
    </h4>
</template>

<script>
export default {
    name: "OurProyect",  
}
</script>

<style scoped>
    hr {
        margin-inline: 4em;
        height: .1em;
        background-color: #0d5f95;
    }

    h1 {
        margin-top: 2em;
        font-size: 2.5em;
    }

    h4 {
        display: flex;
        justify-content: center;

        color: black;
        margin-top: 1em;
        font-size: 1.5em;
        font-weight: 400;

        max-width: 30em;
    }
</style>