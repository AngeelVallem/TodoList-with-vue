<template>
  <div>
    <h1 class="text-center t">Welcome to your simple Web CheckLists</h1>

    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-5 col-lg-5 my-2 m-md-2 border shadow-sm rounded p-0"
          v-for="(List, index) in todosList"
          :key="index"
        >
          <h2 class="text-center">{{ List.ListName }}</h2>
          <ul
            class="d-flex p-0 d-flex justify-content-between"
            v-for="(items, id) in List.todos"
            :key="id"
          >
            <li class="mx-2" v-show="items.check === false">
              <input
                type="checkbox"
                v-model="items.check"
                class="form-check-input mx-2"
              />
              <label class="form-check-label"></label>
              {{ items.item }}
            </li>
            <li
              class="mx-2"
              v-show="items.check === true"
              style="text-decoration: line-through"
            >
              <input
                type="checkbox"
                v-model="items.check"
                class="form-check-input mx-2"
              />
              <label class="form-check-label"></label>
              {{ items.item }}
            </li>
            <div>
              <button class="btn btn-warning shadow-sm">
                <i class="far fa-edit"></i>
              </button>
              <button class="btn btn-danger mx-2 shadow-sm">
                <i class="fas fa-minus"></i>
              </button>
            </div>
          </ul>
          <div class="d-flex w-100 justify-content-center">
            <button class="btn btn-success m-1 my-3 shadow-sm">
              <i class="fas fa-plus"> todo</i>
            </button>
          </div>
          <div class="d-flex w-100 justify-content-center">
            <button
              class="btn btn-danger m-1 my-3 shadow-sm"
              v-on:click="deleteList(index)"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <div
          class="col-12 col-md-5 col-lg-1 my-2 m-md-2 border shadow-sm rounded p-5 d-flex justify-content-center align-items-center"
        >
            <button class="btn btn-success m-1 my-3 shadow-sm">
              <i class="fas fa-plus"></i>
            </button>
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
          ListName: "Bugs",
          todos: [
            {
              id: Math.random(),
              item: "fish",
              check: false,
            },
            {
              id: Math.random(),
              item: "Vegetables",
              check: false,
            },
            {
              id: Math.random(),
              item: "wine",
              check: false,
            },
          ],
        },
        {
          ListName: "House todos 2",
          todos: [
            {
              id: Math.random(),
              item: "fish",
              check: false,
            },
            {
              id: Math.random(),
              item: "Vegetables",
              check: false,
            },
            {
              id: Math.random(),
              item: "wine",
              check: false,
            },
          ],
        },
        {
          ListName: "House todos 2",
          todos: [
            {
              id: Math.random(),
              item: "fish",
              check: false,
            },
            {
              id: Math.random(),
              item: "Vegetables",
              check: false,
            },
            {
              id: Math.random(),
              item: "wine",
              check: false,
            },
          ],
        },
        {
          ListName: "Market List",
          todos: [
            {
              id: Math.random(),
              item: "fish",
              check: false,
            },
            {
              id: Math.random(),
              item: "Vegetables",
              check: false,
            },
            {
              id: Math.random(),
              item: "wine",
              check: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    deleteList: function (index) {
      this.todosList.splice(index, 1);
    },
  },
};
</script>

<style>
.t {
  color: #42b983;
}
ul {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
