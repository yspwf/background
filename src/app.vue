<template>
    <div class="main">
        <!-- <router-link to="home">home</router-link>
        <router-link to="mine">mine</router-link>
        <router-link to="cart">cart</router-link>
         <h4>标题</h4>
         这是{{page}}页面 -->

         <router-view></router-view>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                page:'3333333'
            }
        }
    }
</script>

<style>
    h4{
        color:#fff;
    }
</style>