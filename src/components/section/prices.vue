<template>
    <div class="pricing text-center">
        <div class="heading">
            <span>04</span> <span style="width:50px; border-top:1px solid black;margin-top:10px"></span>------<span> pricing </span>
        </div>
        <div class="container">
            <h2 style="color:#333456">Monthly plans for less than a parking space</h2>
        <p style="padding:20px 150px">
            Lorem ipsum dolor sit amet consectetur,
             Lorem ipsum dolor sit amet consectetur,dolor sit amet consectetur,dolor sit amet consectetur, 
             ipsum dolor sit amet consectetur,dolor sit amet consectetu
        </p>
        <div class="row price-boxes">
               <div class="col-md-4">
                   <div class="single-pricing-box"
                            @mouseover="hover_1 = true"
                            @mouseleave="hover_1 = false"
                            :class="{ active: hover_1 }">
                       <h3>FlexPass</h3>
                       <p>Get 2 days par month</p>
                       <div class="pricing-icon">
                           <h2>$150 <span style="font-size:12px;">/mo</span></h2>
                       </div>
                       <p class="border">
                           Lorem, ipsum dolor quo dicta recusandae. quo dicta recusandae.
                       </p>
                       <button class="btn">start with flex pass</button>
                       <span style="display:block"><a style="color:#72738e" href="">view plan details </a> <i class="fas fa-arrow-right fa-1x"></i></span>
                   </div>
               </div>
               <div class="col-md-4">
                   <div class="single-pricing-box active" 
                            @mouseover="hover_2 = true"
                            @mouseleave="hover_2 = false"
                            :class="{ active: hover_2 }">
                       <h3>Get way</h3>
                       <p>Get 2 days par month</p>
                       <div class="pricing-icon">
                           <h2>$250 <span style="font-size:12px;">/mo</span></h2>
                       </div>
                       <p class="border">
                           Lorem, ipsum dolor quo dicta recusandae. quo dicta recusandae.
                       </p>
                       <button class="btn">start with flex pass</button>
                       <span style="display:block"><a style="color:#72738e" href="">view plan details </a> <i class="fas fa-arrow-right fa-1x"></i></span>
                   </div>
               </div>
               <div class="col-md-4">
                   <div class="single-pricing-box"
                            @mouseover="hover_3 = true"
                            @mouseleave="hover_3 = false"
                            :class="{ active: hover_3 }">
                       <h3>Freedom</h3>
                       <p>Get 2 days par month</p>
                       <div class="pricing-icon">
                           <h2>$350 <span style="font-size:12px;">/mo</span></h2>
                       </div>
                       <p class="border">
                           Lorem, ipsum dolor quo dicta recusandae. quo dicta recusandae.
                       </p>
                       <button class="btn">start with flex pass</button>
                       <span style="display:block"><a style="color:#72738e" href="">view plan details </a> <i class="fas fa-arrow-right fa-1x"></i></span>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
     data() {
    return {
      hover_1: false,
      hover_2: false,
      hover_3: false,
    };
  }

}
</script>
<style>
.pricing{
    padding: 50px 0;
    margin:  50px 0;
}
.pricing .heading{
    margin: 10px auto;
}
/* start price tables */
.price-boxes{
    padding: 100px 0;
}
.single-pricing-box{
    padding: 50px 60px;
    margin: 0 30px;
    border: 1px solid #e4e3e8;
}
 .active{
    transform: scaleY(1.2);
    border-top:2px solid #72738e;
    -webkit-box-shadow: 6px 6px 29px 5px rgba(0,0,0,0.1);
    -moz-box-shadow: 6px 6px 29px 5px rgba(0,0,0,0.1);
    box-shadow: 6px 6px 29px 5px rgba(0,0,0,0.1);
}
.single-pricing-box h3{
    color: #343655;
    padding: 0  0 10px 0 ;
}
.single-pricing-box p.border{
    padding:0 0  20px 0 ;
    border-bottom:1px solid #e4e3e8
}
.single-pricing-box .btn{
    padding: 10px 20px;
    margin: 20px 0;
    background-color: #72738e;
    border-radius: 20px;
    color: white
}

</style>