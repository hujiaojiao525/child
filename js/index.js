define(['swiper','common'],function(s,common){
	if(window.location.href.indexOf('index.html') == -1) return;
	// 调用图片轮播
	var mySwiper= new Swiper('.swiper-container',{
		direction:'horizontal',
		loop:true,// 无缝
		pagination:'.swiper-pagination',// 分页
		autoplay:2000,
		autoplayDisableOnInteraction:false // 手指离开自动播
	})
	// 调用iscroll
	var myScroll=new IScroll('.index-main');
<<<<<<< HEAD
	console.log("33333333333");
	     
=======
	console.log(1);
	
>>>>>>> 271dc8437db8f8d4f3624a3108c12700ffc0eef5
	common._href();

	     
})
