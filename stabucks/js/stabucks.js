$(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: true,
  });
});

// $(document).ready(function () {
//   var myWin = $(window).width();

//   var controller = $.superscrollorama({
//     triggerAtCenter: true,
//   });

//   var nitroMove = new TimelineLite();

//   var visualMotion = function () {
//     var visualTxt01 = function () {
//       $(".nitro_v_txt01").addClass("move");
//     };

//     var visualTxt02 = function () {
//       $(".nitro_v_txt02").addClass("move");
//     };
//     visualTxt01();
//     visualTxt02();
//   };

//   if (myWin > 1100) {
//     visualMotion();

//     nitroMove.set($(".nitro_i_tit"), { css: { opacity: 0, top: "-20px" } });
//     nitroMove.set($(".nitro_i_line"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_i_txt01"), { css: { opacity: 0, top: "254px" } });
//     nitroMove.set($(".nitro_i_txt02"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_liquid01"), { css: { opacity: 0, height: "0" } });
//     nitroMove.set($(".nitro_liquid02"), { css: { opacity: 0, height: "0" } });
//     nitroMove.set($(".nitro_cup"), { css: { height: "329px" } });
//     nitroMove.set($(".nitro_i_txt03"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_i_txt04"), { css: { opacity: 0 } });

//     $(window).on("scroll", function () {
//       var nitroScroll = $(this).scrollTop();
//       function nitroInfoMotion() {
//         nitroMove.to($(".nitro_i_tit"), 1, {
//           css: { opacity: 1, top: "30px" },
//           ease: Quad.easeOut,
//         });
//         nitroMove.to(
//           $(".nitro_i_line"),
//           2,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt01"),
//           1,
//           { css: { opacity: 1, top: "204px" }, ease: Quad.easeOut },
//           "-=2"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt02"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_liquid01"),
//           0.5,
//           { css: { opacity: 1, height: "26px" }, ease: Linear.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_liquid02"),
//           0.5,
//           { css: { opacity: 1, height: "62px" }, ease: Linear.easeOut },
//           "-=0.5"
//         );
//         nitroMove.to($(".nitro_cup"), 4, {
//           css: { height: "0" },
//           ease: Circ.easeOut,
//         });
//         nitroMove.to(
//           $(".nitro_i_txt03"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=2.5"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt04"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=0.5"
//         );
//       }
//       if (nitroScroll > 1300) {
//         nitroInfoMotion();
//       }
//     });

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt01"), 1.5, {
//         css: { left: "-300px", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       2100
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt01"), 1.5, {
//         css: { left: "208px", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       2100
//     );

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt02"), 1.5, {
//         css: { right: "-300px", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       2400
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt02"), 1.5, {
//         css: { right: "195px", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       2400
//     );

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt03"), 1.5, {
//         css: { left: "-300px", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       2700
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt03"), 1.5, {
//         css: { left: "256px", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       2700
//     );
//   } else if (myWin > 960 && myWin <= 1100) {
//     visualMotion();

//     nitroMove.set($(".nitro_i_tit"), { css: { opacity: 0, top: "-20px" } });
//     nitroMove.set($(".nitro_i_line"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_i_txt01"), { css: { opacity: 0, top: "254px" } });
//     nitroMove.set($(".nitro_i_txt02"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_liquid01"), { css: { opacity: 0, height: "0" } });
//     nitroMove.set($(".nitro_liquid02"), { css: { opacity: 0, height: "0" } });
//     nitroMove.set($(".nitro_cup"), { css: { height: "329px" } });
//     nitroMove.set($(".nitro_i_txt03"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_i_txt04"), { css: { opacity: 0 } });

//     $(window).on("scroll", function () {
//       var nitroScroll = $(this).scrollTop();
//       function nitroInfoMotion() {
//         nitroMove.to($(".nitro_i_tit"), 1, {
//           css: { opacity: 1, top: "30px" },
//           ease: Quad.easeOut,
//         });
//         nitroMove.to(
//           $(".nitro_i_line"),
//           2,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt01"),
//           1,
//           { css: { opacity: 1, top: "204px" }, ease: Quad.easeOut },
//           "-=2"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt02"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_liquid01"),
//           0.5,
//           { css: { opacity: 1, height: "26px" }, ease: Linear.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_liquid02"),
//           0.5,
//           { css: { opacity: 1, height: "62px" }, ease: Linear.easeOut },
//           "-=0.5"
//         );
//         nitroMove.to($(".nitro_cup"), 4, {
//           css: { height: "0" },
//           ease: Circ.easeOut,
//         });
//         nitroMove.to(
//           $(".nitro_i_txt03"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=2.5"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt04"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=0.5"
//         );
//       }
//       if (nitroScroll > 900) {
//         nitroInfoMotion();
//       }
//     });

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt01"), 1.5, {
//         css: { marginLeft: "-600px", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1650
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt01"), 1.5, {
//         css: { marginLeft: "-300px", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1650
//     );

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt02"), 1.5, {
//         css: { marginLeft: "450px", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1950
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt02"), 1.5, {
//         css: { marginLeft: "150px", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1950
//     );

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt03"), 1.5, {
//         css: { marginLeft: "-555px", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       2250
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt03"), 1.5, {
//         css: { marginLeft: "-255px", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       2250
//     );
//   } else if (myWin > 640 && myWin <= 960) {
//     visualMotion();

//     nitroMove.set($(".nitro_i_tit"), { css: { opacity: 0, top: "-20px" } });
//     nitroMove.set($(".nitro_i_line"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_i_txt01"), { css: { opacity: 0, top: "222px" } });
//     nitroMove.set($(".nitro_i_txt02"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_liquid01"), { css: { opacity: 0, height: "0" } });
//     nitroMove.set($(".nitro_liquid02"), { css: { opacity: 0, height: "0" } });
//     nitroMove.set($(".nitro_cup"), { css: { height: "246px" } });
//     nitroMove.set($(".nitro_i_txt03"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_i_txt04"), { css: { opacity: 0 } });

//     $(window).on("scroll", function () {
//       var nitroScroll = $(this).scrollTop();
//       function nitroInfoMotion() {
//         nitroMove.to($(".nitro_i_tit"), 1, {
//           css: { opacity: 1, top: "30px" },
//           ease: Quad.easeOut,
//         });
//         nitroMove.to(
//           $(".nitro_i_line"),
//           2,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt01"),
//           1,
//           { css: { opacity: 1, top: "172px" }, ease: Quad.easeOut },
//           "-=2"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt02"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_liquid01"),
//           0.5,
//           { css: { opacity: 1, height: "19px" }, ease: Linear.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_liquid02"),
//           0.5,
//           { css: { opacity: 1, height: "45px" }, ease: Linear.easeOut },
//           "-=0.5"
//         );
//         nitroMove.to($(".nitro_cup"), 4, {
//           css: { height: "0" },
//           ease: Circ.easeOut,
//         });
//         nitroMove.to(
//           $(".nitro_i_txt03"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=2.5"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt04"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=0.5"
//         );
//       }
//       if (nitroScroll > 850) {
//         nitroInfoMotion();
//       }
//     });

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt01"), 1.5, {
//         css: { marginLeft: "-530px", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1650
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt01"), 1.5, {
//         css: { marginLeft: "-230px", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1650
//     );

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt02"), 1.5, {
//         css: { marginLeft: "380px", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1950
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt02"), 1.5, {
//         css: { marginLeft: "80px", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1950
//     );

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt03"), 1.5, {
//         css: { marginLeft: "-496px", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       2250
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt03"), 1.5, {
//         css: { marginLeft: "-196px", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       2250
//     );
//   } else {
//     visualMotion();

//     nitroMove.set($(".nitro_i_tit"), { css: { opacity: 0, top: "1.57%" } });
//     nitroMove.set($(".nitro_i_line"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_i_txt01"), { css: { opacity: 0, top: "23.29%" } });
//     nitroMove.set($(".nitro_i_txt02"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_liquid01"), {
//       css: { opacity: 0, paddingTop: "0" },
//     });
//     nitroMove.set($(".nitro_liquid02"), {
//       css: { opacity: 0, paddingTop: "0" },
//     });
//     nitroMove.set($(".nitro_cup"), { css: { paddingTop: "52.5%" } });
//     nitroMove.set($(".nitro_i_txt03"), { css: { opacity: 0 } });
//     nitroMove.set($(".nitro_i_txt04"), { css: { opacity: 0 } });

//     $(window).on("scroll", function () {
//       var nitroScroll = $(this).scrollTop();
//       function nitroInfoMotion() {
//         nitroMove.to($(".nitro_i_tit"), 1, {
//           css: { opacity: 1, top: "6.57%" },
//           ease: Quad.easeOut,
//         });
//         nitroMove.to(
//           $(".nitro_i_line"),
//           2,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt01"),
//           1,
//           { css: { opacity: 1, top: "18.29%" }, ease: Quad.easeOut },
//           "-=2"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt02"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_liquid01"),
//           0.5,
//           { css: { opacity: 1, paddingTop: "3.9063%" }, ease: Linear.easeOut },
//           "-=1"
//         );
//         nitroMove.to(
//           $(".nitro_liquid02"),
//           0.5,
//           { css: { opacity: 1, paddingTop: "9.8438%" }, ease: Linear.easeOut },
//           "-=0.5"
//         );
//         nitroMove.to($(".nitro_cup"), 4, {
//           css: { paddingTop: "0" },
//           ease: Circ.easeOut,
//         });
//         nitroMove.to(
//           $(".nitro_i_txt03"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=2.5"
//         );
//         nitroMove.to(
//           $(".nitro_i_txt04"),
//           1,
//           { css: { opacity: 1 }, ease: Quad.easeOut },
//           "-=0.5"
//         );
//       }
//       if (nitroScroll > 550) {
//         nitroInfoMotion();
//       }
//     });

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt01"), 1.5, {
//         css: { top: "9.17%", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1050
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt01"), 1.5, {
//         css: { top: "14.17%", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1050
//     );

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt02"), 1.5, {
//         css: { top: "9.17%", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1450
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt02"), 1.5, {
//         css: { top: "14.17%", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1450
//     );

//     controller.addTween(
//       10,
//       TweenMax.from($(".nitro_bnr_txt03"), 1.5, {
//         css: { top: "9.17%", opacity: 0 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1850
//     );
//     controller.addTween(
//       10,
//       TweenMax.to($(".nitro_bnr_txt03"), 1.5, {
//         css: { top: "14.17%", opacity: 1 },
//         ease: Quad.easeOut,
//       }),
//       1,
//       1850
//     );
//   }
// });
var aIndex = 0;
var dataCnt = 0 // 160928 ???????????? ?????? ???

$(function () {

  product_list();   //product_list ??????

  // product_list_wrap();   //product_list_wrap ??????

  content_tabmenu();   //content_tabmenu ??????

  finder_list();   //finder_list ?????? (?????? ???????????? ?????? ?????? ?????????)

  find_taste();   //find_taste ?????? (?????? ???????????? ?????? ?????? ??????)

  selectbox_init();              //selectbox ????????? ??????

  $("ul.opt").hide();

  //??????????????? ???????????? ???
  $("#cf_select_wrap .select, #cf_select_wrap2 .select, #cf_select_wrap3 .select, #cf_select_wrap p span, #cf_select_wrap2 p span, #cf_select_wrap3 p span").bind("click", function () {
    $(this).parent().next().toggle();
  });

  //???????????? ????????? ????????? ???????????? ???
  $("#cf_select_wrap, #cf_select_wrap2, #cf_select_wrap3").bind("mouseleave", function () {
    $(this).find(".opt").hide();
  });



  // ?????? ?????? - ???????????? ??? & ????????? ???
  $("dl.product_kind_tab > dt > a:not(.selected)").parent().next().hide();

  $("dl.product_kind_tab > dt > a").bind("click", function () {
    $("dl.product_kind_tab > dt > a").removeClass("selected");
    $(this).addClass("selected");
    $("dl.product_kind_tab > dd").hide();
    $(this).parent().next().show();

    var index = $("dl.product_kind_tab > dt > a").index(this);
    aIndex = index;

    $(".product_result_wrap").hide();
    $(".product_result_wrap").eq(index).show();

    $('.product_select_wrap:eq(' + index + ') input[type=checkbox]').eq(0).prop('checked', true).change();
    $('.product_select_wrap:eq(' + index + ') input[type=checkbox]').not(':eq(0)').prop('checked', false).change();

    $('ul.opt').find('input[type=checkbox]').removeAttr('checked');
    $('ul.opt').find('input[type=checkbox]').trigger('change');

    $('.product_select_wrap:eq(' + index + ') input[type=checkbox]').unbind('click').bind('click', function (e) {
      cate_chk_idx = $('.product_select_wrap:eq(' + index + ') input[type=checkbox]').index($(this));
      cate_chk_stat = $(this).is(':checked');

      if (cate_chk_idx == 0 && cate_chk_stat) {
        $('.product_select_wrap:eq(' + index + ') input[type=checkbox]').not(':eq(0)').removeAttr('checked');
        $('.product_select_wrap:eq(' + index + ') input[type=checkbox]').not(':eq(0)').trigger('change');
      } else if (cate_chk_idx != 0 && cate_chk_stat) {
        $('.product_select_wrap:eq(' + index + ') input[type=checkbox]').eq(0).removeAttr('checked');
        $('.product_select_wrap:eq(' + index + ') input[type=checkbox]').eq(0).trigger('change');
      }

      showProductList();
    });

    showProductList();

    getCoffeeDataSet();

    return false;
  });

  $('.product_select_wrap:eq(0) input[type=checkbox]').bind('click', function (e) {
    cate_chk_idx = $('.product_select_wrap:eq(0) input[type=checkbox]').index($(this));
    cate_chk_stat = $(this).is(':checked');

    if (cate_chk_idx == 0 && cate_chk_stat) {
      $('.product_select_wrap:eq(0) input[type=checkbox]').not(':eq(0)').removeAttr('checked');
      $('.product_select_wrap:eq(0) input[type=checkbox]').not(':eq(0)').trigger('change');
    } else if (cate_chk_idx != 0 && cate_chk_stat) {
      $('.product_select_wrap:eq(0) input[type=checkbox]').eq(0).removeAttr('checked');
      $('.product_select_wrap:eq(0) input[type=checkbox]').eq(0).trigger('change');
    }

    showProductList();

  });


  $('ul.opt input[type=checkbox]').bind('click', function () {
    $('.product_no_result').hide();
    dataCnt = 0; // 160928 ???????????? ?????? ?????????
    var pIdx = $('ul.opt').index($(this).parents('ul.opt'));
    var chkTmp = false;
    $('ul.opt').eq(pIdx).find('input[type=checkbox]').each(function () {
      if ($(this).is(':checked')) {
        chkTmp = true;
      }
    });

    if (chkTmp == true) {
      $('div.product_list').eq(pIdx).find('.coffeeDataSet').hide();

      $('ul.opt').eq(pIdx).find('input[type=checkbox]').each(function () {
        var dTarget = $(this).attr('data-target');
        $('div.product_list').eq(pIdx).find('.coffeeDataSet').each(function () {
          $(this).hide();
          $(this).parent().parent().prev().hide();
        })
        if ($(this).is(':checked')) {
          if (dTarget == "new") {
            $('div.product_list').eq(pIdx).find('.coffeeDataSet').each(function () {
              if ($(this).attr("new") == "Y") {
                $(this).show();
                $(this).parent().parent().prev().show();
                dataCnt++; // 160928 ???????????? ?????? ??? ????????? ??????
              }
            });
          }
          if (dTarget == "season") {
            $('div.product_list').eq(pIdx).find('.coffeeDataSet').each(function () {
              if ($(this).attr("season") == "1") {
                $(this).show();
                $(this).parent().parent().prev().show();
                dataCnt++; // 160928 ???????????? ?????? ??? ????????? ??????
              }
            });
          }
          if (dTarget == "recomm") {
            $('div.product_list').eq(pIdx).find('.coffeeDataSet').each(function () {
              if ($(this).attr("recomm") != "0") {
                $(this).show();
              }
            });
          }
        } else {
          if (dTarget == "new") {
            $('div.product_list').eq(pIdx).find('.coffeeDataSet').each(function () {
              if ($(this).attr("new") == "Y" && dTarget != "new") {
                $(this).hide();
                $(this).parent().parent().prev().hide();
              }
            });
          }
          if (dTarget == "season") {
            $('div.product_list').eq(pIdx).find('.coffeeDataSet').each(function () {
              if ($(this).attr("season") == "1" && dTarget != "season") {
                $(this).hide();
                $(this).parent().parent().prev().hide();
              }
            });
          }
          if (dTarget == "recomm") {
            $('div.product_list').eq(pIdx).find('.coffeeDataSet').each(function () {
              if ($(this).attr("recomm") != "0" && dTarget != "recomm") {
                $(this).hide();
              }
            });
          }
        }
      });
      if (dataCnt < 1 && chkTmp) { // 160928 ???????????? ????????? ?????? ??? ?????? ?????? ?????? ??????
        $('.product_no_result').show();
      } else { // 160928 ???????????? ????????? ??? ?????? ?????? ???????????? ?????? ?????? ??????
        $('.product_no_result').hide();
      }
    } else {
      $('div.product_list').eq(pIdx).find('.coffeeDataSet').parent().parent().prev().show();
      $('div.product_list').eq(pIdx).find('.coffeeDataSet').show();
    }

    //coffeeDataSet
  });


  $(window).on("load", function () {
    if (location.href.toUpperCase().indexOf("STATUS=1") > -1) {

      setTimeout(function () {
        $("#select_kind1-1").trigger("click");
      }, 2000);
    }
  });

});

function getCoffeeDataSet() {

  $('.icon_blond').hide();
  $('.icon_medium').hide();
  $('.icon_dark').hide();
  $('.icon_plane_latte').hide();
  $('.icon_flavor_latte').hide();

  $("dl.product_kind_tab > dt > a").each(function () {
    var idx = $("dl.product_kind_tab > dt > a").index($(this));
    var chk_stat = $(this).hasClass('selected');

    if (idx == 0 && chk_stat) {
      $('.product_select_wrap').eq(idx).find('input[type=checkbox]').each(function () {
        var idx2 = $('.product_select_wrap').eq(idx).find('input[type=checkbox]').index($(this));
        var chk_stat2 = $(this).is(':checked');

        if (idx2 == 0 && chk_stat2) {
          getCoffeeList('00', '30', '');
          getCoffeeList('00', '20', '');
          getCoffeeList('00', '10', '');
          getFlavorList('00');
          getReserveList('00', '');
          getCoffeeList('00', '40', '');
          getCoffeeList('00', '50', '');
        } else if (idx2 == 1 && chk_stat2) {
          getCoffeeList('00', '30', '');
        } else if (idx2 == 2 && chk_stat2) {
          getCoffeeList('00', '20', '');
        } else if (idx2 == 3 && chk_stat2) {
          getCoffeeList('00', '10', '');
        } else if (idx2 == 4 && chk_stat2) {
          getFlavorList('00');
        } else if (idx2 == 5 && chk_stat2) {
          getReserveList('00', '');
        } else if (idx2 == 6 && chk_stat2) {
          getCoffeeList('00', '40', '');
        } else if (idx2 == 7 && chk_stat2) {
          getCoffeeList('00', '50', '');
        }
      });
    } else if (idx == 1 && chk_stat) {
      $('.product_select_wrap').eq(idx).find('input[type=checkbox]').each(function () {
        var idx2 = $('.product_select_wrap').eq(idx).find('input[type=checkbox]').index($(this));
        var chk_stat2 = $(this).is(':checked');

        if (idx2 == 0 && chk_stat2) {
          getCoffeeList('01', '30');
          getCoffeeList('01', '20');
          getCoffeeList('01', '10');
          getFlavorList('01');
          getReserveList('01', '');
          getCoffeeList('01', '40');
          getCoffeeList('01', '50');
        } else if (idx2 == 1 && chk_stat2) {
          getCoffeeList('01', '30');
        } else if (idx2 == 2 && chk_stat2) {
          getCoffeeList('01', '20');
        } else if (idx2 == 3 && chk_stat2) {
          getCoffeeList('01', '10');
        } else if (idx2 == 4 && chk_stat2) {
          getFlavorList('01');
        } else if (idx2 == 5 && chk_stat2) {
          getReserveList('01', '');
        } else if (idx2 == 6 && chk_stat2) {
          getCoffeeList('01', '40');
        } else if (idx2 == 7 && chk_stat2) {
          getCoffeeList('01', '50');
        }
      });
    } else if (idx == 2 && chk_stat) {
      $('.product_select_wrap').eq(idx).find('input[type=checkbox]').each(function () {
        var idx2 = $('.product_select_wrap').eq(idx).find('input[type=checkbox]').index($(this));
        var chk_stat2 = $(this).is(':checked');

        if (idx2 == 0 && chk_stat2) {
          getCoffeeList('05', '30');
          getCoffeeList('05', '20');
          getCoffeeList('05', '10');
          getFlavorList('05');
          getReserveList('05', '');
          getCoffeeList('05', '40');
          getCoffeeList('05', '50');
        } else if (idx2 == 1 && chk_stat2) {
          getCoffeeList('05', '30');
        } else if (idx2 == 2 && chk_stat2) {
          getCoffeeList('05', '20');
        } else if (idx2 == 3 && chk_stat2) {
          getCoffeeList('05', '10');
        } else if (idx2 == 4 && chk_stat2) {
          getFlavorList('05');
        } else if (idx2 == 5 && chk_stat2) {
          getReserveList('05', '');
        } else if (idx2 == 6 && chk_stat2) {
          getCoffeeList('05', '40');
        } else if (idx2 == 7 && chk_stat2) {
          getCoffeeList('05', '50');
        }
      });
    }
  });
}

function getCoffeeList(pac, kind) {
  var option = {
    'PACKAGE': pac
    , 'ROAST_KIND': kind
  };
  __ajaxCall('/coffee/getCoffeeList.do', option, true, "JSON", "POST",
    function (data) {
      if (data.list.length > 0) {
        var idx = "";
        var chk_stat = "";
        $("dl.product_kind_tab > dt > a").each(function () {
          idx = $("dl.product_kind_tab > dt > a").index($(this));
          chk_stat = $(this).hasClass('selected');

          if (chk_stat) {
            if (data.list[0].roast_KIND == '30') {
              $('.icon_blond').eq(idx).show();
              $('.icon_blond').eq(idx).next().find('ul').empty();
              $('#tpl_coffeeList').tmpl(data.list).appendTo($('.icon_blond').eq(idx).next().find('ul'));
            } else if (data.list[0].roast_KIND == '20') {
              $('.icon_medium').eq(idx).show();
              $('.icon_medium').eq(idx).next().find('ul').empty();
              $('#tpl_coffeeList').tmpl(data.list).appendTo($('.icon_medium').eq(idx).next().find('ul'));
            } else if (data.list[0].roast_KIND == '10') {
              $('.icon_dark').eq(idx).show();
              $('.icon_dark').eq(idx).next().find('ul').empty();
              $('#tpl_coffeeList').tmpl(data.list).appendTo($('.icon_dark').eq(idx).next().find('ul'));
            } else if (data.list[0].roast_KIND == '40') {
              $('.icon_plane_latte').eq(idx).show();
              $('.icon_plane_latte').eq(idx).next().find('ul').empty();
              $('#tpl_coffeeList').tmpl(data.list).appendTo($('.icon_plane_latte').eq(idx).next().find('ul'));
            } else if (data.list[0].roast_KIND == '50') {
              $('.icon_flavor_latte').eq(idx).show();
              $('.icon_flavor_latte').eq(idx).next().find('ul').empty();
              $('#tpl_coffeeList').tmpl(data.list).appendTo($('.icon_flavor_latte').eq(idx).next().find('ul'));
            }
          }
        });

        $('.productDeImg').unbind('click').bind('click', function () {
          prCd = $(this).attr('prCd');

          if (prCd != "") {
            form = document.pForm;
            form.PRODUCT_CD.value = prCd;
            form.action = "/coffee/product_view.do";
            form.submit();
          }
        });
      }
    },
    function () {
    });
}

function getFlavorList(pac) {
  var option = {
    'PACKAGE': pac
  };
  __ajaxCall('/coffee/getFlavorList.do', option, true, "JSON", "POST",
    function (data) {
      if (data.list.length > 0) {
        var idx = "";
        var chk_stat = "";
        $("dl.product_kind_tab > dt > a").each(function () {
          idx = $("dl.product_kind_tab > dt > a").index($(this));
          chk_stat = $(this).hasClass('selected');

          if (chk_stat) {
            $('.icon_flavor').eq(idx).show();
            $('.icon_flavor').eq(idx).next().find('ul').empty();
            $('#tpl_coffeeList').tmpl(data.list).appendTo($('.icon_flavor').eq(idx).next().find('ul'));
          } else {
            $('.icon_flavor').eq(idx).hide();
          }
        });

        $('.productDeImg').unbind('click').bind('click', function () {
          prCd = $(this).attr('prCd');

          if (prCd != "") {
            form = document.pForm;
            form.PRODUCT_CD.value = prCd;
            form.action = "/coffee/product_view.do";
            form.submit();
          }
        });
      } else {
        $('.icon_flavor').hide();
      }
    },
    function () {
    });
}

function getReserveList(pac, roast, search_selldate_yn) {

  var search_selldate_yn = typeof search_selldate_yn !== 'undefined' ? search_selldate_yn : 'Y';

  var option = {
    'PACKAGE': pac
    , 'ROAST_KIND': roast
    , 'SOLD_OUT2': 'N'
    , 'SEARCH_SELLDATE_YN': search_selldate_yn
  };

  __ajaxCall('/coffee/getReserveList.do', option, true, "JSON", "POST"
    , function (data) {

      if (data.list.length > 0) {
        var idx = "";
        var chk_stat = "";

        $("dl.product_kind_tab > dt > a").each(function () {
          idx = $("dl.product_kind_tab > dt > a").index($(this));
          chk_stat = $(this).hasClass('selected');
          if (chk_stat) {
            $('.icon_reserve_bean').eq(idx).show();
            $('.icon_reserve_bean').eq(idx).next().find('ul').empty();
            $('#tpl_reserveCoffeeList').tmpl(data.list).appendTo($('.icon_reserve_bean').eq(idx).next().find('ul'));
          }
          $('.RproductDeImg').unbind('click').bind('click', function () {
            prCd = $(this).attr('prCd');

            if (prCd != "") {
              form = document.pForm;
              form.PRODUCT_CD.value = prCd;
              form.action = "/coffee/reserve_view.do";
              form.submit();
            }
          });
        });
      } else {
        $('.icon_reserve_bean').hide();
      }
    }, function () { });
}

function product_list() {

  // ?????? ?????? ??? & ?????? ??????
  var btnActive = false;
  $("div.product_kind_btn").bind("click", function () {
    if (btnActive == false) {
      $(this).find("img").attr("src", $(this).find("img").attr("src").replace("up", "down"));
      $("div.product_toggle_wrap").hide();
      btnActive = true;
    } else {
      $(this).find("img").attr("src", $(this).find("img").attr("src").replace("down", "up"));
      $("div.product_toggle_wrap").show();
      btnActive = false;
    }
  });

}

function showProductList() {

  $('.product_select_wrap:eq(' + aIndex + ') input[type=checkbox]').each(function () {
    chk_idx = $('.product_select_wrap:eq(' + aIndex + ') input[type=checkbox]').index($(this));
    cate_chk_stat = $(this).is(':checked');

    if (chk_idx == 0) {
      if (cate_chk_stat) {
        $('.product_list:eq(' + aIndex + ') > dl > dd').each(function () {
          var idx = $('.product_list:eq(' + aIndex + ') > dl > dd').index($(this));
          if ($.trim($(this).find('ul').html()) != "") {
            $('.product_list:eq(' + aIndex + ') > dl > dt').eq(idx).show();
            $('.product_list:eq(' + aIndex + ') > dl > dd').eq(idx).show();
          }
        });

        return false;
      } else {
        $('.product_list:eq(' + aIndex + ') > dl > dd > ul').each(function () {
          var idx = $('.product_list:eq(' + aIndex + ') > dl > dd > ul').index($(this));
          $('.product_list:eq(' + aIndex + ') > dl > dt').eq(idx).hide();
          $('.product_list:eq(' + aIndex + ') > dl > dd').eq(idx).hide();
        });
      }
    } else {
      if (cate_chk_stat) {
        if ($.trim($('.product_list:eq(' + aIndex + ') > dl > dd').eq(chk_idx - 1).find('ul').html()) != "") {
          $('.product_list:eq(' + aIndex + ') > dl > dt').eq(chk_idx - 1).show();
          $('.product_list:eq(' + aIndex + ') > dl > dd').eq(chk_idx - 1).show();
        }
      } else {
        $('.product_list:eq(' + aIndex + ') > dl > dt').eq(chk_idx - 1).hide();
        $('.product_list:eq(' + aIndex + ') > dl > dd').eq(chk_idx - 1).hide();
      }
    }
  });
}


function content_tabmenu() {
  $(".content_tabmenu > .tab").bind("click", function () {// ?????????_20171127 focusin ????????? ??????
    if (!$(this).hasClass("on")) {
      $(this).parent().children(".on").removeClass("on");
      var index = $(this).addClass("on").closest(".content_tabmenu").children(".tab").index(this);
      $(this).parent().children(".panel").hide().eq(index).show();
    }
  });
  // $("div.finder_list > dl > dd > ul > li").bind("click focusout", function () { // ?????????_20171127 ??????
  //   if (!$(this).hasClass("on")) {
  //     $(this).parent().children(".on").removeClass("on");
  //     var index = $(this).addClass("on").closest(".content_tabmenu").children(".tab").index(this);
  //     $(this).parent().children(".panel").hide().eq(index).show();
  //   }
  // });
}



function finder_list() {
  //finder_list ?????? (?????? ???????????? ?????? ?????? ?????????)

  // ?????? ????????? ????????? ??????
  $("div.finder_list > dl > dd > ul > li").bind("mouseover focusin", function () {
    //$("div.finder_list_cover").remove();
    $(this).append("<div class='finder_list_cover'></div>");
  });
  $("div.finder_list > dl > dd > ul > li").bind("mouseleave focusout", function () {
    $("div.finder_list_cover").remove();
  });
  $("div.finder_list > dl > dd > ul > li").bind("click", function () {
    goUrl = $(this).find("a").attr("href");
    location.href = goUrl;
  });

}

function find_taste() {
  //find_taste (?????? ???????????? ?????? ?????? ??????)

  $("ul.find_taste01 li dl").animate({ 'opacity': 1, 'top': 0 }, 1500);

  $("ul.find_taste01 a").on("click", function () {
    $("div.find_section1").stop().animate({ 'top': -700 }, 1500);
    $("div.find_section2").stop().animate({ 'top': 0 }, 1500);
    $("div.find_section3").stop().animate({ 'top': 700 }, 1500);
    $("ul.find_taste02 li > dl").stop().animate({ 'top': 0 }, 2500);
  });

  $("ul.find_taste02 a").on("click", function () {
    $("div.find_section1").stop().animate({ 'top': -1400 }, 1500);
    $("div.find_section2").stop().animate({ 'top': -700 }, 1500);
    $("div.find_section3").stop().animate({ 'top': 0 }, 1500);
    $("ul.find_taste03 li > dl").stop().animate({ 'top': 0 }, 2500);
  });

}


function selectbox_init() {

  $(".select_box select").on("change", function () {
    $(this).prev().html($(this).find("option:selected").text());
  }).prev().html(function () {
    return $(this).next().find("option:selected").text();
  });

}

