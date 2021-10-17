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

    $('.nav-link-a').on('click', () =>{
        let link = `${window.location}`
        let path = `${window.location.pathname}`
        if (link.includes('ar')) {
            let new_path = path.slice(3)
            location.href = `${new_path}`
        } 
        else{
           location.href = `/ar${path}`
        }
    })

}) 