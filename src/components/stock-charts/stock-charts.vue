<template>
<div>
    <chartjs-line :width="300" :height="100" :data="valued" :labels="valued" :bind="true" ></chartjs-line>
    </div>
</template>

<script>
export default {
  name: 'charts',

  props: ['valued'],
  data () {
    return {
    }
  }
}
</script>

