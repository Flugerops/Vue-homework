<template>
    <div>
      <form v-on:submit.prevent="addBook">
        <p>Add Book</p>
        <p>Book name: <input type="text" required v-model="bookName"></p>
        <p>How many?: <input type="number" required v-model="bookNumber"></p>
        <button type="submit">Add Book</button>
      </form>
      <hr>
      <p>Book List</p>
      <ul>
        <li v-for="item in bookList">{{ item.name }}, {{ item.number }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bookName: null,
        bookNumber: null,
        bookList: [
          {  }
        ]
      } 
      },
      methods: {
        addBook() {
            let book = {
                name: this.bookName,
                number: this.bookNumber
            }
            this.bookList.push(book)
            this.name = null
            this.number = null 
        }
    }
    };
  </script>
  
  <style></style>