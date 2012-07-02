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
           containerBorder:'2px solid #960404',
           borderRadius:'10px 10px 0px 0px',           
           callback:function(){
                      
                    }
    },settings);
      
      var windowCenter = Math.max(0, ((jQuery(window).width() - this.outerWidth()) / 2) + jQuery(window).scrollLeft()) + "px";

      jQuery("body").append("<div id='"+settings.scrollElementId+"' style='background:"+settings.backgroundColor+";border:"+settings.containerBorder+";border-radius:"+settings.borderRadius+";position:fixed;bottom:-2px;width:"+settings.containerWidth+";font-weight:"+settings.fontWeight+";color:"+settings.foreColor+";text-align:center;font-family:"+settings.fontFamily+";font-size:"+settings.fontSize+";cursor:pointer;padding:"+settings.textPadding+"'>"+settings.scrollText+"</div>")
      
      if(settings.position == 'left') 
        jQuery("#"+settings.scrollElementId).css("left",'10px');
      else if(settings.position == 'center') 
        jQuery("#"+settings.scrollElementId).css("left",windowCenter);
      else 
        jQuery("#"+settings.scrollElementId).css("right",'10px');

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
      jQuery(window).scroll(function(){
          var whereat = jQuery(window).scrollTop();
          if(whereat > settings.scroleActivateAt) {
            // you can do all sort of animations here
            jQuery("#"+settings.scrollElementId).show('slow');              
          }
          else {
            jQuery("#"+settings.scrollElementId).hide('slow');      
          }
      });
 };