<template>
  <div class="home">
    Status: {{ status.msg }}
    <!-- {{ persons }} -->
    <persons :persons="persons"></persons>
    <!-- : == v-bind: -->
    <button @click.prevent="getPersons">Get Persons</button>
    <!-- @ == v-on: -->
  </div>
</template>

<script>
// @ is an alias to /src
import Persons from "@/components/Persons.vue";

const baseUrl = "http://localhost/api/v2";

export default {
  name: "Home",
  components: {
    Persons,
  },
  data() {
    return {
      persons: false,
      status: {
        msg: "OK",
        wasBedektes: "",
      },
    };
  },
  methods: {
    async getPersons() {
      const response = await fetch(baseUrl + "/persons", {
        method: "GET",
      });
      const responseJson = await response.json();
      this.persons = responseJson;
      //  console.log(responseJson);
    },
    postPerson() {},
  },
};
</script>
