<template>
  <div class="how_works">
     <div class="container" style="padding:0">
         <div class="col-md-4 heading">
             <div class="span">
                         02<span>HOW IT WORKS</span> 
             </div>
             <h1>Simple and <br>handly rental <br> process</h1>
         </div>
         <div class="col-md-8 cheks">
            <div class="row">
                <div class="col-md-6">
                    <p>Lorem ipsum dolor sit amet consectetur
                      aperiam velitatque non id nulla.</p>
                    <hr>  
                    <ul class="list-unstyled">
                            <li class="image"><img style="height:20px;width:20px" src="../../assets/img/cheks.png" alt=""></li>
                            <li>
                                <ul class="list-unstyled">
                                    <li ><a href="" style="color:#333456">check the available accessoire</a>  <i class="fas fa-arrow-right" style="font-size:10px" aria-hidden="true"></i> </li>
                                </ul>
                            </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <p>Lorem ipsum dolor sit amet consectetur
                      aperiam velitatque non id nulla.</p>
                    <hr>  
                    <ul class="list-unstyled">
                            <li class="image"><img style="height:20px;width:20px" src="../../assets/img/faq.png" alt=""></li>
                            <li>
                                <ul class="list-unstyled">
                                    <li ><a href="" style="color:#333456">check the available accessoire</a>  <i class="fas fa-arrow-right" style="font-size:10px" aria-hidden="true"></i> </li>
                                </ul>
                            </li>
                        </ul>
                </div>
            </div>
         </div>
     </div>
     <!-- our works -->
     <div class="ourworks">
         <div class="container">
             <div class="row">
                <div class="col-md-3">
                    <div class="service-1 text-center">
                        <img style="width:100px;heigth:100px;border-radius:50%" src="../../assets/img/edit.png" alt="">
                        <h3 class="text-center">Text us</h3>
                        <p>
                            Lorem ipsum dolor sitametconsectetur adipisicing elit.Soluta quidem alias
                                         facilis.  
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="service-1 text-center marginTop">
                        <img style="width:100px;heigth:100px;border-radius:50%" src="../../assets/img/trolley.png" alt="">
                        <h3 class="text-center">We deliver</h3>
                        <p>
                            Lorem ipsum dolor sitametconsectetur adipisicing elit.Soluta quidem alias
                                         facilis.  
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="service-1 text-center">
                        <img style="width:100px;heigth:100px;border-radius:50%" src="../../assets/img/driver.png" alt="">
                        <h3 class="text-center">You drive</h3>
                        <p>
                            Lorem ipsum dolor sitametconsectetur adipisicing elit.Soluta quidem alias
                                         facilis.  
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="service-1 text-center marginTop">
                        <img style="width:100px;heigth:100px;border-radius:50%" src="../../assets/img/app.png" alt="">
                        <h3 class="text-center">We pick it up</h3>
                        <p>
                            Lorem ipsum dolor sitametconsectetur adipisicing elit.Soluta quidem alias
                                         facilis.  
                        </p>
                    </div>
                </div>
             </div>
             <!-- the end of our works -->
         </div>
     </div> 
  </div>  
</template>
<script>
export default {
    
}
</script>
<style>
.how_works{
    padding: 150px  0  60px;
}
.how_works .heading span{
    margin-left: 80px;
    font-size: 12px;
    font-weight: bold;
}
.how_works .heading span::after{
    content: "";
    position: absolute;
    width: 70px;
    top: 9px;
    left: 31px;
    border-top: 1px solid black;
}
.how_works .heading h1{
    color: #333456
}
.how_works  .cheks {
    padding-top: 30px;
}
.how_works  .cheks li{
   display: inline-block;
}
.how_works  .cheks li img{
   margin-right:40px;
}
.ourworks{
    padding: 100px 0;
}
.ourworks .service-1{
    padding: 0px 30px;
    border-bottom: 1px solid #333456;
}
.ourworks .service-1 h3{
    padding: 10px
}
.ourworks .service-1 p{
    padding-bottom:20px;
}
.ourworks .marginTop{
    margin-top: 40px;
}

</style>