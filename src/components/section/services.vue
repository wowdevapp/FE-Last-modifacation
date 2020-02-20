<template>
    <div class="services">
         <div class="container">
             <div class="row">
                 <div class="col-md-4">
                    <div class="img-container">
                        <img style="width:400px;heigth:500px" src="../../assets/img/man.jpg" alt="">
                    </div>
                 </div>
                 <div class="col-md-8 content-zone">
                    <div class="zone">
                        <div class="service-zone">
                            <div class="span text-center">
                                        03<span>SERVICE ZONE</span> 
                            </div>
                        </div>
                    </div>
                    <div class="zone_text">
                        <h2>We've got SF covered</h2>
                        <p>we provide to delivery option for any trip</p>
                        <ul class="options list-unstyled">
                            <li> <i class="fas fa-check"></i> </li>
                            <li class="titel">
                                <ul class="list-unstyled titel">
                                    <li class="h_2" >concierge services(8am-8pm)</li>
                                    <li>Lorem ipsum dolor sit amet consectetur omnis,
                                        dolor sit amet consectetur omnis,
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="options list-unstyled">
                            <li> <i class="fas fa-check"></i> </li>
                            <li class="titel">
                                <ul class="list-unstyled ">
                                    <li class="h_2" >Self service (24/7)</li>
                                    <li class="par">Lorem ipsum dolor sit amet consectetur omnis,
                                        dolor sit amet consectetur omnis,dolor sit amet consectetur omnis,
                                        dolor sit amet consectetur omnis,
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                     <ul class="list-unstyled bottom-zone">
                            <li class="image"><img style="height:20px;width:20px;margin-right:20px" src="../../assets/img/map.png" alt=""></li>
                            <li>
                                <ul class="list-unstyled">
                                    <li ><a href="" style="color:white">Tell us where to expand</a>  <i class="fas fa-arrow-right" style="font-size:10px" aria-hidden="true"></i> </li>
                                </ul>
                            </li>
                    </ul>
                 </div>
             </div>
         </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.content-zone{
    background-color: #333456;
    color: white;
    padding-bottom: 40px;
}
.content-zone .zone_text{
    margin: 20px 0px 20px 245px;
    border-bottom: 1px solid white;
}
.content-zone .zone_text h2,
.content-zone .zone_text p
{
    margin: 20px 0;
}
.content-zone .zone_text .options{
    color: #c0c3d0;
    margin: 20px 0;
    padding: 0;
    display:flex;
}
.content-zone .zone_text .options .h_2{
    color: white;
}
.content-zone .zone_text .options .title .par{
  font-size: 12px;
}
.content-zone .zone_text .options .title li{
    margin: 20px 0;
}

.content-zone .zone_text .options>li{
    margin-right: 20px;
}
.services .zone{
        padding: 100px 50px 20px 50px;
}
.services .service-zone span{
    margin:80px;
    font-size: 12px;
    font-weight: bold;
}
.services .service-zone span::after{
    content: "";
    position: absolute;
    width: 70px;
    top: 110px;
    left: 280px;
    border-top: 1px solid white;
}
.services .img-container{
    position: relative;
    z-index: 100;
}
.services .img-container img{
    position: absolute;
    top: -80px;
    left: 80px;
}
.bottom-zone{
    margin-left: 245px;
    margin-bottom: 20px;
    margin-top: 40px;
    display: flex;
}

</style>