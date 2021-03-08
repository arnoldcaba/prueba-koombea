<template>
  <footer class="footerclass" style="width: 100%">
    <div class="container justify-spacebetween">
      <img :src="require('../assets/logo-no-color.png')" alt="" class="">
      <div class="">
        <nav>
          <ul>
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
          </ul>
        </nav>
      </div>
      <div class="social-networks">
        <a href="#">
          <img :src="require('../assets/Facebook.png')" alt="">
        </a>
        <a href="#">
          <img :src="require('../assets/Twitter.png')" alt="">
        </a>
        <a href="#">
          <img :src="require('../assets/Instagram.png')" alt="">
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: ['editable'],
  data () {
    return {}
  }
}
</script>
<style scoped lang="scss">
  .footerclass {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 50px;
  }
  ul {
    list-style-type: none;
    display: inline-flex;
    color: $text-dark;
  }
  @media (max-width: 650px) {
    ul {
      display: block
    }
    .social-networks {
      display: block;
    }
  }
  ul li {
    margin-right: 36px;
  }
  a {
    text-decoration: none;
    color: $text-dark;
  }
  .social-networks {
    width: 150px;
    display: flex;
    justify-content: space-between;
  }
</style>
