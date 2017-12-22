$(function (){
	var win=$(window),
		kv=$('.kv'),
		kv_slide=$('.kv_slide'),
		banner=kv_slide.find('.kv_slide_banner'),
		length=banner.length - 1,
		leftBtn=$('.leftBtn'),
		rightBtn=$('.rightBtn'),
		kv_txt_container=$('.kv_txt_container'),
		zIndex=100,
		index=0,
		isClcik=0,
		classAry=[],
		timer=0;

	timer=setInterval(function (){
		rightBtn.click();
	},5000);

	kv.hover(function (){
		clearInterval(timer);
	},function (){
		timer=setInterval(function (){
			rightBtn.click();
		},5000);
	});

	rightBtn.click(function (){
		if(isClcik==0){
			if(index < length ){
				index++;
			}else{
				index=0;
			}
			move()
		};
		return false;
	});

	leftBtn.click(function (){
		if(isClcik==0){
			if(index > 0 ){
				index--;
			}else{
				index=length;
			}
			move()
		};
		return false;
	});

	function move(){
		isClcik=1;
		zIndex++;
		banner.eq(index).css({"z-index":zIndex});
		banner.eq(index).addClass('kv_slide_bannerOpen');
		setTimeout(function (){
			banner.eq(index).siblings().removeClass('kv_slide_bannerOpen');
			isClcik=0;
		},1000);
		
		for(var i=0; i < classAry.length; i++){
			if(i != index){
				kv_txt_container.eq(i).addClass(classAry[i]);
			};
		};
		setTimeout(fadeTxt,1000)
	};

	kv_txt_container.each(function (){
		var $this=$(this);
		classAry.push($this.attr('class').replace('kv_txt_container ',''));
	});

	win.resize(function (){
		for(var i=0; i <= length; i++){
			kv_txt_container.eq(i).css({top:(win.height() / 2) - (kv_txt_container.eq(i).height())});
		}
	}).resize();

	function fadeTxt(){
		kv_txt_container.eq(index).removeClass(classAry[index]);
	};

	setTimeout(fadeTxt,1000)
});