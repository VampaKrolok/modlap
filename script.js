$('.text__box-left img').on('click', function() {
    $('.text__box-left').hide(1000);
    setTimeout(function(){
        $('.text__box-left').show(500);
    }, 10000);
});
$('.text__box-right img').on('click', function() {
    $('.text__box-right').hide(1000);
    setTimeout(function(){
        $('.text__box-right').show(500);
    }, 10000);
});
setTimeout(function(){
    $('.chat').show(500);
}, 1000);
setTimeout(function(){
    $('.chat_p1').hide(500);
    $('.chat_p2').show(500);
}, 3000);
setTimeout(function(){
    $('.chat_p2').hide(500);
    $('.chat_p3').show(500);
}, 6000);
setTimeout(function(){
    $('.chat_p3').hide(500);
    $('.chat_p4').show(500);
}, 9000);
setTimeout(function(){
    $('.chat_p4').hide(500);
    $('.chat_p5').show(500);
}, 12000);
setTimeout(function(){
    $('.opros_box').show(500);
}, 1000);
$('.da').on('click', function() {
    $('.otvet_da').show(1000);
    $('.opros').hide(1000);
});
$('.net').on('click', function() {
    $('.otvet_net').show(1000);
    $('.opros').hide(1000);
});
// var img = `<img src="img/fire.svg" alt="">`;
$('.img__btn-left').on('click', function() {
    var arr = $('.arrow');
    $.each(arr, function(i,val) {
        setTimeout(function(){
            $(val).addClass('active')
        }, 500);
    });
    $('.container').addClass('active');
    $('.opros_box').hide(1000);
    $('.chat').hide(1000);
    $('.main__section__3__card').append(`<img src="img/fire.svg" alt="">`);
    $('.main__section__3').show(1000);
});
if($('.img__btn-left1')) {
    $('.img__btn-left1').on('click', function() {
        var arr = $('.arrow');
        $.each(arr, function(i,val) {
            setTimeout(function(){
                $(val).addClass('active')
            }, 500);
        });
        $('.container').addClass('active');
        $('.opros_box').hide(1000);
        $('.chat').hide(1000);
        $('.main__section__3__card').append(`<img src="img/fire.svg" alt="">`);
        $('.main__section__3').show(1000);
    });
}
if($('.img__btn-right1')) {
    $('.img__btn-right1').on('click', function() {
        var arr = $('.arrow');
        $.each(arr, function(i,val) {
            setTimeout(function(){
                $(val).addClass('active')
            }, 500);
        });
        $('.container').addClass('active');
        $('.opros_box').hide(1000);
        $('.chat').hide(1000);
        $('.main__section__3__card').append(`<img src="img/fire.svg" alt="">`);
        $('.main__section__3').show(1000);
    });
}
$('.img__btn-right').on('click', function() {
    var arr = $('.arrow');
    $.each(arr, function(i,val) {
        setTimeout(function(){
            $(val).addClass('active')
        }, 500);
    });
    $('.container').addClass('active');
    $('.opros_box').hide(1000);
    $('.chat').hide(1000);
    $('.main__section__3__card').append(`<img src="img/fire.svg" alt="">`);
    $('.main__section__3').show(1000);
});

$('.btn-close-wrapper').on('click', function() {
    $('.container').removeClass('active');
    $('.opros_box').show(1000);
    $('.chat').show(1000);
    var arr = $('.arrow');
    $('.main__section__3').hide(1000);
    $.each(arr, function(i,val) {
        $(val).removeClass('active');
    });
});
$('.otvet_net').on('click', function() {
    $('.otvet_net').hide(1000);
    $('.opros_box-text1-p1').show(1000);
    setTimeout(function(){
        $('.opros_box-text1-p1').hide(500);
        $('.opros_box-text1-p2').show(500);
    }, 4000);
});
$('.otvet_da').on('click', function() {
    $('.otvet_da').hide(1000);
    $('.opros_box-text1-p1').show(1000);
    setTimeout(function(){
        $('.opros_box-text1-p1').hide(500);
        $('.opros_box-text1-p2').show(500);
    }, 4000);
});

$('.chat_p5').on('click', function() {
    $('.chat').hide(1000);
});
$('.opros_box-text1-p2').on('click', function() {
    $('.opros_box').hide(1000);
});





function animate1 () {
    const path = document.querySelectorAll('.luch1 path');
    function anim1 () {
        for (let i = 0; i < path.length; i++) {
            setTimeout(function () {
                var pathL = path.length - i;
                path[pathL - 1].style.display = "none";
            }, i*10)
        }
    }
    anim1 ();
    function anim () {
        path.forEach(function (e, i) {
            setTimeout(function () {
                e.style.display = "block";
            }, i*10)
        })
    }
    setTimeout (anim, 1300);
}
animate1();
setInterval (animate1, 3000);


function animate2 () {
    const path = document.querySelectorAll('.luch2 path');
    function anim () {
        path.forEach(function (e, i) {
            setTimeout(function () {
                e.style.display = "none";
            }, i*10)
        })
    }
    anim ();
    function anim1 () {
        for (let i = 0; i < path.length; i++) {
            setTimeout(function () {
                var pathL = path.length - i;
                path[pathL - 1].style.display = "block";
            }, i*10)
        }
    }
    setTimeout (anim1, 1300);
}
animate2();
setInterval (animate2, 3000);

function animate3 () {
    const path = document.querySelectorAll('.luch3 path');
    function anim1 () {
        for (let i = 0; i < path.length; i++) {
            setTimeout(function () {
                var pathL = path.length - i;
                path[pathL - 1].style.display = "none";
            }, i*10)
        }
    }
    anim1 ();
    function anim () {
        path.forEach(function (e, i) {
            setTimeout(function () {
                e.style.display = "block";
            }, i*10)
        })
    }
    setTimeout (anim, 2270);
}
animate3();
setInterval (animate3, 5000);


function animate4 () {
    const path = document.querySelectorAll('.luch4 path');
    function anim () {
        path.forEach(function (e, i) {
            setTimeout(function () {
                e.style.display = "none";
            }, i*10)
        })
    }
    anim ();
    function anim1 () {
        for (let i = 0; i < path.length; i++) {
            setTimeout(function () {
                var pathL = path.length - i;
                path[pathL - 1].style.display = "block";
            }, i*10)
        }
    }
    setTimeout (anim1, 2270);
}
animate4();
setInterval (animate4, 5000);

