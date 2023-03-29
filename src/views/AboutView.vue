<template>
  <div class="container-fluid">
    <Navbar/>
    <div class="container box">
      <div class="text-end">
        <button class="btn btn-primary" type="button" @click="openModal">增加一個</button>
      </div>
    <table class="table">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in products" :key="i.id">
          <td>{{i.category}}</td>
          <td>{{i.title}}</td>
          <td class="text-right">
            {{i.origin_price}}
          </td>
          <td class="text-right">
            {{i.price}}
          </td>
          <td>
            <span class="text-success" v-if="i.is_enabled">啟用</span>
            <span class="text-mute" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm">編輯</button>
              <button class="btn btn-outline-danger btn-sm">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ProductModalVue ref="ProductModal" :product="tempProduct" @update-Product="updataProduct"></ProductModalVue>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ProductModalVue from '../components/ProductModal.vue'
export default {
  data(){
    return{
      products:[],
      pagination:{},
      tempProduct:{}
    }
  },
  components: {
    Navbar,
    ProductModalVue
  },
  methods:{
    getproducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
              this.$http.get(api)
              .then((res) => {
                  if (res.data.success) {
                    console.log(res.data);
                    this.products = res.data.products
                    this.pagination = res.data.pagination
                  }
              })
    },
    openModal(){
      this.tempProduct = {}
      const productComponent = this.$refs.ProductModal;
      productComponent.showModal();
    },
    updataProduct(item){
      this.tempProduct = item;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      const productComponent = this.$refs.ProductModal;
      this.$http.post(api,{ data: this.tempProduct})
      .then((response) => {
        console.log(response);
        productComponent.hideModal();
        this.getproducts();
      })
    }
  },
  created () {
    const token =document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    this.$http.defaults.headers.common['Authorization'] = token;
    const api = `${process.env.VUE_APP_API}api/user/check`
            this.$http.post(api,this.user)
            .then((res)=>{
              if(!res.data.success){
                this.$router.push('/')
              }
            })
    console.log(token);

    this.getproducts()
  }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    text-decoration: none;
}
.box{
  padding: 100px;
}
</style>