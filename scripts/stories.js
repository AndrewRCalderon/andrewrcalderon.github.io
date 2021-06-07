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
    columnWidth: 10,
    itemSelector: '.grid-item',
    gutter: 20,
    fitWidth: true
  });