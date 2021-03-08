<template>
  <header class="headclass pt-2" style="width: 100%">
    <div class=" container horizontal_center">
      <img :src="require('../assets/logo-head.svg')" alt="" class="navicon">
      <div class="spaceBetween" v-if="['md', 'lg', 'xl'].includes(breakcode)">
        <nav>
          <ul>s
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="horizontal_center text-dark">
        <a href="#">Sign in</a>
        <button class="outlined ml-2">Sign up</button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: ['editable', 'breakcode'],
  data () {
    return {}
  },
  mounted () {
    // console.log(this.breakcode)
  }
}
</script>
<style scoped lang="scss">
  .headclass {
    background-image: url('../assets/background-top.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: -5;
    height: 850px;
    width: 100%;
    top: 0px;
    left: 0px;
  }
  .navicon {
    margin-right: 12px;
  }
  ul {
    list-style-type: none;
    display: inline-flex;
    color: $text-dark;
  }
  ul li {
    margin-right: 36px;
  }
  a {
    text-decoration: none;
    color: $text-dark;
  }
  @media (max-width: 650px) {
    .horizontal_center {
      display: block;
    }
  }
</style>
