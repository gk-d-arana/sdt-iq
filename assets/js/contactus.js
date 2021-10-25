$(document).ready(function(){
    $(document).on('submit', '.send-message', function (e) {  
        e.preventDefault();
        let mailto = ""
        let subject = $('#exampleSubject').val() + "From" + $('#exampleFullName').val()
        let message = $('#exampleSubject').val()
    
        window.open(`mailto:${mailto}?subject=${subject}&body=${message}`);
        location.href = "/contactUs.html"
    })
})