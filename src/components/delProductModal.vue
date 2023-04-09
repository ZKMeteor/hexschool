<template>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">刪除</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        確定要刪除  <h1>{{tempProduct.title}}</h1>  嗎
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" @click="$emit('delProductModal',tempProduct)">Del</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'
export default {
  data () {
    return {
      modal: '',
      tempProduct: {}
    }
  },
  props: {
    delproduct: {
      type: Object,
      deflaut () { return {} }
    }
  },
  watch: {
    delproduct () {
      this.tempProduct = this.delproduct
    }
  },
  mixins: [modalMixins]
}
</script>

<style scoped>
h1{
  display: inline;
  font-size: 25px;
  font-weight: 600;
}

</style>
