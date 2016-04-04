$( document ).ready(function() {
	// check for disqus
	if(typeof disqus_shortname === 'undefined'){
		$("#post-comments").remove();
	}
	
	// highlight the code
	$('code').each(function(i, e) {hljs.highlightBlock(e)});
	
	// video fluid size
	$("#post-content").fitVids();
 
	// image lightbox
	$("#post-content img").each(function(index){
		$(this).wrap('<a class="lightbox" href="'+this.src+'"></a>');
	});
	$().fluidbox({
       
    });
    $('.lightbox')
	.on('openstart.fluidbox', disableScroll)
	.on('closestart.fluidbox', enableScroll)
	.fluidbox({
		 viewportFill: 0.9,
	});
});