$(document).ready(function () {
  var w3UserAgent = navigator.userAgent;
  localStorage.setItem('counter', 0)
  if (w3UserAgent.indexOf("Firefox") > -1) {
  localStorage.setItem('top', `${-15}`)
  } 
  else if (w3UserAgent.indexOf("Chrome") > -1) {
    localStorage.setItem('top', `${-14}`)
  } 

    $(document).on('click' ,'.show-pr', function (e) {
      let currTop = parseInt(localStorage.getItem('top'))

      let Cont = parseInt($(e.target).parent().attr('id')) + 1
      $(`.con-${Cont}`).removeClass('hidden')
      $(e.target).remove()
    })

    $(document).on('click', '.show-info-pr', function (e) { 
      let Cont = parseInt($(e.target).attr('id'))
      $(`.img-div-${Cont}`).addClass('hidden')
      $(`.text-div-${Cont}`).addClass('hidden')
      $(`.product-details-${Cont}`).removeClass('hidden')
      let currTop = parseInt(localStorage.getItem('top'))

      setTimeout(() => {
        $(`.product-details-${Cont}`).addClass('transing').removeClass('anti-transing')
      }, 8);
     })

     $(document).on('click', '.show-less-p-details', function (e) { 
       $('html, body').animate({ scrollTop: $(document).scrollTop() - 200 }, 'fast');
      let Cont = parseInt($(e.target).attr('id'))
      $(`.img-div-${Cont}`).removeClass('hidden')
      $(`.text-div-${Cont}`).removeClass('hidden')
      $(`.product-details-${Cont}`).addClass('hidden').addClass('anti-transing')
     })

     $(document).on('click', '.svg-img', function (e) { 
      let href = $(e.target).data('href')
      location.href = href
    })

     
})

  /*   else if (w3UserAgent.indexOf("Safari") > -1) {
    w3Browser = "Safari";
  } 
  else {
    w3Browser = "Unknown";
  } */
  /*  else if (w3UserAgent.indexOf("SamsungBrowser") > -1) {
     w3Browser = "Samsung Internet";
   } 
   else if (w3UserAgent.indexOf("Opera") > -1 || w3UserAgent.indexOf("OPR") > -1) {
     w3Browser = "Opera";
   } 
   else if (w3UserAgent.indexOf("Trident") > -1) {
     w3Browser = "Internet Explorer";
   } 
   else if (w3UserAgent.indexOf("Edge") > -1) {
     w3Browser = "Microsoft Edge";
   }  */