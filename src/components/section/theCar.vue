<template>
<div class="theCar">
   <div class="container">
        <div class="row">
                <div class="col-md-6">
                    <div class="span">
                        05<span>The Car</span> 
                    </div>
                    <h2 class="alwys">Always Driven an <br> identical pirusi</h2>
                    <p class="parg">Lorem ipsum dolor sit amet consectetur adipisicing elit
                        . Minus totam possimus dolores, suscipit fugit doloribus dolore corrupti
                         dolorem ducimus odit obcaecati neque nam, libero unde harum excepturi
                          aspernatur dicta debitis.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit
                        . Minus totam possimus dolores, suscipit fugit doloribus dolore corrupti
                         dolorem ducimus odit obcaecati neque nam, libero unde harum excepturi
                          aspernatur dicta debitis.</p>

                </div> 
                <div class="col-md-6">
                    <div class="image1">
                        <img style="height:300px;width:400px " src="../../assets/img/image1.jpg" alt="">
                    </div>
                    <div class="twoImage">
                        <img style="height:300px;width:200px" src="../../assets/img/image3.jpg" alt="">
                        <img class="image2" style="height:200px;width:300px" src="../../assets/img/image2.jpg" alt="">
                    </div>
                </div> 
        </div>
        <div class="row join">
            <div class="col-md-8">
                <h1>Join instantly with 0$ down <br>and get your car right now</h1>
            </div>
            <div class="col-md-4">
                <button class="btn ">Get started</button>
            </div>
        </div>
        <div class="footer row">
            <div class="col-md-3">
                <ul class="first-list list-unstyled">
                   <li><a>Personel</a></li>
                   <li><a href="http://">Buisness</a> </li>
                   <li><a href="http://">Product</a> </li>
                   <li><a href="http://">Pricing</a> </li>
                   <li><a href="http://">LogIn</a> </li>
                   <li style="font-weight:bold;font-size:20px" class="logo"><a href="http://">Upshift</a> </li>
                </ul>
            </div>
            <div class="col-md-3">
                <ul class="second-list list-unstyled">
                   <li><a>Company</a></li>
                   <li><a href="http://">About</a> </li>
                   <li><a href="http://">Blog</a> </li>
                   <li><a href="http://">Careers</a> </li>
                   <li><a href="http://">Contact Us</a> </li>
                   <li class="logo">copy rigth fouad abdelhaq &copy; 2020 </li>
                </ul>
            </div>
            <div class="col-md-3">
                <ul class="third-list list-unstyled">
                   <li><a href="http://">Help Center</a> </li>
                   <li><a href="http://">FAQ</a> </li>
                   <li><a href="http://">Insurance</a> </li>
                   <li><a href="http://">Agreement</a> </li>
                </ul>
            </div>
            <div class="col-md-3">
                <ul class="last-list list-unstyled">
                   <li>Stay in touch</li>
                   <li> <p>Join our mailing list to get updates</p></li>
                   <li class="input">
                       <input type="text" class="form-control form-rounded" placeholder="Email Adress">
                       <button class="btn text-center"><i class="fas fa-paper-plane" aria-hidden="true"></i> </button>
                   </li>
                   <li class="social">
                      <ul style="display:flex" class=" list-unstyled">
                          <li> <img style="width:30px;heigth:30px;margin-rigth:20px" src="../../assets/img/facebook.png" alt=""></li>
                          <li><img style="width:30px;heigth:30px;margin-rigth:20px" src="../../assets/img/twitter.png" alt=""></li>
                          <li><img style="width:30px;heigth:30px;margin-rigth:20px" src="../../assets/img/google-plus.png" alt=""></li>
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
.theCar{
    background-color: #f6f5f8;
    padding: 50px 0 0;
}
.theCar .span{
    margin: 0 ;
}
.theCar span{
    margin-left: 70px;
    font-size: 12px ;
    font-weight: bold;
}

.theCar span::before{
    content: "";
    position: absolute;
    width: 60px;
    top: 9px;
    left: 34px;
    border-top: 1px solid black;

}
.theCar .alwys{
    color:#343655;
}
.theCar .parg{
   margin: 20px  100px 0 0;
}
.theCar .image1{
    position: relative
}
.theCar .image1 img{
    position: absolute;
    top: -144px;
    left: 0;
}
.theCar .twoImage{
  margin-top: 180px;
}
.theCar .twoImage .image2{
    margin-left: 20px;
    margin-top: -100px;
}
.theCar .join{
    padding: 100px 0;
    border-bottom: 1px solid #dcdbe2;
}
.theCar .join h1{
    color: #343655;
    font-weight: bold;
}
.theCar .join .btn{
    background-color: #72738e;
    color: white;
    margin-top: 35px;
    padding: 10px 40px;
    border-radius: 20px;
}
.theCar .footer{
    padding: 70px 0 0;
}
.theCar .footer .first-list>li,
.theCar .footer .second-list>li,
.theCar .footer .third-list>li,
.theCar .footer .last-list>li
{
    margin-bottom: 20px;
    color: #34344d
}
.theCar .footer .first-list>li.logo,
.theCar .footer .second-list>li.logo
{
    margin-top: 40px;
}
.theCar .footer .last-list input{
    background-color: #e6e8ea;
    border-radius: 20px;
    border: none;
    padding: 20px;
     position: relative;
}
.theCar .footer .last-list .btn{
    position: absolute;
    top: 85px;
    right: 22px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #343655;
    color: white;
    
}
.theCar .footer .last-list .btn .fas{
line-height: 30px;
position: absolute;
top: 0;
left: 6px;   
}
.theCar .footer .first-list>li a,
.theCar .footer .second-list>li a,
.theCar .footer .third-list>li a,
.theCar .footer .last-list>li a
{
    color: #34344d
}
.theCar .footer .last-list .social ul li{
    margin-right: 10px;
}


</style>