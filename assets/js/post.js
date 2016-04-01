$( document ).ready(function() {
	// check for disqus
	if(typeof disqus_shortname === 'undefined'){
		$("#post-comments").remove();
	}
	
	// highlight the code
	$('code').each(function(i, e) {hljs.highlightBlock(e)});
	
	// video fluid size
	 $("#post-content").fitVids();
});