  
  //  show our modal
  function show(source,h2="Riz and spanish ash"){
    document.getElementById('modalImg').src = source;
    document.getElementById('title').innerHTML = h2;
    document.querySelector('.modal').style.display = 'flex';
    document.querySelector('.overlay').style.display = 'flex';
}

// hide back our modal
document.querySelector('.overlay').onclick = function(){
    this.style.display = "none";
    document.querySelector('.modal').style.display = 'none';
    // document.querySelector('.overlay').style.display = 'flex';
}
  //  toggle menu
            //    let, var, const
            let menutoggle = document.querySelector('.toggle');
            menutoggle.onclick = function(){
            menutoggle.classList.toggle('active');
            };
            
            $(document).ready(function(){ 
                // menu stiky transperent switch
                var windows = $(window);
                var sticky = $('.menu');
                var menuTop = $('.meuTop');
                
                windows.on('scroll', function() {
                    var scroll = windows.scrollTop();
                    if (scroll < 300) {
                    sticky.removeClass('stick');
                    }else{
                    sticky.addClass('stick');
                    }
                });
                windows.on('scroll', function() {
                    var scroll = windows.scrollTop();
                    if (scroll < 300) {
                        menuTop.show();
                    }else{
                        menuTop.hide();
                    }
                });
                // menu bar for mobile start
                $(".toggle").click(function(){
                    $(".mobile").toggle({});

                    });

                    // modal
                   
                    $('.overlay').hide();


                    // testimonials
                    $('.owl-carousel').owlCarousel({
                        loop:true,
                        margin:10,
                        nav:false,
                        responsive:{
                            0:{
                                items:1
                            },
                            600:{
                                items:1
                            },
                            1000:{
                                items:1
                            }
                        }
                    });
                    // *back to top
                    // @hide or show back to top btn
                    $(window).scroll(function(){
                      if($(this).scrollTop()>100){
                          $('.back-to-top').fadeIn(1000);
                      }else{
                        $('.back-to-top').fadeOut(1000);
                      } 
                    });
                    // @clicking on the back to top btn
                    $('.back-to-top').click(function(){
                        $('html,body').animate({scrollTop:0},2000,function(){
                            alert('Am at the top already');
                        })
                    })
                // end
            });
            // console.log(window);
          