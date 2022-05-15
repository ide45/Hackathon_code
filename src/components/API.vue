<template>
  <div class="frame">
    <h1>{{list[this.ran]?.["Species Name"]}}</h1>
    <img :src="list[this.ran]?.[str[0]].src" alt="fish"> <br> <br>
    <h4>{{"Population: " + list[this.ran]?.Population}}</h4> <br>
    <h4>{{"Region: " + list[this.ran]?.[str[3]]}}</h4>
  </div>

  <div class="searchBar">
      <input type="text" id="input" name="q" v-model="input"
               placeholder="Search...">

      <button @click="getSearch"><svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
      </button>
  </div>

  <!--
  <div class="box">
    
    <div v-show="check(item?.Population)" v-for="item in list" :key="item" class="fish">

      <img :src="item[str[0]].src" v-bind:alt="item[str[0]].alt"> <br>
      {{"Name: " + item[str[1]]}} <br> <br>
      {{"Fishing rate: " + item[str[2]]}} <br> <br>
      {{"Population: " + item.Population}} <br> <br>
      {{"Region: " + item[str[3]]}} <br> <br>

    </div>

  </div>
  -->
</template>

<script>
import axios from "axios"
//import VueSilentbox from "vue-silentbox"

export default {
  name: 'API',
  data() {
    return {
      input: "",
      search: "",


      list: [],
      str: [
        "Species Illustration Photo",
        "Species Name",
        "Fishing Rate",
        "NOAA Fisheries Region"
      ],

      keyWords: [
        "Significantly",
        "significantly",
        "Below",
        "below",
        "prohibited"
      ],
      gallery: [

      ],
      ran: 0
    }
  },
 
  created() {
    this.fetch()  
    this.ran = Math.floor(Math.random() * 100)
  },

  methods: {
    check(string) {
      if (this.keyWords.some(v => string?.includes(v))) {
        return 1
      }
    },
    fetch() {
      axios.get(`https://www.fishwatch.gov/api/species`).then(response => {
        console.log("Success")
        //console.log(response.data)

        this.list = response.data

      }).catch(()=> {
        console.log("Error")
      });
    },



    getSearch: function () {
      if(!(this.input == "" || this.input.trim().length === 0)){
        this.search = this.input
        console.log(this.search)
        this.ran = Math.floor(Math.random() * 80)
        console.log(this.ran)
      }
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
}

[v-cloak] {
  display: none;
}
.box {
  margin-inline: 1em;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;
  gap: 3em;
}

.fish {
  border: #42b983 solid 3px;
  background-color: bisque;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.015);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 50%;
}

.frame {
  margin-inline: 5em;
  padding: 10px;

  border: 1px solid rgba(0, 0, 0, 0.115);

  margin-bottom: 4em;
  line-height: 1.5em;
}

.frame img {
  max-width: 20em;
}
.searchBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

input {
    font: 16px system-ui;
    color: black;
    padding: 9px 10px;
    max-width: 300px;
}

::placeholder {
  color: black;
  opacity: 0.7; 
}

button {
  cursor: pointer;
  max-width: 44px;
  height: 44px;
}

svg {
  color: #fff;
  fill: currentColor;
  max-width: 24px;
  height: 24px;
  padding: 10px;
}

</style>
