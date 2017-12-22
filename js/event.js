$(function (){
	var leftBtn=$('.leftBtn2'),
		rightBtn=$('.rightBtn2'),
		event_container_out=$('.event_container_out'),
		length=event_container_out.length-1,
		index=0,
		isClick=0;

	rightBtn.click(function (){
		if(isClick==0){
			isClick=1;
			if(index<length){
				index++;
			}else{
				index=0;
			};
			event_container_out.eq(index).delay(400).fadeIn(400,function (){
				isClick=0;
			}).siblings().stop().fadeOut(400);
		};
		return false;
	});

	leftBtn.click(function (){
		if(isClick==0){
			isClick=1;
			if(index>0){
				index--;
			}else{
				index=length;
			};
			event_container_out.eq(index).delay(400).fadeIn(400,function (){
				isClick=0;
			}).siblings().stop().fadeOut(400);
		};
		return false;
	});
});