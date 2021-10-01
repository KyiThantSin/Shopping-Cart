<template>
    <div class="navbar navbar-light navbar-expand-lg container">
        <ul class="navbar-nav p-auto">
            <li class="nav-item">
                <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/dishes">Dishes<img src="../assets/icons/fork.svg" alt="fork icon"></router-link>
            </li>
            <li class="nav-item">
                <img src="../assets/icons/fast-food.svg" alt="fast food icon">
            </li>
            <li class="nav-item">
                <img src="../assets/icons/information.svg" alt="about icon">
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name:"Navbar",
    methods:{
      //  dishes(){
           // this.$router.push({name : 'Dishes'})
       // }
    }

}
</script>

<style scoped>
    img{
        width: 30%;
        height: 30%;
    }
    ul>li{
        width: 10%;
        height: 26%;
        padding: 8px;
        margin-left: 20px;
        background-color: gainsboro;
        border: 1px solid wheat;
        border-radius: 15%;
    }
    li:hover{
        cursor: pointer;
        border: 2px solid whitesmoke;
    }
</style>