<template>
  <div>
    <h1 class="text-center t">Welcome to your simple Web CheckLists</h1>

    <div class="container-fluid container-lg">
      <div class="row">
        <div class="d-flex flex-wrap justify-content-center">
          <div
            class="col-12 col-md-6 col-lg-5 m-2 border shadow-sm rounded p-0"
            v-for="(List, ListIndex) in todosList"
            :key="ListIndex"
          >
            <h2 class="text-center">{{ List.ListName }} {{ ListIndex }}</h2>
            <ul
              class="d-flex p-0 d-flex justify-content-between"
              v-for="(items, index) in List.todos"
              :key="index"
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
                <button
                  class="btn btn-danger mx-2 shadow-sm"
                  v-on:click="removeItem(ListIndex, index)"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </ul>
            <div class="d-flex w-100 justify-content-center">
              <label for="new-todo"></label>
              <div class="input-group flex-nowrap p-3">
                <span class="input-group-text" id="addon-wrapping"
                  ><i class="far fa-smile"></i
                ></span>
                <input
                  type="text"
                  class="form-control new-todo"
                  placeholder="New TODO :D"
                  aria-label="newTodo"
                  aria-describedby="addon-wrapping"
                  v-model="List.newItem"
                  v-on:keyup.enter="addTodo(ListIndex)"
                />
              </div>
              <button
                class="btn btn-success m-1 my-3 shadow-sm"
                v-on:click="addTodo(ListIndex)"
              >
                <i class="fas fa-plus">todo</i>
              </button>
            </div>
            <div class="d-flex w-100 justify-content-center">
              <button
                class="btn btn-danger m-1 my-3 shadow-sm"
                v-on:click="deleteList(ListIndex)"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
          <div
            class="col-12 col-md-6 col-lg-5 m-2 border shadow-sm rounded p-0 d-flex justify-content-center align-items-center"
          >
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
              </div>
              <button class="h-35 btn btn-success m-1 my-3 shadow-sm">
                <i class="fas fa-plus"></i>
              </button>
            </form>
          </div>
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
          newItem: "",
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
          ListName: "House",
          newItem: "",
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
          ListName: "House todos",
          newItem: "",
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
          newItem: "",
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
    removeItem: function (listIndex, index) {
      this.todosList[listIndex].todos.splice(index, 1);
    },
    addTodo: function (listIndex) {
      this.todosList[listIndex].todos.push({
        id: Math.random(),
        item: this.todosList[listIndex].newItem,
        check: false,
      });
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
