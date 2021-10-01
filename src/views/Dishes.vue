<template>

    <div class= "row top">
        <div class="col-8 col-md-5">
            <img src="@/assets/images/foodbg.jpg" alt="foodbg" class="circle">
        </div>
        <div class="col-12 col-md-7 mt-5">
            <h1>Best Dishes To Eat</h1>
            <input type="text" name="search">
            <br>
            <!--shopping cart--->
            <div class=" mt-3 d-flex" style="margin-left:80%">
            <button class="cart position-relative">
            <img src="@/assets/icons/shopping-cart.svg" alt="shopping cart" id="cart">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{noti}}
            </span>
            </button>
            </div>
        </div>
    </div>

    <!--body-->
    <div class="row mt-2">
        <div class="col-md-7 mt-4">
            <h2>Yum Yum</h2>
            <p>Adding a joy of Best taste · Giving a Twist of best Taste · Lets you Eat Better · Food making is a new Skill ·</p>
           <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" :src="require('@/assets/images/'+ dishes[0].src0)" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">{{dishes[0].name}}</h5>
                                <p class="card-text">${{dishes[0].price0}}</p>
                                <button class="btn btn-primary" @click="buy(dishes[0])">Order</button>
                            </div>
                        </div>

                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top d-block w-100" :src="require('@/assets/images/'+dishes[1].src0)" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">{{dishes[1].name}}</h5>
                                <p class="card-text">${{dishes[1].price0}}</p>
                                <button class="btn btn-primary" @click="buy(dishes[1])">Order</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top d-block w-100" :src="require('@/assets/images/'+dishes[2].src0)" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">{{dishes[2].name}}</h5>
                                <p class="card-text">${{dishes[2].price0}}</p>
                                <button class="btn btn-primary" @click="buy(dishes[2])">Order</button>
                            </div>
                        </div>

                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top d-block w-100" :src="require('@/assets/images/'+dishes[3].src0)" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">{{dishes[3].name}}</h5>
                                <p class="card-text">${{dishes[3].price0}}</p>
                                <button class="btn btn-primary" @click="buy(dishes[3])">Order</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top d-block w-100" :src="require('@/assets/images/'+dishes[4].src0)"  alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">{{dishes[4].name}}</h5>
                                <p class="card-text">${{dishes[4].price0}}</p>
                                <button class="btn btn-primary" @click="buy(dishes[4])">Order</button>
                            </div>
                        </div>

                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top d-block w-100" :src="require('@/assets/images/'+dishes[5].src0)" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">{{dishes[5].name}}</h5>
                                <p class="card-text">${{dishes[5].price0}}</p>
                                <button class="btn btn-primary" @click="buy(dishes[5])">Order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <!--col-->
        </div>
        <!--details about item-->
        <div class="col-md-5">
            <div v-if="showDetails">
                <Details :detailsimg="detailsimg" :detailsprice="detailsprice" :detailsname="detailsname" @addingCart="calculate"/>
            </div>
            <div v-else>
                <img src="@/assets/images/restaurant.jpg" alt="restaurant" style="width:55%">
                <br>
                <em class="mt-2">Just like grandma used to make..</em>
            </div>
        </div>
    </div>
    <br>           
              
</template>

<script>
import Details from '../components/Details.vue'

export default{
    name:"Dishes",
    components:{Details},
    data(){
        return{
            dishes:[
                {name:"Steak",src0:"dishes1.jpg", price0:10, id:0},
                {name:"Sea Food",src0:"dishes4.jpg", price0:10, id:1},
                {name:"Fresh Salad",src0:"salad.jpg", price0:5, id:2},
                {name:"Salad",src0:"sal.jpg", price0:6, id:3},
                {name:"Soup",src0:"dishes3.jpg", price0:6, id:4},
                {name:"Dimsum",src0:"dishes5.jpg", price0:8, id:5},

            ],
            showDetails:false,
            detailsimg:null,
            detailsprice:null,
            detailsname:null,
            totalItems:[],
            noti:0
        }
    },
    methods:{
        buy(e){
            this.showDetails = true
            console.log("User clicked buy btn")
            this.detailsimg = e.src0
            this.detailsprice = e.price0
            this.detailsname = e.name
            console.log(this.detailsprice)
            console.log(this.detailsimg)
            console.log(this.detailsname)

        },
        calculate(perItem,itemNumber,detailsname){
            this.noti++
            this.totalItems.push({itemprice:perItem, numbers:itemNumber, itemname:detailsname})
            console.log(this.totalItems)
        },
        goTotal(){
            this.$router.push({name:"Total"})
        }
    }

}
</script>

<style scoped>
    .circle{
        padding: 10px;
        width: 60%;
        border-radius: 20%;
       
      
    }
    .top{
        background-color: #FFB016;
    }
    input{
        width: 50%;
        padding: 5px;
        padding-left: 10px;
        border: 1px solid whitesmoke;
        margin-left: 0px;
        border-top-left-radius: 10px ;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        
    }
    p{
        font-size: 20px;
        color: grey;
    }
    em{
        font-size: 25px;
        color: green;
    }
   .card{
       display: inline-block;
       padding: 2px;
       margin-left: 8px;
       justify-content: space-around;
   }
   .carousel-control-prev-icon, .carousel-control-next-icon {
       background-color:rgb(84, 84, 87);
}
#cart{
    width: 25%;
}
.cart{
    width: 80px;
    height: 50px;
    border: none;
  color: white;
  padding: 5px;
  display: inline-block;
  cursor: pointer;
  border-radius: 15px;
  justify-content: right;
}
</style>