<template>
<header>
<nav class="navbar">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Upshift</a>
    </div>
    <div class="collapse navbar-collapse" id="navbar-collapse">
     <ul class="nav navbar-nav nav-1">
       <li><a href="">Personal</a></li>
       <li><a href="">Buisness</a></li>
     </ul>
      <ul class="nav navbar-nav nav-2">
        <li><a href="#">About</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">ContactUs</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right nav-3">
       <li><a href="">Login</a></li>
       <li><a href="" class="btn btn-default">Join Now</a></li>
     </ul>

    </div>
  </div>
</nav> 
<!--end navbar -->
<!-- start main header -->
<div class="main-header">
    <div class="container">
      <div class="row">
          <div class="col-md-6">
             <div class="contact">
               <h1>Just Drive.<br>We'll Do The Rest</h1>
               <p>All inclusives,based car subscreption</p>
               <form class="form-inline">
                  <div class="form-group mx-sm-3 mb-2">
                    <input type="" class="form-control" id="phone" placeholder="Enter phone number">
                  </div>
                  <button type="submit" class="btn  mb-2">Get Started</button>   
                </form>
             </div>
          </div>
          <div class="col-md-6 text-center ">
             <img class="h-image" src="../../assets/img/header.png" alt="">
          </div>
      </div>
    </div>
</div>
<div class="header_bottom">
  <div class="partners">
    <img src="../../assets/img/img2.jpg" alt="">
  </div>
  <div class="scroll text-center">
      <span class="arrow"><i class="fas fa-arrow-down" aria-hidden="true"></i></span>
  </div>
</div>
<!-- end main header -->
</header>
</template>
<script>
export default {
 
}
</script>
<style lang="css" scoped>
/* navbar start */
header{
  background-color :#F6F5F8;
  height: 100vh;
  position: relative;
}
nav.navbar{
    position: relative;
    min-height: 50px;
    margin-bottom: 20px;
    border: none;

}
header nav .navbar-collapse{
  margin: 0;
  padding: 0;
}
header nav a{
  color: #72738E;
}
header nav a.navbar-brand{
  color: #333456;
  font-weight: bold;
}
header nav .nav-1{
  margin: 0  50px;
}
header nav .nav-1 li{
  margin: 0  15px;
}
header nav .nav-1 li a:hover,
header nav .nav-2 li a:hover,
header nav .nav-3 li a:hover{
    border-top: 1px solid #333456;
    background-color: transparent;
}
header nav .nav-1>li a:before{
  content:'';
  position: absolute;
  height: 15px;
  width: 15px;
  top: 17px;
  left: -3px;
  border-radius: 50%;
  background: #cecfd7;
}
header nav .nav-3>li{
  margin-left: 20px;
}
header nav .nav-3>li .btn{
  padding: 5px 10px;
  margin-top: 9px;
  border-radius:20px;
  background-color: #e6e8ea;
  border: none;
}
/* navbar end */
/* main header start */
.main-header{
  padding: 50px 0 0;
}
.main-header .h-image{
  width: 500px;
  height: 400px;
  box-shadow: -2px 5px 10px 10px #95959950;
}
.main-header .contact h1{
   color:#333456;
   font-weight:bold;
   font-size: 40px;
   margin-top: 80px;  
}
.main-header .contact p{
  margin: 20px 0;
  font-size:20px;
  color: #72738c
}
.main-header .contact form input{
  background-color:transparent;
  border:none !important;
  border-radius:0;
  border-bottom: 1px solid #72738c;
  margin-right: 20px;
}
.main-header .contact form button{
  background-color: #72738e;
  border-radius: 20px;
  padding: 10px 15px;
  color: white;
}
.header_bottom {
  position: absolute;
  bottom: 0;
}
.header_bottom  div{
  float: left;
}
.header_bottom .partners{
  width: 85%;
  height: 90px;
}
.header_bottom .partners img{
  width: 100%;
  height: 100%;
}
.header_bottom .scroll{
  width: 15%;
}
.header_bottom .scroll{
    padding-top:30px;
}

</style>