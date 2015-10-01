// init link forward
jQuery(function(){
	jQuery('a[href="#"]').not('.opener, .nav-opener, li.has-drop>a, .btn-next, .btn-prev, .close').on('click', function(e){
		location.href = "backPage.html";
		e.preventDefault();
	});
});