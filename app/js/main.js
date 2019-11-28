$( document ).ready(function () {
  // $( '.gal' ).owlCarousel({
  //   loop: true,
  //   dots: true,
  //   dotsEach: true,
  //   autoplay: true,
  //   autoplayTimeout: 6000,
  //   autoHeight: true,
  //   items: 1,
  //   animateOut: 'fadeOut',
  //   animateIn: 'fadeIn'
  // })

  $( '.container' ).owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    nav: true,
    loop: true,
    rewind: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 3
      }
    }
  })

})