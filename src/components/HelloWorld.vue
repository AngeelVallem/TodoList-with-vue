<template>
  <div class="hello">
    <h1>{{msg}}</h1>

<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>


  </div>
</template>

<script>

const data = {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  }

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  list-style: upper-alpha;
}

h1 {
  text-align: center;
  color: #42b983;
}
</style>
