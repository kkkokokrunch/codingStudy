<template>
  <div>
      <label for="">
          <div>
              <slot></slot>
          </div>
      </label>
  </div>
</template>

<script>
import AsyncValidator from 'AsyncValidator'
export default {
    name:'iFormItem',
    inject:['form'],
    mixins:[Emitter],
    props: {
        label: {
            type:String,
            default:''
        },
        prop: {
            type:String
        }
    },
    //组件渲染时，将实例缓存到form中
    mounted() {
        if(this.prop) {
            this.dispatch('iForm','on-form-item-add',this)
            setRules()
        }
    },
    beforeDestroy() {
        this.dispatch('iForm','on-form-item-remove',this)
    },
    methods: {
        setRules() {
            this.$on('on-form-blur',this.onFeildBlur)
            this.$on('on-form-change',this.onFeildChange)
        }
    }
}
</script>

<style>

</style>