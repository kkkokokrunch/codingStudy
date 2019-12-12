<template>
    <div class="show">
        show
        <i-form :model="formValidate" :rule="ruleValidate">
            <i-form-item label="用户名" prop="name">
                <i-input v-model="formValidate.name"></i-input>
            </i-form-item>
        </i-form>
    </div>
</template>

<script>
import iForm from './form'
import iFormItem from './form-item'
import iInput from './input'
export default {
    components: {
        iForm,
        iFormItem,
        iInput
    },
    data() {
        return {
            formValidate: {
                name:''
            },
            ruleValidate: {
                name:[
                    {
                        required:true,
                        message:'用户名不能为空',
                        trigger:'blur'
                    }
                ]
            }
        }
    },
}
</script>

<style>

</style>