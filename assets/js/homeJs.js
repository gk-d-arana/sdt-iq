$(document).ready(function () { 
    $('.svg-hover').mouseover(function (e) {
        let id = $(e.target).data('id')
        localStorage.setItem('currentId', `${id}`) 
        $(`.svg-p${id}`).css('color', '#ffffff')
    })
    $('.svg-hover').mouseleave(function () {
        let id = localStorage.getItem('currentId')
        $(`.svg-p${id}`).css('color', 'transparent')
    })
})