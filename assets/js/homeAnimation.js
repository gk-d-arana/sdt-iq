$('.ai').on('mouseenter', function (e) {
    let ll1 = $(e.target).children('#triangle-bottomleft')
    $(ll1).addClass('r1').removeClass('l1')
})

$('.ai').on('mouseleave', function (e) { 
    let ll1 = $(e.target).children('#triangle-bottomleft')
    $(ll1).addClass('l1').removeClass('r1')
})
