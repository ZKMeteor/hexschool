<template>
    <Navbar/>
  <div class="container-fluid box">
    <div class="container ">
      <ToastMessages></ToastMessages>
      <table class="table">
      <Loading :active="isLoading"> </Loading>
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th width="200">E-mail</th>
          <th width="200">id</th>
          <th width="150">售價</th>
          <th width="100">是否付款</th>
          <th width="100">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in order" :key="i.id">
          <td>{{i.create_at}}</td>
          <td>{{i.user.email}}</td>
          <td class="text-right">
            {{i.id}}
          </td>
          <td class="text-right">
            {{i.products.product_id}}
          </td>
          <td>
            <span class="text-success" v-if="i.is_paid">啟用</span>
            <span class="text-mute" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false, i)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="delModal(i)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      order: {}
    }
  },
  methods: {
    getItem (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/orders?page=${page}`
      this.$http.get(api).then((response) => {
        this.order = response.data.orders;
        console.log(response.data);
      })
    }
  },
  created () {
    this.getItem()
  }
}
</script>

<style scoped>
.box{
padding-top: 100px;
}
</style>
