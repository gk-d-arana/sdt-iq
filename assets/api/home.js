
      $(document).ready(function(){
        axios({
          url : "http://syrian-design-team.com/api/public/api/latest_products/",
          method: "GET"
        }).then(res => {
          let count = 1
          res.data.data.forEach(
            (product, index) => {
            $('.products-hover').append(`
            `)
          
            if(count < 4){
            $('._1st-row').append(`
            <div class="p-name-hover col-4"> 
            <div class='svg-p${index+1} m-svg-p '><h3>Product Name</h3><p>${product.product_name}</p></div>
            <svg class="svg-hover" data-id="${index+1}" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <defs data-id="${index+1}">
                <pattern data-id="${index+1}" id="img${index+1}" patternUnits="userSpaceOnUse" width="100" height="100">
                  <image data-id="${index+1}" xlink:href=http://syrian-design-team.com/api/public/${product.product_image} x="-25" width="150" height="100" />
                </pattern>
              </defs>
              <polygon data-id="${index+1}" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${index+1})"/>
              </svg>
            
            </div>
            `)
            count +=1
              }
       
              else if(count<6){
                $('._2nd-row').append(`
            <div class="p-name-hover col-4"> 
            <div class='svg-p${index+1} m-svg-p '><h3>Product Name</h3><p>${product.product_name}</p></div>
            <svg class="svg-hover" data-id="${index+1}" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <defs data-id="${index+1}">
                <pattern data-id="${index+1}" id="img${index+1}" patternUnits="userSpaceOnUse" width="100" height="100">
                  <image data-id="${index+1}" xlink:href=http://syrian-design-team.com/api/public/${product.product_image} x="-25" width="150" height="100" />
                </pattern>
              </defs>
              <polygon data-id="${index+1}" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${index+1})"/>
              </svg>
            
            </div>
                `)
                count +=1
                  }
           
           
           
                  else{
                  $('._3rd-row').append(`
            <div class="p-name-hover col-4"> 
            <div class='svg-p${index+1} m-svg-p '><h3>Product Name</h3><p>${product.product_name}</p></div>
            <svg class="svg-hover" data-id="${index+1}" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <defs data-id="${index+1}">
                <pattern data-id="${index+1}" id="img${index+1}" patternUnits="userSpaceOnUse" width="100" height="100">
                  <image data-id="${index+1}" xlink:href=http://syrian-design-team.com/api/public/${product.product_image} x="-25" width="150" height="100" />
                </pattern>
              </defs>
              <polygon data-id="${index+1}" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${index+1})"/>
              </svg>
            
            </div>
                    `)
                  //count +=1
                  }
          
         
                })
          
        
        
              }).catch(() => {
                $('._1st-row').append(`
                <svg class="svg-hover" data-id="1" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs data-id="1">
                  <pattern data-id="1" id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
                    <image data-id="1" xlink:href="./assets/images/2.png" x="-25" width="150" height="100" />
                  </pattern>
                </defs>
                <polygon data-id="1" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img1)"/>
                </svg>
          
                <svg class="svg-hover" data-id="2" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs data-id="2">
                  <pattern data-id="2" id="img2" patternUnits="userSpaceOnUse" width="100" height="100">
                    <image data-id="2" xlink:href="./assets/images/2.png" x="-25" width="150" height="100" />
                  </pattern>
                </defs>
                <polygon data-id="2" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img2)"/>
              </svg>
  
  
              <svg class="svg-hover" data-id="3" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs data-id="3">
                  <pattern data-id="3" id="img3" patternUnits="userSpaceOnUse" width="100" height="100">
                    <image data-id="3" xlink:href="./assets/images/photo_2021-07-16_00-13-37.png" x="-25" width="150" height="100" />
                  </pattern>
                </defs>
                <polygon data-id="3" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img3)"/>
              </svg>
                `)
                $('._2nd-row').append(`
                             <svg class="svg-hover col-4" data-id="4" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs data-id="4">
                  <pattern data-id="4" id="img4" patternUnits="userSpaceOnUse" width="100" height="100">
                    <image data-id="4" xlink:href="./assets/images/1.png" x="-25" width="150" height="100" />
                  </pattern>
                </defs>
                <polygon data-id="4" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img4)"/>
              </svg>
              <svg class="svg-hover col-4" data-id="5" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs data-id="5">
                  <pattern  data-id="5" id="img5" patternUnits="userSpaceOnUse" width="100" height="100">
                    <image  data-id="5" xlink:href="./assets/images/2.png" x="-25" width="150" height="100" />
                  </pattern>
                </defs>
                <polygon  data-id="5" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img5)"/>
              </svg> 
           
                `)
                $('._3rd-row').append(`
                <svg class="svg-hover col-4" data-id="6" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs data-id="6">
                  <pattern data-id="6" id="img6" patternUnits="userSpaceOnUse" width="100" height="100">
                    <image data-id="6" xlink:href="./assets/images/photo_2021-07-16_00-13-37.png" x="-25" width="150" height="100" />
                  </pattern>
                </defs>
                <polygon data-id="6" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img6)"/>
              </svg>
                `)
        })
        
        axios({
          url : "http://syrian-design-team.com/api/public/api/carousel_images/",
          method : "GET"
        }).then(res => {
          $('.carousel-inner').empty()
          let active = true
          res.data.data.forEach(carousel => {
            if (active) {
              $('.carousel-inner').append(`
              <div class="carousel-item active carousel-svg" data-bs-interval="10000">
              <img class="carousel-image" src="http://syrian-design-team.com/api/public/${carousel.carousel_image}" width="650"/>
               </div>
              `)
              active = false
            }
            else{
            $('.carousel-inner').append(`
            <div class="carousel-item carousel-svg" data-bs-interval="10000">
              <img class="carousel-image" src="http://syrian-design-team.com/api/public/${carousel.carousel_image}" width="650"/>
          </div>
            `)
            }
          })
        })

      })
        

      /*


                  <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs ">
              <pattern " id="ig${carousel.id}" patternUnits="userSpaceOnUse" width="100" height="100">
                <image " xlink:href=http://syrian-design-team.com/api/public/${carousel.carousel_image} x="-25" width="150" height="100" />
              </pattern>
            </defs>
            <polygon " points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#ig${carousel.id})"/>
            </svg>*/