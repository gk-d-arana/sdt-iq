//



$(document).ready(function(){

    axios({
        url : `http://syrian-design-team.com/api/public/api/section/${localStorage.getItem('section_id')}/products/`,
        method : "GET"
    }).then(res=>{

      let section_name = localStorage.getItem('section_name')
      let section_description= localStorage.getItem('section_description')
      $('.section_name_h').text(section_name)
      $('.section_description_p').text(section_description)

      let counter = 1
        
      let container = ""
      
      let rows = ""
      
      let mobile_rows = ""
      
      let container_rows = ""

      let container_counter = 2
      let arrowLink = "./assets/images/Path 2068.png"
      if (location.href.includes('ar')) {
        arrowLink= "../assets/images/Path 2068.png"
      }

      let showMoreProducts = "Show More Products"
      if (location.href.includes('ar')) {
        showMoreProducts = "مزيد من المنتجات"
      }

      //english
console.log(res.data.products.length)
      res.data.products.forEach(product => {
      
        
            if (counter %2 != 0) {

              rows += `
              <div class="row mb-3">
              <div class="col-xl-3 col-lg-5 img-div-${counter} svg-img svg-img" data-href="http://syrian-design-team.com/api/public/${product.product_image}">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" data-href="http://syrian-design-team.com/api/public/${product.product_image}">
                  <defs data-href="http://syrian-design-team.com/api/public/${product.product_image}">
                    <pattern data-href="http://syrian-design-team.com/api/public/${product.product_image}" id="img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                      <image data-href="http://syrian-design-team.com/api/public/${product.product_image}" xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                    </pattern>
                  </defs>
                  <polygon data-href="http://syrian-design-team.com/api/public/${product.product_image}" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter})"/>
                </svg>
              </div>
              <div class="col-xl-9 col-lg-7 text-div-${counter}">
                <h2 style="color:#f8af02;">${product.product_name}</h2>
                <p class="p-of-product">
                 
              ${product.product_description}
                  </p>
                  <button class="btn show-more-pr show-info-pr" id="${counter}">Show Info</button>
                  </div>
                  <div class="product-details hidden product-details-${counter} mb-5" id="${counter}">
                  <div class="container imgs-col">
              
              
                    <div class="col-4 ">
                    <h2>${product.product_name}</h2>

                    <svg class="svg-ipad w-100 inner-svg" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="img${counter}-details" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                      </pattern>
                    </defs>
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter}-details)"/>
                  </svg>
                  </div>
             
             
             
                  <div class="col-8 ">
                    <img src="${arrowLink}" class="_1st-angle">
                    <div class="p-details-1">
                      ${product.product_description}
                      </div>
    
                  </div>
           
                  <button class="btn show-more-pr show-less-p-details" id="${counter}">Show Less</button>
    
                </div>
              </div>
            </div>
      
      
      
            `
              
              mobile_rows += `
              <div class="row mb-3">
              <div class="col-xl-3 img-div-${counter} svg-img"  data-href="http://syrian-design-team.com/api/public/${product.product_image}">
              <svg data-href="http://syrian-design-team.com/api/public/${product.product_image}" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs data-href="http://syrian-design-team.com/api/public/${product.product_image}">
                  <pattern data-href="http://syrian-design-team.com/api/public/${product.product_image}" id="mobile-img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                    <image data-href="http://syrian-design-team.com/api/public/${product.product_image}" xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                  </pattern>
                </defs>
                <polygon data-href="http://syrian-design-team.com/api/public/${product.product_image}" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#mobile-img${counter})"/>
              </svg>
            </div>
            <div class="col-xl-9 text-div-1">
              <h2 style="color:#f8af02;">${product.product_name}</h2>
              <p class="p-of-product">
              ${product.product_description}
                </p>
              
            </div>

                       
            <div class="product-details hidden product-details-1 mb-5" id="1">
              <div class="container imgs-col">
          
          
                <div class="col-4 ">
                <h2>Product Name</h2>
                <svg class="svg-ipad svg-img w-100 inner-svg" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="img1-details" patternUnits="userSpaceOnUse" width="100" height="100">
                      <image xlink:href="./assets/images/1.png" x="-25" width="150" height="100" />
                    </pattern>
                  </defs>
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img1-details)"/>
                </svg>
              </div>
         
         
         
              <div class="col-8 ">
                <img src="${arrowLink}" class="_1st-angle">
                <div class="p-details-1">
                  <h1 style="color: #f8af02;">lorem Ipsum</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem ex, iusto perspiciatis Lorem ipsum dolor sit, amet consectetu quidem repellendus esse dolorum aperiam cupiditate magnam ad um neque asperiores minus iste mollitia, quam modi quaerat!</p>
                </div>

              </div>
       
              <button class="btn show-more-pr show-less-p-details" id="1">Show Less</button>

            </div>
          </div>
            </div>
              `
     
            }
     
       
       
       
            else{

            rows += `
              <div class="row mb-3">
         
              <div class="col-xl-9 col-lg-7 text-div-${counter}">
                <h2 style="color:#f8af02;">${product.product_name}</</h2>
                <p class="p-of-product">
                ${product.product_description}
                  </p>
                  <button class="btn show-more-pr show-info-pr" id="${counter}">Show Info</button>
                  </div>
              <div class="col-xl-3 col-lg-5 img-div-${counter} svg-img"  data-href="http://syrian-design-team.com/api/public/${product.product_image}">
                <svg data-href="http://syrian-design-team.com/api/public/${product.product_image}" class="svg-r" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern data-href="http://syrian-design-team.com/api/public/${product.product_image}" id="img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                      <image data-href="http://syrian-design-team.com/api/public/${product.product_image}" xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                    </pattern>
                  </defs>
                  <polygon data-href="http://syrian-design-team.com/api/public/${product.product_image}" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter})"/>
                </svg>
              </div>
              <div class="product-details hidden product-details-${counter} mb-5" id="${counter}">
              <div class="container imgs-col">
          
          
                <div class="col-4 ">
                <h2>${product.product_name}</h2>

                <svg class="svg-ipad w-100 inner-svg" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="img${counter}-details" patternUnits="userSpaceOnUse" width="100" height="100">
                    <image xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                  </pattern>
                </defs>
                <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter}-details)"/>
              </svg>
              </div>
         
         
         
              <div class="col-8 ">
                <img src="${arrowLink}" class="_1st-angle">
                <div class="p-details-1">
                  ${product.product_description}
                  </div>

              </div>
       
              <button class="btn show-more-pr show-less-p-details" id="${counter}">Show Less</button>

            </div>
          </div>
            </div>
              `   
     
     
     
     
              mobile_rows += `
              <div class="row mb-3">
              <div class="col-xl-3 ">
                <svg data-href="http://syrian-design-team.com/api/public/${product.product_image}" class="svg-r" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern data-href="http://syrian-design-team.com/api/public/${product.product_image}" id="mobile-img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                      <image data-href="http://syrian-design-team.com/api/public/${product.product_image}" xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                    </pattern>
                  </defs>
                  <polygon data-href="http://syrian-design-team.com/api/public/${product.product_image}" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#mobile-img${counter})"/>
                </svg>
              </div>            
              <div class="col-xl-9">
                <h2 style="color:#f8af02;">${product.product_name}</h2>
                <p class="p-of-product">
                ${product.product_description}
                  </p>
              </div>

            </div>
              `
            }






          
              if (counter ==  3 ) {
                
                
                container = `
                <div class="container con-1" id="1">
                    ${rows}
                    <button class="btn show-pr mt-5">${showMoreProducts}</button>
                </div>
                `
               
               
               
                container_rows = `
                <div class="container con-1" id="1">
                ${mobile_rows}
                <button class="btn show-pr mt-5">${showMoreProducts}</button>

                `
                $('.p-m').append(container_rows)
                $('.p-l').append(container)
                container = ""
                rows = ""
                container_rows = ""
                mobile_rows = ""
            }
            
            
            if (counter %3 == 0 && counter != 3) {
               
              
              
              container = `
                <div class="container con-${container_counter} hidden" id="${container_counter}">
                ${rows}
                <button class="btn show-pr mt-5">${showMoreProducts}</button>                  

                </div>
                `
                
                
                
                container_rows = `
                <div class="container con-${container_counter} hidden" id="${container_counter}">
                ${mobile_rows}
                <button class="btn show-pr mt-5">${showMoreProducts}</button>

                </div>
                `
                $('.p-m').append(container_rows)

                $('.p-l').append(container)
                container = ""
                rows = ""
                container_counter +=1
                container_rows = ""
                mobile_rows = ""
            }

            if(1==res.data.products.length){
              console.log('1')
              container_rows = `
              <div class="container con-${counter} " id="${counter}">
              ${mobile_rows}
              </div>
              `
        
              container = `
              <div class="container con-${counter} " id="${counter}">
              ${rows}
              </div>
              `
           
              $('.p-m').append(container_rows)
              $('.p-l').append(container)
        
            }else{
              counter  +=1
            }
       
              
      });
      

 if(counter!=1){    
    container_rows = `
      <div class="container con-${container_counter} hidden" id="${container_counter}">
      ${mobile_rows}
      </div>
      `

      container = `
      <div class="container con-${container_counter} hidden" id="${container_counter}">
      ${rows}
      </div>
      `
   
      $('.p-m').append(container_rows)
      $('.p-l').append(container)
}

    

        section_name = localStorage.getItem('section_name')
        section_description= localStorage.getItem('section_description')
        $('.section_name_h').text(section_name)
        $('.section_description_p').text(section_description)
  
        counter = 1
          
        container = ""
        
        rows = ""
        
        mobile_rows = ""
        
        container_rows = ""
  
        container_counter = 2
        arrowLink = "./assets/images/Path 2068.png"
        if (location.href.includes('ar')) {
          arrowLink= "../assets/images/Path 2068.png"
        }
  
        showMoreProducts = "Show More Products"
        if (location.href.includes('ar')) {
          showMoreProducts = "مزيد من المنتجات"
        }
  
        //arabic
        res.data.products.forEach(product => {
        
          
              if (counter %2 != 0) {
  
                rows += `
                <div class="row mb-3">
                <div class="col-xl-3 col-lg-5 img-div-${counter} svg-img svg-img" data-href="http://syrian-design-team.com/api/public/${product.product_image}">
                  <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" data-href="http://syrian-design-team.com/api/public/${product.product_image}">
                    <defs data-href="http://syrian-design-team.com/api/public/${product.product_image}">
                      <pattern data-href="http://syrian-design-team.com/api/public/${product.product_image}" id="img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image data-href="http://syrian-design-team.com/api/public/${product.product_image}" xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                      </pattern>
                    </defs>
                    <polygon data-href="http://syrian-design-team.com/api/public/${product.product_image}" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter})"/>
                  </svg>
                </div>
                <div class="col-xl-9 col-lg-7 text-div-${counter}">
                  <h2 style="color:#f8af02;">${product.product_arabic_name}</h2>
                  <p class="p-of-product">
                   
                ${product.product_arabic_description}
                    </p>
                    <button class="btn show-more-pr show-info-pr" id="${counter}">Show Info</button>
                    </div>
                    <div class="product-details hidden product-details-${counter} mb-5" id="${counter}">
                    <div class="container imgs-col">
                
                
                      <div class="col-4 ">
                      <h2>${product.product_arabic_name}</h2>
  
                      <svg class="svg-ipad w-100 inner-svg" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="img${counter}-details" patternUnits="userSpaceOnUse" width="100" height="100">
                          <image xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                        </pattern>
                      </defs>
                      <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter}-details)"/>
                    </svg>
                    </div>
               
               
               
                    <div class="col-8 ">
                      <img src="${arrowLink}" class="_1st-angle">
                      <div class="p-details-1">
                        ${product.product_arabic_description}
                        </div>
      
                    </div>
             
                    <button class="btn show-more-pr show-less-p-details" id="${counter}">Show Less</button>
      
                  </div>
                </div>
              </div>
        
        
        
              `
                
                mobile_rows += `
                <div class="row mb-3">
                <div class="col-xl-3 img-div-${counter} svg-img"  data-href="http://syrian-design-team.com/api/public/${product.product_image}">
                <svg data-href="http://syrian-design-team.com/api/public/${product.product_image}" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs data-href="http://syrian-design-team.com/api/public/${product.product_image}">
                    <pattern data-href="http://syrian-design-team.com/api/public/${product.product_image}" id="mobile-img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                      <image data-href="http://syrian-design-team.com/api/public/${product.product_image}" xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                    </pattern>
                  </defs>
                  <polygon data-href="http://syrian-design-team.com/api/public/${product.product_image}" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#mobile-img${counter})"/>
                </svg>
              </div>
              <div class="col-xl-9 text-div-1">
                <h2 style="color:#f8af02;">${product.product_arabic_name}</h2>
                <p class="p-of-product">
                ${product.product_arabic_description}
                  </p>
                
              </div>
  
                         
              <div class="product-details hidden product-details-1 mb-5" id="1">
                <div class="container imgs-col">
            
            
                  <div class="col-4 ">
                  <h2>Product Name</h2>
                  <svg class="svg-ipad svg-img w-100 inner-svg" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="img1-details" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image xlink:href="./assets/images/1.png" x="-25" width="150" height="100" />
                      </pattern>
                    </defs>
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img1-details)"/>
                  </svg>
                </div>
           
           
           
                <div class="col-8 ">
                  <img src="${arrowLink}" class="_1st-angle">
                  <div class="p-details-1">
                    <h1 style="color: #f8af02;">lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem ex, iusto perspiciatis Lorem ipsum dolor sit, amet consectetu quidem repellendus esse dolorum aperiam cupiditate magnam ad um neque asperiores minus iste mollitia, quam modi quaerat!</p>
                  </div>
  
                </div>
         
                <button class="btn show-more-pr show-less-p-details" id="1">Show Less</button>
  
              </div>
            </div>
              </div>
                `
       
              }
       
         
         
         
              else{
  
              rows += `
                <div class="row mb-3">
           
                <div class="col-xl-9 col-lg-7 text-div-${counter}">
                  <h2 style="color:#f8af02;">${product.product_arabic_name}</</h2>
                  <p class="p-of-product">
                  ${product.product_arabic_description}
                    </p>
                    <button class="btn show-more-pr show-info-pr" id="${counter}">Show Info</button>
                    </div>
                <div class="col-xl-3 col-lg-5 img-div-${counter} svg-img"  data-href="http://syrian-design-team.com/api/public/${product.product_image}">
                  <svg data-href="http://syrian-design-team.com/api/public/${product.product_image}" class="svg-r" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern data-href="http://syrian-design-team.com/api/public/${product.product_image}" id="img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image data-href="http://syrian-design-team.com/api/public/${product.product_image}" xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                      </pattern>
                    </defs>
                    <polygon data-href="http://syrian-design-team.com/api/public/${product.product_image}" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter})"/>
                  </svg>
                </div>
                <div class="product-details hidden product-details-${counter} mb-5" id="${counter}">
                <div class="container imgs-col">
            
            
                  <div class="col-4 ">
                  <h2>${product.product_arabic_name}</h2>
  
                  <svg class="svg-ipad w-100 inner-svg" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="img${counter}-details" patternUnits="userSpaceOnUse" width="100" height="100">
                      <image xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                    </pattern>
                  </defs>
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter}-details)"/>
                </svg>
                </div>
           
           
           
                <div class="col-8 ">
                  <img src="${arrowLink}" class="_1st-angle">
                  <div class="p-details-1">
                    ${product.product_arabic_description}
                    </div>
  
                </div>
         
                <button class="btn show-more-pr show-less-p-details" id="${counter}">Show Less</button>
  
              </div>
            </div>
              </div>
                `   
       
       
       
       
                mobile_rows += `
                <div class="row mb-3">
                <div class="col-xl-3 ">
                  <svg data-href="http://syrian-design-team.com/api/public/${product.product_image}" class="svg-r" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern data-href="http://syrian-design-team.com/api/public/${product.product_image}" id="mobile-img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image data-href="http://syrian-design-team.com/api/public/${product.product_image}" xlink:href="http://syrian-design-team.com/api/public/${product.product_image}" x="-25" width="150" height="100" />
                      </pattern>
                    </defs>
                    <polygon data-href="http://syrian-design-team.com/api/public/${product.product_image}" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#mobile-img${counter})"/>
                  </svg>
                </div>            
                <div class="col-xl-9">
                  <h2 style="color:#f8af02;">${product.product_arabic_name}</h2>
                  <p class="p-of-product">
                  ${product.product_arabic_description}
                    </p>
                </div>
  
              </div>
                `
              }
  
  
  
  
  
  
            
                if (counter ==  3 ) {
                  
                  
                  container = `
                  <div class="container con-1" id="1">
                      ${rows}
                      <button class="btn show-pr mt-5">${showMoreProducts}</button>
                  </div>
                  `
                 
                 
                 
                  container_rows = `
                  <div class="container con-1" id="1">
                  ${mobile_rows}
                  <button class="btn show-pr mt-5">${showMoreProducts}</button>
  
                  `
                  $('.products-arabic-mobile').append(container_rows)
                  $('.products-arabic-laptop').append(container)
                  container = ""
                  rows = ""
                  container_rows = ""
                  mobile_rows = ""
              }
              
              
              if (counter %3 == 0 && counter != 3) {
                 
                
                
                container = `
                  <div class="container con-${container_counter} hidden" id="${container_counter}">
                  ${rows}
                  <button class="btn show-pr mt-5">${showMoreProducts}</button>                  
  
                  </div>
                  `
                  
                  
                  
                  container_rows = `
                  <div class="container con-${container_counter} hidden" id="${container_counter}">
                  ${mobile_rows}
                  <button class="btn show-pr mt-5">${showMoreProducts}</button>
  
                  </div>
                  `
                  $('.products-arabic-mobile').append(container_rows)
  
                  $('.products-arabic-laptop').append(container)
                  container = ""
                  rows = ""
                  container_counter +=1
                  container_rows = ""
                  mobile_rows = ""
              }
         
              if(1==res.data.products.length){
                container_rows = `
                <div class="container con-${counter}" id="${counter}">
                ${mobile_rows}
                </div>
                `
          
                container = `
                <div class="container con-${counter}" id="${counter}">
                ${rows}
                </div>
                `
             
                $('.products-arabic-mobile').append(container_rows)
                $('.products-arabic-laptop').append(container)
              }
              else{
                counter  +=1
              }
                
        });
        
  if(counter != 1){

        container_rows = `
        <div class="container con-${container_counter} hidden" id="${container_counter}">
        ${mobile_rows}
        </div>
        `
  
        container = `
        <div class="container con-${container_counter} hidden" id="${container_counter}">
        ${rows}
        </div>
        `
     
        $('.products-arabic-mobile').append(container_rows)
        $('.products-arabic-laptop').append(container)
  }
  
        })

    })