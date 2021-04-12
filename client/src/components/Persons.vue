<template>
  <div class="persons">
    <table class="table table-striped" v-if="persons">
          <thead>
            <tr>
              <th v-for="key in Object.keys(persons.dbresp[0])" :key="key">{{ key }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="person in persons.dbresp" :key="person">
              <td v-for="val in person" :key="val">
                <ul v-if="typeof val === 'object'">
                  <li v-for="hobby in val" :key="hobby">
                    {{ hobby.name }}
                  </li>
                </ul>
                <template v-else>
                  {{ val }} {{typeof val}}
                </template>
              </td>
            </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: "Persons",
  props: ["persons"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
