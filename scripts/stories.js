var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    gutter: 5,
    columnWidth: 10
  });
  
  $grid.find('.grid-item').each( function( i, gridItem ) {
    var draggie = new Draggabilly( gridItem );
    $grid.packery( 'bindDraggabillyEvents', draggie );
  });