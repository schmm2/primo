$( document ).ready(function() {
	// check for disqus
	if(typeof disqus_shortname === 'undefined'){
		$("#post-comments").remove();
	}
	
	var i = 0;
	// highlight the code
	$('code').each(function(i, e) {
		hljs.highlightBlock(e) 
		$(this).attr("id","code-"+i);
		$(this).wrap("<div class='code_wrap'></div");
		$(this).after("<div data-clipboard-target='#code-"+i+"'class='copy hover'></div>");
		i++;
	});
	
	var clipboard = new Clipboard('.copy');	
	
	clipboard.on('click', function(){
		console.log($(this));
	});
	
	clipboard.on('success', function(e) {
		e.clearSelection();
		
		$(e.trigger).removeClass('hover')
		$(e.trigger).addClass('copy_done');
		
		window.setTimeout(function() {
	        $(e.trigger).removeClass('copy_done');
	        $(e.trigger).addClass('hover');
	    }, 2000);
	  
	});
		
	// video fluid size
	$("#post-content").fitVids();
 
	// image lightbox
	$("#post-content img").each(function(index){
		$(this).wrap('<a class="lightbox" href="'+this.src+'"></a>');
	});
	
	

    $('.lightbox')
	.on('openstart.fluidbox', disableScroll)
	.on('closestart.fluidbox', enableScroll)
	.fluidbox({
		 viewportFill: 0.9,
	});
});