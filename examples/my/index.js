new Vue({
  el: ".a",
  data() {
    return {
      name: 1,
      inputVal: ''
    }
  },
  components: {
    testb: {
      template: '<div>111</div>'
    }
  },
  methods: {
    getName() {
      setTimeout(_ => {
        this.name = "修改----我是父组件a"
      }, 2000)
    },
    handleInput(e) {
      console.log(e.target.value)
    }
  },
})
