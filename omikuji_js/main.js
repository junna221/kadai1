$(function(){
	let flg = true;
    	$(".bg01").click(function(){
        		if(flg){ 
	        		flg = false;
            		$(".shikaku").slideUp();
        		}else{
	       		flg = true;
           			$(".shikaku").slideDown();
        		};
    	});
});
