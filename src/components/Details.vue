<template>
    <div style="background-color:#e8eddf; border-radius:5px">
        <img :src="require('@/assets/images/'+ detailsimg)" alt="dishes" class="detailsimg">
        <div class="row">
         <div class="col-4"></div>
        <div class="item pill col-4">
            <span @click="remove"><img src="@/assets/icons/remove.svg" alt="remove icon"></span>
               <b id="number">{{itemNumber}}</b>
          <span  @click="add"><img src="@/assets/icons/plus.svg" alt="plus icon"></span>
        </div>
         <div class="col-4"></div>
        </div>

        <!--food name-->
        <div class="row mt-5">
            <div class="col-6">
               <h3> {{detailsname}}</h3>
            </div>
            <div class="col-6">
                <h3><b>${{detailsprice}}</b></h3>
            </div>
        </div>

        <!--time-->
        <div class="row mt-3">
            <div class="col-4">
                <img src="@/assets/icons/time-left.svg" class="time">
                <h5>20mins</h5>
            </div>
            <div class="col-4">
                <img src="@/assets/icons/star.svg" class="time">
               <h5>4.1</h5>
            </div>
            <div class="col-4">
                <h5>Total: </h5>
                <h5>${{perItem}}</h5>
            </div>
        </div>
        <button class="btn cart mt-5" @click="addCart(perItem,itemNumber,detailsname)">Add to Cart</button>
    </div>
</template>

<script>
export default{
    name:"Details",
    props:['detailsimg','detailsprice','detailsname'],
    data(){
        return{
            itemNumber:1,
            perItem:this.detailsprice
        }
    },
    methods:{
        add(){
            this.itemNumber++
            this.perItem = this.itemNumber * this.detailsprice
        },
        remove(){
            if(this.itemNumber === -1){
                this.itemNumber = 0
                this.perItem = 0
            }
            else{
            this.itemNumber--
            this.perItem = this.itemNumber * this.detailsprice
            }
        },
        addCart(perItem,itemNumber,detailsname){
            this.$emit("addingCart", perItem,itemNumber,detailsname)
        }
       
    }
    
}
</script>

<style scoped>
.detailsimg{
    margin-top: 20px;
    width: 60%;
}
span>img{
    display:inline-block;
    width: 10%;
}
#number{
    padding: 15px;
}
.pill{
    width: 30%;
    margin-top: 20px;
    padding: 6px;
    background-color:#FFB016 ;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-left-radius:15px ;
    border-top-right-radius: 15px;
    display:inline-block;
}
h3{
    color: rgb(63, 60, 60);
}
span:hover{
    cursor: pointer;
}
.time{
    width: 15%;
}
.cart{
    width: 80%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius:10px ;
    border-top-right-radius: 10px;
    padding: 10px;
    background-color: #FFB016;
    
}
</style>