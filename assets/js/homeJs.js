$(document).ready(function () { 

    $('.change-lang-ar').on('click', () =>{
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