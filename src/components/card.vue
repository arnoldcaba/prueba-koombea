<template>
  <div class="card ml-2 mr-2">
    <div class="title-2 text-white text-center" :ref="'p_title' + index" :contenteditable="editable">{{plan.title}}</div>
    <div>Up to <span :ref="'p_numUsers' + index" :contenteditable="editable">{{plan.numUsers}}</span> users</div>
    <hr class="mt-2 mb-2">
    <div class="title-1 text-white text-center">$
      <span :ref="'p_price' + index" :contenteditable="editable">{{plan.price}}</span>
    </div>
    <div>per
      <span :ref="'p_time' + index" :contenteditable="editable">{{plan.time}}</span>
    </div>
    <div class="mt-2 mb-2">
      <button class="outlined text-white" style="padding: 10px 60px 10px 60px;">Order</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['pageData', 'plan', 'index', 'editable', 'save'],
  data () {
    return {}
  },
  methods: {
    saveproc () {
      this.pageData.plans[this.index].title = this.$refs['p_title' + this.index].innerHTML
      this.pageData.plans[this.index].numUsers = this.$refs['p_numUsers' + this.index].innerHTML
      this.pageData.plans[this.index].price = this.$refs['p_price' + this.index].innerHTML
      this.pageData.plans[this.index].time = this.$refs['p_time' + this.index].innerHTML
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
<style lang="scss" scoped>
  hr {
    border-color: $text-dark;
  }
</style>
