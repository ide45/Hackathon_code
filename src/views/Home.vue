<template>
    <HackTheOcean/>
    <br> <br> <br>
    <BoxesView/>
    <br> <br> <br>
    <br> <br> <br>
    <OurProyect/>
    <br> <br> <br>
    <BottomRief/>
</template>

<script>
import HackTheOcean from '@/components/HackTheOcean.vue'
import BoxesView from '@/components/BoxesView.vue'
import BottomRief from '@/components/BottomRief.vue'
import OurProyect from '@/components/OurProyect.vue'

export default {
    name: `Home`,
    components: {
        HackTheOcean,
        BoxesView,
        BottomRief,
        OurProyect
    },
}
</script>