$(function (){
	$('header').load('menu.html',function (){
		var win=$(window),
			showSearch=$('.showSearch'),
			menuBtn=$('.menuBtn');

		showSearch.click(function (){
			$(this).next().find('input').toggleClass('Mnone');
			return false;
		})

		menuBtn.click(function (){
			$('nav').toggleClass('PCshow');
			$(this).toggleClass('menuBtnClose');
		});

		win.scroll(function() {
			if(win.scrollTop() > 600){
				$('header').addClass('headerWhite');
			}else{
				$('header').removeClass('headerWhite');
			}
		}).scroll();
	});
});