<template>
  <div class="home" :style="{ backgroundImage: 'url(' + require('@/assets/images/FoodOrder.png') + ')'}">
    <div class="row">
        <div class="col-md-6 col-12 mt-5" id="parent">
          <transition name="slide" id="child">
            <p v-if="showImg"><img src="@/assets/images/salad-removebg-preview.png"></p>
          </transition>
        </div>

        <div class="col-12 col-md-6 mt-5">
          <h1>Yum Yum</h1>
          <br>
          <div>
          <h3>The Healthy Food <br> For Walthy Mood</h3>
          <p>Good food is what we deliver. <br>
            Freshness and craziness delivered at your doorstep.
            <br>
            <em>Delivery Fee 20% OFF</em>
          </p>
          </div>
          <button class="btn mt-3">Menu</button>
        </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
   
  },
  data(){
    return{
      gallery:[
        {id:1, source: "./assets/images/salad-removebg-preview.png"},
        {id:1, source: "./assets/images/steak-removebg-preview.png"}
      ],
      showImg : false
    }
   
  },
  mounted(){
    this.showImg = true
  }
 
}
</script>

<style scoped>
  .home{
    width: 100%;
    height: 430px;
    background: transparent;
  }
  img{
    width: 80%;
  }
  p{
    font-size: 20px;
    color: grey;
  }
.slide-enter-active {
  animation: motion-in 6s;
  animation-delay: 0ms;

}

@keyframes motion-in {
  0% {
    transform: rotate(180deg);
    margin-top: 0%;
    margin-left: 35%;
  }
  50%{
    margin-top: 10%;
    margin-left: 12%;
  }
  100% {
    transform: rotate(-180deg);
    margin-left: 0%;
  }
}
#parent{
  margin-top: 50px;
  position: relative;
	transform: rotate(0deg);
	transition: transform 0.7s linear;
}
#child{
  position: absolute;
	transform: rotate(0deg);
	transition: transform 0.7s linear;
	top: -40px; 
	left: 110px;
}
.btn{
  background-color: orange;
  margin-left: 0px;
}
.btn:hover{
  cursor: pointer;
  border: 1px solid whitesmoke;
}
</style>