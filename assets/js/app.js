$('#logo-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    lazyLoad: true,
    autoplay: {
      delay: 2500,
    },
    responsive:{
        0:{
            items:2
        },
        400:{
            items:3
        },
        600:{
            items:4
        },
        992:{
            items:5
        }
    }
})
$('#service-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    lazyLoad: true,
    // autoplay: {
    //   delay: 2500,
    // },
    responsive:{
        0:{
            items:1
        }
        
    }
})


function activeHover(){
    document.querySelector('#faqs .content .box.active .openClose img').src = 'assets/img/icons/add.svg'
    document.querySelector('#faqs .content .box.active').classList.remove('active');
    
    // .src = 'assets/img/icons/add.svg'
    event.target.parentElement.parentElement.classList.add('active');
    event.target.src = 'assets/img/icons/remove.svg'
    
}