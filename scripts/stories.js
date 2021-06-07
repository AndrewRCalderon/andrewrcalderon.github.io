// var $grid = $('.grid').packery({
//     itemSelector: '.grid-item',
//     gutter: 2,
//     columnWidth: 230,
    
//   });
  
//   $grid.find('.grid-item').each( function( i, gridItem ) {
//     var draggie = new Draggabilly( gridItem );
//     $grid.packery( 'bindDraggabillyEvents', draggie );
//   });

  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 5,
    fitWidth: true
  });