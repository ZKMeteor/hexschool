<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="pagePrevious()">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="p in pages.total_pages" :key="p" :class="{'active': p === pages.current_page
}">
          <a class="page-link" href="#" @click.prevent="updataPage(p)" >{{ p }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="pageNext()">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages'],
  methods: {
    updataPage (page) {
      this.$emit('emit-pages', page)
    },
    pagePrevious () {
      if (this.pages.has_pre) {
        const page = this.pages.current_page - 1
        this.$emit('emit-pages', page)
      }
    },
    pageNext () {
      if (this.pages.has_next) {
        const page = this.pages.current_page + 1
        this.$emit('emit-pages', page)
      }
    }
  }
}
</script>
