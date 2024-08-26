<template>
  <div>
    <h1>{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: 'BootStrap',
  data() {
    return {
      pageTitle: ''
    };
  },
  created() {
    this.pageTitle = this.$route.name;
  }
}
</script>
<style>
div{
  display: flex;
  justify-items: center;
  align-items: center;
}

</style>
