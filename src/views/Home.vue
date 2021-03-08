<template>
  <article>
    <div class="menu_edit" v-if="editable">
      <div class="title-2 text-darker">Edit</div>
      <div class="justify-spacebetween">
        <button @click="save=!save" class="red_button">save</button>
        <button @click="$emit('cancel-editing')" class="outlined">Cancel</button>
      </div>
    </div>
    <aside>
      <img :src="require('../assets/Rectangle 9.png')" alt="" class="navicon">
    </aside>
    <!-- seccion de try for free -->
    <section class="pruebas">
      <div class="container">
        <div class="col-6">
          <div class="title-1 text-white text-left" :contenteditable="editable" ref="mainTitle">{{pageData.mainTitle}}</div>
          <div class="basetext text-left" :contenteditable="editable" ref="mainResume">{{pageData.mainResume}}</div>
          <div class="text-left mt-5">
            <button class="red_button">Try for free</button>
          </div>
        </div>
      </div>
    </section>
    <!-- Main features -->
    <section class="container">
      <div class="title-2 text-darker text-center" ref="featuresTitle" :contenteditable="editable">{{pageData.featuresTitle}}</div>
      <div class="align-center">
        <div style="width: 80%">
          <p class="basetext" ref="featuresResume" :contenteditable="editable">{{pageData.featuresResume}}</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-4" v-for="(f, index) in pageData.features" :key="index">
          <img :src="require(`../assets/${f.icon}`)" alt="">
          <div class="caption bold" :ref="'f_title' + index" :contenteditable="editable">{{f.title}}</div>
          <p class="text-center basetext" :ref="'f_desc' + index" :contenteditable="editable">{{f.desc}}</p>
        </div>
      </div>
    </section>
    <!-- characteristics  -->
    <section class="container mt-5" id="characteristics">
      <div class="row" v-for="(item, index) in pageData.highlights" :key="index">
        <div class="col-6 justify-center" v-if="['xs', 'sm', 'md'].includes(breakcode)">
          <div class="title-2 text-left text-darker" :ref="`h_title${index}`" :contenteditable="editable">{{item.title}}</div>
          <p class="text-left" :ref="`h_desc${index}`" :contenteditable="editable">{{item.desc}}</p>
        </div>
        <div class="col-6 justify-center" v-if="['xs', 'sm', 'md'].includes(breakcode)">
          <img :src="require(`../assets/${item.image}`)" alt="" class="">
        </div>
        <div class="col-6 justify-center" v-if="['lg', 'xl'].includes(breakcode)">
          <div v-if="(index % 2) === 0">
            <div class="title-2 text-left text-darker" :ref="`h_title${index}`" :contenteditable="editable">{{item.title}}</div>
            <p class="text-left" :ref="`h_desc${index}`" :contenteditable="editable">{{item.desc}}</p>
          </div>
          <img :src="require(`../assets/${item.image}`)" alt="" class=""  v-if="(index % 2) !== 0">
        </div>
        <div class="col-6 justify-center" v-if="['lg', 'xl'].includes(breakcode)">
          <div v-if="(index % 2) !== 0">
            <div class="title-2 text-left text-darker" :ref="`h_title${index}`" :contenteditable="editable">{{item.title}}</div>
            <p class="text-left" :ref="`h_desc${index}`" :contenteditable="editable">{{item.desc}}</p>
          </div>
          <img :src="require(`../assets/${item.image}`)" alt="" class="" v-if="(index % 2) === 0">
        </div>
      </div>
    </section>
    <!-- pricing -->
    <section class="container mt-5" style="margin-top: 300px" id="prices">
      <div class="title-1 text-white text-center mb-2" ref="pricingTitle" :contenteditable="editable">{{pageData.pricingTitle}}</div>
      <div class="align-center mb-4">
        <div style="width: 70%" ref="pricingResume" :contenteditable="editable">{{pageData.pricingResume}}</div>
      </div>
      <div class="row">
        <div class="col-6" v-for="(plan, index) in pageData.plans" :key="index">
          <card
            class="card"
            :pageData="pageData"
            :plan="plan"
            :index="index"
            :editable="editable"
            :save="save">
          </card>
        </div>
      </div>
      <hr class="mt-2 mb-2">
    </section>
  </article>
</template>
<script>
import card from '@/components/card'
export default {
  props: ['editable', 'pageData', 'breakcode'],
  components: { card },
  data () {
    return {
      save: false
    }
  },
  mounted () {
    console.log(this.pageData)
  },
  methods: {
    saveproc () {
      // tomando los valores del HTML y asignandolos a la estructura
      this.pageData.mainTitle = this.$refs.mainTitle.innerHTML
      this.pageData.mainResume = this.$refs.mainResume.innerHTML
      this.pageData.featuresTitle = this.$refs.featuresTitle.innerHTML
      this.pageData.featuresResume = this.$refs.featuresResume.innerHTML
      for (let i = 0; i < this.pageData.features.length; i++) {
        this.pageData.features[i].title = this.$refs['f_title' + i][0].innerHTML
        this.pageData.features[i].desc = this.$refs['f_desc' + i][0].innerHTML
      }
      for (let i = 0; i < this.pageData.highlights.length; i++) {
        this.pageData.highlights[i].title = this.$refs['h_title' + i][0].innerHTML
        this.pageData.highlights[i].desc = this.$refs['h_desc' + i][0].innerHTML
      }
      this.pageData.pricingTitle = this.$refs.pricingTitle.innerHTML
      this.pageData.pricingResume = this.$refs.pricingResume.innerHTML
      // emite evento para el save en localstorage
      this.$emit('store-data')
    }
  },
  watch: {
    save (val) {
      if (val) {
        this.saveproc()
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .menu_edit {
    background: white;
    top: 0;
    right: 0;
    margin: 70px;
    width: 300px;
    border-radius: 7px;
    padding: 10px;
    position: fixed;
    .red_button {
      padding: 10px 50px 10px 50px;
      height: inherit;
      width: inherit;
    }
    .outlined {
      padding: 10px 50px 10px 50px;
      height: inherit;
      width: inherit;
    }
  }
  .pruebas {
    // background-image: url('../assets/background-top.png');
    background-repeat: no-repeat;
    height: 798px;
    background-size: cover;
    padding-top: 20px;
  }
  hr {
    border-color: $text-dark;
  }
  aside {
    float: right;
  }
  .title-1 {
    margin-top: 100px;
  }
</style>
