<template>
<div>

  <h1 class="text-center t"> Welcome to your simple Web Checkist </h1>

   
  <div class="container">
    <div class="row">

    <div class="col-12 col-md-5 col-lg-5 my-2 m-md-2 border shadow-sm rounded p-0" v-for="(List,index) in todosList" :key="index">
      <p class="text-center">{{List.ListName}}</p>  
      <ul class="d-flex p-0 d-flex justify-content-between" v-for="(items,index) in List.todos" :key="index">
        <li class="mx-2">{{items.item}}</li> 
       <div class="btn-group">
  <button type="button" class="btn btn-info btn-sm dropdown-toggle mx-2" data-bs-toggle="dropdown" aria-expanded="false">
    Actions
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul> 
</div>
      </ul>
    </div>  
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todosList: [
        {
          ListName: "House todos 2",
          todos: [
            {
            item : 'fish',
            check: false
          },
           {
            item : 'Vegetables',
            check: false
          },
          {
            item : 'wine',
            check: false
          }
          ],
        },
        {
          ListName: "House todos 2",
          todos: [
            {
            item : 'fish',
            check: false
          },
           {
            item : 'Vegetables',
            check: false
          },
          {
            item : 'wine',
            check: false
          }
          ],
        }
      ],
    };
  },
};
</script>

<style>
.t{
  color: #42b983;
}
ul{
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
