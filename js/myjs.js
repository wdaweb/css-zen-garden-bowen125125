$("html").easeScroll();


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

  // loading
  let loadingBar = new ldBar("#loadingBar", {
    // 值得設定 ------------------------------------------------------------------
    "value": 0, // 目前值
    'min': 0, // 最小值
    'max': 100, // 最大值
    // 'precision': '0.00001', // 精確浮點數，小數點幾位數
    // 'duration': 1,

    // 使用套件圖形設定 ----------------------------------------------------------
    // 'preset': 'energy', // 形狀,circle、fan、bubble、line、stripe、energy、rainbow
    // "stroke": 'yellow', // 不支援 rgba()，其他支援
    // "stroke-width": 2, // 粗細
    // 'stroke-lincap': 'round',

    // 使用自訂義圖片 ------------------------------------------------------------
    'img': './images/load.svg',
    'img-size': '120,120',
    'type': 'fill',
    'fill-dir': 'btt', // loading 方向，ltr、rtl、btt、ttb
    'fill-background': '#333', // 背景填滿顏色
    'fill-background-extrude': 1, // 背景填滿區域大小,0跟圖片一樣大
  });

  let loadingTxt = 0;
  $('img').css({ display: 'none' })
  $(window).on('load', function () {
    let timer = setInterval(() => {
      loadingBar.set(loadingTxt)
      if (loadingTxt >= 100) {
        $('img').fadeIn();
        $('#loadingBar').fadeOut();
      } else {
        loadingTxt++
      }
    }, 30);
  })
