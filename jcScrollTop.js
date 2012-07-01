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
      
      var windowCenter = Math.max(0, (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft()) + "px";

      $("body").append("<div id='"+settings.scrollElementId+"' style='background:"+settings.backgroundColor+";border:"+settings.containerBorder+";border-radius:"+settings.borderRadius+";position:fixed;bottom:-2px;width:"+settings.containerWidth+";font-weight:"+settings.fontWeight+";color:"+settings.foreColor+";text-align:center;font-family:"+settings.fontFamily+";font-size:"+settings.fontSize+";cursor:pointer;padding:"+settings.textPadding+"'>"+settings.scrollText+"</div>")
      
      if(settings.position == 'left') 
        $("#"+settings.scrollElementId).css("left",'10px');
      else if(settings.position == 'center') 
        $("#"+settings.scrollElementId).css("left",windowCenter);
      else 
        $("#"+settings.scrollElementId).css("right",'10px');

      $("#"+settings.scrollElementId).hide().click(function(){
          $("html,body").animate({
                                    scrollTop:0
                                  },
                                  settings.duration,
                                  settings.easingType,
                                  function(){
                                    settings.callback();  
                                  });
      });
      $(window).scroll(function(){
          var whereat = $(window).scrollTop();
          if(whereat > settings.scroleActivateAt) {
            // you can do all sort of animations here
            $("#"+settings.scrollElementId).show('slow');              
          }
          else {
            $("#"+settings.scrollElementId).hide('slow');      
          }
      });
 };