<template>
  <div class="row">
    <div class="col-12">
      <Breadcrumbs />
      <h1 class="page-title">Новости</h1>
      
    </div>
    <main class="col-md-9">
      dfdf
    </main>
    <div class="col-md-3">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'

export default {
  head() {
    return {
      title: "Новости - ТРК"
    }
  },
  

  components: {
    Sidebar, Breadcrumbs
  },

  mounted() {
    console.log(this.$meta)
  }
}
</script>