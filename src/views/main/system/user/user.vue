<template>
  <hy-form v-bind="formItems"></hy-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm from '@/base-ui/form/index'
import { formItems } from './configData/search'

export default defineComponent({
  name: '',
  components: { HyForm },

  setup() {
    return { formItems }
  }
})
</script>
