$(document).ready(function(){

    axios({
        url : `http://syrian-design-team.com/api/public/api/main_section/${localStorage.getItem('main_section_id')}/sections/`,
        method : "GET"
    }).then(res=>{
      let section_name = localStorage.getItem('main_section_name')
      let section_description= localStorage.getItem('main_section_description')
      $('.section_name_h').text(section_name)
      $('.section_description_p').text(section_description)
        let counter = 1
        
        let container = ""
        
        let rows = ""
        
        let mobile_rows = ""
        
        let container_rows = ""

        let container_counter = 2
        let showMore = "Show More"
        let showMoreSections = "Show More Sections"
        if (location.href.includes('ar')) {
          showMoreSections = "مزيد من الأقسام"
          showMore = " المزيد"
        }
        res.data.sections.forEach(section => {
        
          
              if (counter %2 != 0) {

                rows += `
                <div class="row mb-3">
                <div class="col-xl-3 col-lg-5 img-div-${counter}">
                  <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image xlink:href="http://syrian-design-team.com/api/public/${section.section_image}" x="-25" width="150" height="100" />
                      </pattern>
                    </defs>
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter})"/>
                  </svg>
                </div>
                <div class="col-xl-9 col-lg-7 text-div-1">
                  <h2 style="color:#f8af02;">${section.section_name}</h2>
                  <p class="p-of-product">
                   
                ${section.section_description}
                    </p>
                    <a data-id="${section.id}" data-name="${section.section_name}" data-description="${section.section_description}" class="btn show-more-pr show-products" href="./products.html">${showMore}</a>
                    </div>
              </div>
                `
                
                mobile_rows += `
                <div class="row mb-3">
                <div class="col-xl-3 img-div-${counter}">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mobile-img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                      <image xlink:href="http://syrian-design-team.com/api/public/${section.section_image}" x="-25" width="150" height="100" />
                    </pattern>
                  </defs>
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#mobile-img${counter})"/>
                </svg>
              </div>
              <div class="col-xl-9 text-div-1">
                <h2 style="color:#f8af02;">${section.section_name}</h2>
                <p class="p-of-product">
                ${section.section_description}
                  </p>
                  <a data-id="${section.id}" data-name="${section.section_name}" data-description="${section.section_description}" class="btn show-more-pr" href="./products.html">${showMore}</a>
              </div>
              </div>
                `
       
              }
       
              else{

              rows += `
                <div class="row mb-3">
           
                <div class="col-xl-9 col-lg-7">
                  <h2 style="color:#f8af02;">${section.section_name}</</h2>
                  <p class="p-of-product">
                  ${section.section_description}
                    </p>
                    <a data-id="${section.id}" data-name="${section.section_name}" data-description="${section.section_description}" class="btn show-more-pr show-products" href="./products.html">${showMore}</a>
                    </div>
                <div class="col-xl-3 col-lg-5">
                  <svg class="svg-r" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image xlink:href="http://syrian-design-team.com/api/public/${section.section_image}" x="-25" width="150" height="100" />
                      </pattern>
                    </defs>
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter})"/>
                  </svg>
                </div>
              </div>
                `   
                mobile_rows += `
                <div class="row mb-3">
                <div class="col-xl-3">
                  <svg class="svg-r" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="mobile-img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image xlink:href="http://syrian-design-team.com/api/public/${section.section_image}" x="-25" width="150" height="100" />
                      </pattern>
                    </defs>
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#mobile-img${counter})"/>
                  </svg>
                </div>            
                <div class="col-xl-9">
                  <h2 style="color:#f8af02;">${section.section_name}</h2>
                  <p class="p-of-product">
                  ${section.section_description}
                    </p>
                    <a data-id="${section.id}" data-name="${section.section_name}" data-description="${section.section_description}" class="btn show-more-pr" href="./products.html">${showMore}</a>
                    </div>
  
              </div>
                `
              }

            
                if (counter ==  3 ) {
                  container = `
                  <div class="container con-1" id="1">
                      ${rows}
                      <button class="btn show-pr mt-5">${showMoreSections}</button>
                  </div>
                  `
                  container_rows = `
                  <div class="container con-1" id="1">
                  ${mobile_rows}
                  <button class="btn show-pr mt-5">${showMoreSections}</button>

                  `
                  $('.mobile-size').append(container_rows)
                  $('.laptop-size').append(container)
                  container = ""
                  rows = ""
                  container_rows = ""
                  mobile_rows = ""
              }
              
              
              if (counter %3 == 0 && counter != 3) {
                  container = `
                  <div class="container con-${container_counter} hidden" id="${container_counter}">
                  ${rows}
                  </div>
                  <button class="btn show-pr mt-5">${showMoreSections}</button>                  
                  `
                  container_rows = `
                  <div class="container con-${container_counter} hidden" id="${container_counter}">
                  ${mobile_rows}
                  <button class="btn show-pr mt-5">${showMoreSections}</button>

                  </div>
                  `
                  $('.mobile-size').append(container_rows)

                  $('.laptop-size').append(container)
                  container = ""
                  rows = ""
                  container_counter +=1
                  container_rows = ""
                  mobile_rows = ""
              }
         
              counter  +=1
                
        });
        

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
     
        $('.mobile-size').append(container_rows)
        $('.laptop-size').append(container)

    }).then(res=>{
      let section_name = localStorage.getItem('main_section_name')
      let section_description= localStorage.getItem('main_section_description')
      $('.section_name_h').text(section_name)
      $('.section_description_p').text(section_description)
        let counter = 1
        
        let container = ""
        
        let rows = ""
        
        let mobile_rows = ""
        
        let container_rows = ""

        let container_counter = 2
        let showMore = "Show More"
        let showMoreSections = "Show More Sections"
        if (location.href.includes('ar')) {
          showMoreSections = "مزيد من الأقسام"
          showMore = " المزيد"
        }
        res.data.sections.forEach(section => {
        
          
              if (counter %2 != 0) {

                rows += `
                <div class="row mb-3">
                <div class="col-xl-3 col-lg-5 img-div-${counter}">
                  <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image xlink:href="http://syrian-design-team.com/api/public/${section.section_image}" x="-25" width="150" height="100" />
                      </pattern>
                    </defs>
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter})"/>
                  </svg>
                </div>
                <div class="col-xl-9 col-lg-7 text-div-1">
                  <h2 style="color:#f8af02;">${section.section_arabic_name}</h2>
                  <p class="p-of-product">
                   
                ${section.section_arabic_description}
                    </p>
                    <a data-id="${section.id}" data-name="${section.section_arabic_name}" data-description="${section.section_arabic_description}" class="btn show-more-pr show-products" href="./products.html">${showMore}</a>
                    </div>
              </div>
                `
                
                mobile_rows += `
                <div class="row mb-3">
                <div class="col-xl-3 img-div-${counter}">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mobile-img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                      <image xlink:href="http://syrian-design-team.com/api/public/${section.section_image}" x="-25" width="150" height="100" />
                    </pattern>
                  </defs>
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#mobile-img${counter})"/>
                </svg>
              </div>
              <div class="col-xl-9 text-div-1">
                <h2 style="color:#f8af02;">${section.section_arabic_name}</h2>
                <p class="p-of-product">
                ${section.section_arabic_description}
                  </p>
                  <a data-id="${section.id}" data-name="${section.section_arabic_name}" data-description="${section.section_arabic_description}" class="btn show-more-pr" href="./products.html">${showMore}</a>
              </div>
              </div>
                `
       
              }
       
              else{

              rows += `
                <div class="row mb-3">
           
                <div class="col-xl-9 col-lg-7">
                  <h2 style="color:#f8af02;">${section.section_arabic_name}</</h2>
                  <p class="p-of-product">
                  ${section.section_arabic_description}
                    </p>
                    <a data-id="${section.id}" data-name="${section.section_arabic_name}" data-description="${section.section_arabic_description}" class="btn show-more-pr show-products" href="./products.html">${showMore}</a>
                    </div>
                <div class="col-xl-3 col-lg-5">
                  <svg class="svg-r" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image xlink:href="http://syrian-design-team.com/api/public/${section.section_image}" x="-25" width="150" height="100" />
                      </pattern>
                    </defs>
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img${counter})"/>
                  </svg>
                </div>
              </div>
                `   
                mobile_rows += `
                <div class="row mb-3">
                <div class="col-xl-3">
                  <svg class="svg-r" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="mobile-img${counter}" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image xlink:href="http://syrian-design-team.com/api/public/${section.section_image}" x="-25" width="150" height="100" />
                      </pattern>
                    </defs>
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#mobile-img${counter})"/>
                  </svg>
                </div>            
                <div class="col-xl-9">
                  <h2 style="color:#f8af02;">${section.section_arabic_name}</h2>
                  <p class="p-of-product">
                  ${section.section_arabic_description}
                    </p>
                    <a data-id="${section.id}" data-name="${section.section_arabic_name}" data-description="${section.section_arabic_description}" class="btn show-more-pr" href="./products.html">${showMore}</a>
                    </div>
  
              </div>
                `
              }

            
                if (counter ==  3 ) {
                  container = `
                  <div class="container con-1" id="1">
                      ${rows}
                      <button class="btn show-pr mt-5">${showMoreSections}</button>
                  </div>
                  `
                  container_rows = `
                  <div class="container con-1" id="1">
                  ${mobile_rows}
                  <button class="btn show-pr mt-5">${showMoreSections}</button>

                  `
                  $('.mobile-size').append(container_rows)
                  $('.laptop-size').append(container)
                  container = ""
                  rows = ""
                  container_rows = ""
                  mobile_rows = ""
              }
              
              
              if (counter %3 == 0 && counter != 3) {
                  container = `
                  <div class="container con-${container_counter} hidden" id="${container_counter}">
                  ${rows}
                  </div>
                  <button class="btn show-pr mt-5">${showMoreSections}</button>                  
                  `
                  container_rows = `
                  <div class="container con-${container_counter} hidden" id="${container_counter}">
                  ${mobile_rows}
                  <button class="btn show-pr mt-5">${showMoreSections}</button>

                  </div>
                  `
                  $('.mobile-size').append(container_rows)

                  $('.laptop-size').append(container)
                  container = ""
                  rows = ""
                  container_counter +=1
                  container_rows = ""
                  mobile_rows = ""
              }
         
              counter  +=1
                
        });
        

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
     
        $('.sections-arabic-mobile').append(container_rows)
        $('.sections-arabic-laptop').append(container)

    })



    $(document).on('click', '.show-more-pr', e => {
      e.preventDefault();
      localStorage.setItem('section_id', $(e.target).data('id'))
      localStorage.setItem('section_name', $(e.target).data('name'))
      localStorage.setItem('section_description', $(e.target).data('description'))

      if (location.href.includes('ar')) {
        location.href = "/ar/products.html"
      }
      else{
        location.href = "/products.html"
      }
    })



})