jQuery.fn.jcScrollTop = function(settings) {
      settings = jQuery.extend({
           duration:1000, 
           scroleActivateAt:200,
           scrollElementId:"jcScrollTop",
           easingType:"easeOutElastic",
           position:'right', // left | right | center
           scrollText:"Scroll to top",
           backgroundColor:'#c00',
           foreColor:"#FFF",
           fontFamily:"calibri",
           fontSize:'15px',
           fontWeight:'bold',
           textPadding:'5px',
           containerWidth:'120px',
		   zIndex:'1',
           containerBorder:'2px solid #960404',
           borderRadius:'10px 10px 0px 0px',           
           callback:function(){
                      
                    }
    },settings);
      
      $cur = this;	
      jQuery("body").append("<div id='" + settings.scrollElementId + "' style='z-index: "+ settings.zIndex + ";background:" + settings.backgroundColor + ";border:" + settings.containerBorder + ";border-radius:" + settings.borderRadius + ";position:fixed;bottom:-2px;width:" + settings.containerWidth + ";font-weight:" + settings.fontWeight + ";color:" + settings.foreColor + ";text-align:center;font-family:" + settings.fontFamily + ";font-size:" + settings.fontSize + ";cursor:pointer;padding:" + settings.textPadding + "'>" + settings.scrollText + "</div>");
      var jcreposition = function() {
			  var windowCenter = Math.max(0, ((jQuery(window).width() - $cur.outerWidth()) / 2) + jQuery(window).scrollLeft() - (parseInt(settings.containerWidth.replace('px',''))/2)) -  parseInt(settings.textPadding.replace('px','')) + "px";	
			  if(settings.position == 'left') 
				jQuery("#"+settings.scrollElementId).css("left",'10px');
			  else if(settings.position == 'center') 
				jQuery("#"+settings.scrollElementId).css("left",windowCenter);
			  else 
				jQuery("#"+settings.scrollElementId).css("right",'10px');
	  }
	  jcreposition();
      jQuery("#"+settings.scrollElementId).hide().click(function(){
          jQuery("html,body").animate({
                                    scrollTop:0
                                  },
                                  settings.duration,
                                  settings.easingType,
                                  function(){
                                    settings.callback();  
                                  });
      });

	  jQuery(window).resize(function() {
			setTimeout(function(){jcreposition();},150);
	  });	

      jQuery(window).scroll(function(){
          var whereat = jQuery(window).scrollTop();
          if(whereat > settings.scroleActivateAt) {
            jQuery("#"+settings.scrollElementId).show('slow');              
          }
          else {
            jQuery("#"+settings.scrollElementId).hide('slow');      
          }
      });
 };