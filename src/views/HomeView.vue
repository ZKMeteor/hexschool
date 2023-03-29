<template>
  <div class="container-fluid home animate__animated animate__fadeIn">
    <Navbar></Navbar>
    <div class="box">
        <div class="title">
            <h1>Anime <br>Database</h1>
            <p>Let you find your favorite animation</p>
            <div class="seclect">
                    <router-link :to="{name:'about'}" active-class="active">Search Anime</router-link>
            </div>
        </div>
    </div>
    <div class="container-fluid box2">
        <h2 style="text-align:center; ">About Web</h2>
        <div class="row about">
            <div class="contant col-lg-5 animate__animated " id="contant">
                <h2>網站設計理念</h2>
                <p style="border-bottom:1px solid white;padding-bottom:30px;">
                    這個網站的設計靈感源自喜愛觀看動漫、常常瀏覽一些動畫相關網站（以圖片為例），並基於此興趣設計。
                    此網站針對長期觀看動漫，但經常不知道該看什麼的使用者所設計。網站將動漫作品分類，
                    可依據類型挑選想看的動漫類型，每個作品都會附上該作品網站連結，方便瞭解該作品的詳細資訊。</p>
                <p>本網站所使用之圖片來源自:<br>
                <a href="https://myself-bbs.com/portal.php">Myself 動漫</a><br>
                <a href="https://wall.alphacoders.com/">Wall Paperabyss</a>
                </p>
            </div>
            <div class="contant-2 col-lg-7">
                <img src="../assets/test.jpg" class="img-fluid ">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
},
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    text-decoration: none;
}
.top-3 a{
    color: orange;
    font-size: 25px;
}
.home{
  background:url(../assets/home.jpg)no-repeat;
    background-position:0 80%;
    background-size:cover;
    max-height: 100vh;
    overflow: auto;
    width: 100%;
    position: relative;
}

.box{
    height: 100vh;
}
.title{
    position: absolute;
    left: 10%;
    bottom: 10%;
    color: white;
    height: 400px;
    width: 450px;
    line-height: 40px;
}
h1{
    color: white;
    font-size: 80px;
    font-weight:600;
    border-right:solid white 2px ;
}
p{
    color: white;
    font-size: 22px;
    line-height: 60px;
    word-wrap:break-word
}
h2{
    color: white;
    font-size: 50px;
    font-weight: 400;
}

.seclect{
    height: 45px;
    border: white solid 2px;
    border-radius: 15px;
    text-align: center;
}

.seclect:hover{
    background-color: black;
    color: white;
    border: 0;
}
.seclect a{
    text-decoration: none;
    color:white;
    font-size: 20px;
}


.box2{
    width: 100%;
    padding: 30px 100px;
    background-color: rgb(146, 110, 1);
}

.about{
    margin-top:30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contant{
    padding-right: 10px;
    opacity: 1;
}
.contant a{
    color: white;
}

.contant a:hover{
    color: black;
    text-decoration: underline;
}

.contant-2 img{
    border-radius: 5px;
}

</style>