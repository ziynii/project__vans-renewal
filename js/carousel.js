const mainBannerMobileSlide = tns({
  container: '.main-banner-slide-md .slide-list',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  controlsContainer: '.main-banner-slide-md .slide-controls',
});

const mainBannerDesktopSlide = tns({
  container: '.main-banner-slide-xl .slide-list',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  controlsContainer: '.main-banner-slide-xl .slide-controls',
});

const newProductsSlide = tns({
  container: '.new-product-slide .slide-list',
  items: 1,
  gutter: 8,
  edgePadding: 16,
  nav: false,
  controlsContainer: '.new-product-slide .slide-controls',
  mouseDrag: true,
  preventScrollOnTouch: true,
  responsive: {
    768: {
      items: 2,
      gutter: 16,
      edgePadding: 24,
    },
    1200: {
      items: 3,
    },
  },
});

const bestProductsSlide = tns({
  container: '.best-product-slide .slide-list',
  items: 1,
  gutter: 8,
  edgePadding: 16,
  nav: false,
  controlsContainer: '.best-product-slide .slide-controls',
  mouseDrag: true,
  preventScrollOnTouch: true,
  responsive: {
    768: {
      items: 2,
      gutter: 16,
      edgePadding: 24,
    },
    1200: {
      items: 3,
    },
  },
});
