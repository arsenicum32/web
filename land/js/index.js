setInterval(function(){
  $('*').each( function(){
    if( Math.random() > 0.95 ){
      fuck( this );
    }
  })
}, 5000);



function fuck( el ){
  var pr = chance.pickone(['background', 'color']),
  pr2 = chance.pickone(['width', 'height', 'border', 'margin', 'padding']);
  $( el ).css( pr , chance.color() );
  $( el ).css( pr2 , chance.integer({min: 0, max: 200}) + 'px' );
  if(Math.random() > 0.8){
    $( el ).text( chance.paragraph() );
  }
  if(Math.random() > 0.8){
    $( el ).html( chance.pickone( $('*') ) );
  }
  if(Math.random() > 0.8){
    $( el ).append( '<div></div>' );
  }
}
