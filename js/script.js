$(document).ready(function(){
    alfabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M']

    for (i = 0; i < alfabet.length; i++){
        $( "#pagenation" ).append( '<li class="tab col s3"><a href="#'+alfabet[i]+'">'+alfabet[i]+'</a></li>' );
        $( "#words" ).append( '<div id="'+alfabet[i]+'" class="col s12">'+alfabet[i]+'</div>' );
    }
    
    $('.tabs').tabs();
  });