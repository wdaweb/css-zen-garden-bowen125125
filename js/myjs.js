let nowloc = 0
    console.log($('.road').offsetHeight);
    $(window).on('scroll', function(){
      // 目前卷軸捲動的距離(與最頂端之間的距離)
      nowloc =$(window).scrollTop()
      if(nowloc > 300 && nowloc < 1500){
        $('.road').addClass('active')
        $('.what').addClass('active2')
      } else {
        $('.road').removeClass('active')
        $('.what').removeClass('active2')
      } 
      if(nowloc > 1000 && nowloc < 2300) {
        $('.participation').addClass('active')
        $('.benefits').addClass('active2')
      } else {
        $('.participation').removeClass('active')
        $('.benefits').removeClass('active2')
      }
    })
  $('.parallax-window').parallax({imageSrc: './images/884373.png'})
