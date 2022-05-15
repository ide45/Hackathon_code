<template>
    <h1>Or</h1>

    <h4>Try out our telegram bot aswell! Where you can make requests, all is automatized</h4>

    <div class="box">
        <a href="https://t.me/MarinePreservationBot" target="_blank">Bot</a>
    </div>
</template>

<script>
export default {
    name: "TelegramComponent"
}
</script>

<style scoped>
h1 {
    margin-top: 1em;
    font-size: 3em;
}

h4 {
    margin-top: 2em;
}

.box {
    margin-top: 1em;
    padding: 10px 40px;
    width: fit-content;
}

a {
    text-decoration: none;
    font-size: 1.5em;
}

a::before {
    content: "";
    display: block;
    background: url("@/assets/telegram.png") no-repeat;
    width: 20px;
    height: 25px;
    float: left;
    margin: 0 3px 0 0;
}
</style>

