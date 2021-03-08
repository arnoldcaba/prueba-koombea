<template>
  <div id="app">
    <headcomp :editable="editable" :breakcode="breakcode" v-if="breakcode"></headcomp>
    <main>
      <home
        v-if="pageData"
        :editable="editable"
        :pageData="pageData"
        :breakcode="breakcode"
        @store-data="saveInLocalStorage"
        @cancel-editing="cancelEditing"
        :key="keyComponents"/>
    </main>
    <footercomp :editable="editable" :breakcode="breakcode" v-if="breakcode"></footercomp>
  </div>
</template>
<script>
import headcomp from '@/components/headcomp'
import footercomp from '@/components/footercomp'
import home from '@/views/Home'
export default {
  components: {
    headcomp, footercomp, home
  },
  data () {
    return {
      editable: false,
      pageData: '',
      keyComponents: 0,
      breakcode: 'md'
    }
  },
  async mounted () {
    // instancia la escucha por el comando ctrl + k
    this.listenForCommand()
    // instancia la data desde el localstorage
    const pageData = JSON.parse(localStorage.getItem('pageData'))
    if (pageData === null) this.setPageData()
    else this.pageData = pageData
    // get start width
    this.setResize(window.screen.width)
    // get change width
    window.addEventListener('resize', (setWindowWidth) => {
      const val = setWindowWidth.currentTarget.innerWidth
      this.setResize(val)
    })
  },
  methods: {
    setPageData () {
      console.log('in set data')
      const pageData = {
        mainTitle: 'Monitor your business on real-time dashboard',
        mainResume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.',
        featuresTitle: 'Main Features',
        featuresResume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.',
        features: [
          {
            icon: 'watch.png',
            title: 'Monitoring 24/7',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet volutpat.'
          },
          {
            icon: 'monitor.png',
            title: 'Widget System',
            desc: 'Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar.'
          },
          {
            icon: 'rocket.png',
            title: 'Best Performance',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat..'
          }
        ],
        highlights: [
          {
            image: 'screen-01.png',
            title: 'Automated Reports & Widget Alerts',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.'
          },
          {
            image: 'screen-02.png',
            title: 'Fully customizable to address your needs ',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.'
          },
          {
            image: 'screen-03.png',
            title: 'Pre-built Dashboard Templates',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.'
          }
        ],
        pricingTitle: 'Pricing Plans',
        pricingResume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est.',
        plans: [
          {
            title: 'Starter',
            numUsers: 3,
            price: 29,
            time: 'month'
          },
          {
            title: 'Standard',
            numUsers: 20,
            price: 99,
            time: 'month'
          },
          {
            title: 'Premium',
            numUsers: 200,
            price: 299,
            time: 'month'
          }
        ]
      }
      localStorage.setItem('pageData', JSON.stringify(pageData))
      this.pageData = pageData
    },
    saveInLocalStorage () {
      localStorage.setItem('pageData', JSON.stringify(this.pageData))
      this.editable = false
    },
    cancelEditing () {
      const conf = confirm('You are about to delete all unsaved changes, do you wish to procede')
      if (conf) {
        const pageData = JSON.parse(localStorage.getItem('pageData'))
        if (pageData === null) this.setPageData()
        else this.pageData = pageData
        this.keyComponents++
      }
      this.editable = false
    },
    setResize (wd) {
      if (wd <= 650) this.breakcode = 'xs'
      else if (wd <= 950) this.breakcode = 'sm'
      else if (wd <= 1264) this.breakcode = 'md'
      else if (wd <= 1904) this.breakcode = 'lg'
      else this.breakcode = 'xl'
    },
    listenForCommand () {
      window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.keyCode === 75) {
          e.preventDefault()
          e.stopImmediatePropagation()
          this.editable = !this.editable
          console.log(this.editable ? 'Is editable' : 'Not editable')
        }
      })
    }
  }
}
</script>
<style lang="scss">
  body {
    background-color: $body-color;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    color: $text-dark;
  }
</style>
