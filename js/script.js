$(document).ready(function(){
    alfabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    for (i = 0; i < alfabet.length; i++){
        $( "#pagenation" ).append( '<li class="tab col"><a href="#'+alfabet[i]+'">'+alfabet[i]+'</a></li>' );
        $( "#words" ).append( '<div id="'+alfabet[i]+'" class="col offset-s1 s10"><ul class="collapsible"></ul></div>' );
        for (j = 0; j < alfabet.length; j++){
            $( ".collapsible" ).append('<li><div class="collapsible-header default-primary-color">'+alfabet[j]+'</div><div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div></li>');
        }
    }

    $('.tabs').tabs();
    $('.collapsible').collapsible();
  });