$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(this).find("span").toggleClass("fa-times");
    });

    // menu-tab -- Show the first tab by default
$('.menu-main__tabs-stage .menu-main__wrapper').hide();
$('.menu-main__tabs-stage .menu-main__wrapper:first').show();
$('.menu-main--tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.menu-main--tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.menu-main--tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.menu-main__tabs-stage .menu-main__wrapper').hide();
  $($(this).attr('href')).show();
});

//isotope menu gallery

// quick search regex
var qsRegex;
var buttonFilter;

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.find('.menu-main__title').text().match( qsRegex ) : true;
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return searchResult && buttonResult;
  }
});

$('#filters').on( 'click', 'button', function() {
  buttonFilter = $( this ).attr('data-filter');
  $grid.isotope();
});

// use value of search field to filter
var $quicksearch = $('#quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}) );


  // change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}

});

