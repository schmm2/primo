$( document ).ready(function() {
	// check for disqus
	if(typeof disqus_shortname === 'undefined'){
		$("#post-comments").remove();
	}
});