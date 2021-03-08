<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="col-2"></div>
      <div class="col-3"></div>
      <div class="col-4"></div>
      <div class="col-3"></div>
      <!-- <ul>
        <li>pruebas1</li>
        <li>pruebas2</li>
        <li>pruebas3</li>
        <li>pruebas4</li>
        <li>pruebas5</li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    h1 {
      color: $main-title;
    }
  }
</style>
