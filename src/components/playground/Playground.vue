<template>
  <div class="hello">
    <!-- v-bind -->
    <div v-bind:class="backgroundClassName">Some Class With Background</div>

    <!-- v-on -->
    <button v-on:click="handleClick">Click This</button>

    <!-- v-once -->
    <div v-once> the first message will never change: {{ message }} </div>
    <div> the first message will never change: {{ message }} </div>

    <!-- v-html -->
    <div v-html="anchorTag"></div>

    <!-- v-model -->
    <label for="firstName">First Name</label>
    <input type="text" name="firstName" v-model="nameInput"> 

    <!-- computed -->
    <div>{{ message }} => reversed: {{ reversedMessage }}</div>


    <!-- watch -->
    <input type="text" name="firstName" v-model="nameInput">
  </div>
</template>

<script src="./Playground.js"></script>
<style src="./Playground.css" scoped> </style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
