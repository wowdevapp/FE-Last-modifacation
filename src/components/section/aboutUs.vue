<template>
    <div class="aboutUs">
       <div class="container">
           <div class="row">
               <div class="col-md-6  citycarosel">
                   <div class="city-img"><img src="../../assets/img/city.jpg" alt="" class="city"></div>
                   <div class="mycarousel">
                            <div id="testimonial-slider" class="owl-carousel">
                                <div class="testimonial">
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, sapien lorem dictum lacus, non consequat odio ipsum nec est. Sed mattis egestas elementum. Nulla facilis
                                    </p>
                                    <ul class="list-unstyled testimonial-bottom">
                                        
                                        <li class="avatar">
                                            <ul class="list-unstyled avatarName">
                                                <li class="img"><img src="../../assets/img/avatar1.jpg" alt=""></li>
                                                <li class="name">SAM R.</li>
                                            </ul>
                                        </li>
                                        <li class="review">
                                            <ul class="starReview list-unstyled">
                                                <li class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></li>
                                                <li class="nbr-review">28 reviews at yelp</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    
                                                             
                                </div>
            
                                <div class="testimonial">
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, sapien lorem dictum lacus, non consequat odio ipsum nec est. Sed mattis egestas elementum. Nulla facilis
                                    </p>
                                    <ul class="list-unstyled testimonial-bottom">
                                        
                                        <li class="avatar">
                                            <ul class="list-unstyled avatarName">
                                                <li class="img"><img src="../../assets/img/avatar2.jpg" alt=""></li>
                                                <li class="name">SAM R.</li>
                                            </ul>
                                        </li>
                                        <li class="review">
                                            <ul class="starReview list-unstyled">
                                                <li class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></li>
                                                <li class="nbr-review">28 reviews at yelp</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
            
                                <div class="testimonial">
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, sapien lorem dictum lacus, non consequat odio ipsum nec est. Sed mattis egestas elementum. Nulla facilis
                                    </p>
                                    <ul class="list-unstyled testimonial-bottom">
                                        
                                        <li class="avatar">
                                            <ul class="list-unstyled avatarName">
                                                <li class="img"><img src="../../assets/img/avatar1.jpg" alt=""></li>
                                                <li class="name">SAM R.</li>
                                            </ul>
                                        </li>
                                        <li class="review">
                                            <ul class="starReview list-unstyled">
                                                <li class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></li>
                                                <li class="nbr-review">28 reviews at yelp</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                </div>
                </div>
                   </div>
                <div class="col-md-6 aboutus-right">
                    <div class="span">
                         01<span>ABOUT US</span> 
                    </div>
                    <div class="content">
                        <h2>Let's make cities better</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Cumque distinctio accusamus quos recusandae unde, asperiores possimus rerum, 
                            <br>
                            quod porro eligendi accusantium nisi 
                            vel vero voluptate perspiciatis nulla doloribus labore ipsum.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            <br>

                            Cumque distinctio accusamus quos recusandae unde, asperiores possimus rerum, 
                            quod porro eligendi accusantium nisi 
                            vel vero voluptate perspiciatis nulla doloribus labore ipsum.
                        </p>
                        <hr>
                        <ul class="more list-unstyled">
                            <li class="image"><img style="height:40px;width:40px" src="../../assets/img/value.png" alt=""></li>
                            <li>
                                <ul class="list-unstyled">
                                    <li>quod porro eligendi?</li>
                                    <li ><a href="" style="color:#333456">Learn more about company</a>  <i class="fas fa-arrow-right" style="font-size:10px" aria-hidden="true"></i> </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
               </div>
               </div>
           </div>
       </div>
</template>
<script>
export default {
 
}
</script>
<style lang="css">
 .aboutUs{
     padding-top: 100px;
 }
 /* start carousel */
 #testimonial-slider{
    padding: 50px 20px 35px 20px;
    background: #fff;
    text-align: center;
     
}
.testimonial .description{
    font-size: 14px;
    color: #fff;
    line-height: 26px;
    text-indent: 30px;
    position: relative;
    border-left: 1px solid #fff;
}
.testimonial .description:before{
    content: "\f10d";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    top: 0;
    left: -15px;
}
.testimonial .title{
    font-size: 22px;
    font-weight: bold;
    color: #646262;
    text-transform: capitalize;
    margin: 0;
    letter-spacing: 1px;
}
.testimonial .post{
    display: block;
    font-size: 15px;
    color: #363636;
}
.owl-buttons{
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 40%;
    left: 0;
}
.owl-prev,
.owl-next{
    position: absolute;
    left: 0;
    transition: all 0.4s ease-in-out 0s;
}
.owl-next{
    left: auto;
    right: 0;
}
.owl-buttons .owl-prev:before,
.owl-buttons .owl-next:before{
    content: "\f104";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 60px;
    font-weight: 900;
    color: #cacaca;
    line-height: 20px;
    opacity: 0.8;
}
.owl-buttons .owl-next:before{
    content: "\f105";
}
.owl-buttons .owl-prev:hover:before,
.owl-buttons .owl-next:hover:before{
    opacity: 1;
}
.owl-theme .owl-controls .owl-buttons div{
    background: transparent;
}
.owl-theme .owl-controls{
    margin-top: 40px;
}
/* .owl-theme .owl-controls .owl-page span{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid dodgerblue;
    background: url("") no-repeat;
    background-size: cover;
    transition: all 0.3s ease-in-out 0s;
}
.owl-theme .owl-controls .owl-page:nth-child(2) span{
    background: url("") no-repeat;
    background-size: cover;
}
.owl-theme .owl-controls .owl-page:nth-child(3) span{
    background: url("") no-repeat;
    background-size: cover;
} */
/* .owl-theme .owl-controls.clickable .owl-page:hover span{
    opacity: 0.5;
}
.owl-theme .owl-controls .owl-page.active span,
.owl-theme .owl-controls .owl-page.active:hover span{
    border-color: dodgerblue;
    opacity: 1;
}
@media only screen and (max-width: 479px){
    .owl-buttons{ bottom: 30%; }
} */
.citycarousel{
    position: relative;
}
.mycarousel{
    position: absolute;
    bottom: -130px;
    right: 35px;
    width: 500px;
    height: 300px;
}
.mycarousel #testimonial-slider {
   padding: 50px 20px 0px 20px; 
    background: #333456;
    text-align: center;
    color: #fff;
    border-radius: 10px;
}
.mycarousel .testimonial-bottom>li{
    float:left;
    margin: 0 0 20px;
    padding: 0;
}
.mycarousel .testimonial-bottom>li .avatarName li{
    display:inline-block;
    margin: 0 0 0 20px;
   
}
.mycarousel .testimonial-bottom>li .avatarName li.img{
    width: 50px;
    height: 50px;
}
.mycarousel .testimonial-bottom>li .avatarName li.img img{
    width: 50px;
    height: 50px;
    border-radius: 50%
}
.mycarousel .testimonial-bottom>li.review{
    float: right;
}
.mycarousel .testimonial-bottom>li.review .starReview{
   margin-top: 10px;
}
.mycarousel .testimonial-bottom>li.review .starReview .stars,
.mycarousel .testimonial-bottom>li.review .starReview  .nbr-review
{
    font-size: 10px;
}
/* end carousel */
.aboutUs .aboutus-right .span{
    margin: 0 0 0 80px
}
.aboutUs .aboutus-right span{
    margin-left: 70px;
    font-size: 12px ;
    font-weight: bold;
}

.aboutUs .aboutus-right span::before{
    content: "";
    position: absolute;
    width: 60px;
    top: 9px;
    left: 112px;
    border-top: 1px solid black;

}
.aboutUs .aboutus-right .content{
  margin: 0 0 0 80px
}
.aboutUs .aboutus-right .content h2{
    margin-bottom: 30px;
    color: #333456
}
.aboutUs .aboutus-right .content p{
     margin-bottom: 30px;
}
.aboutUs .aboutus-right .content hr{
   margin-bottom: 30px; 
}
.aboutUs .aboutus-right .content .more>li{
    float: left;
}
.aboutUs .aboutus-right .content .more>li.image{
    margin-right: 20px;
}


</style>