$(document).ready(function(){
    alfabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    for (i = 0; i < alfabet.length; i++){
        $( "#pagenation" ).append( '<li class="tab col"><a href="#'+alfabet[i]+'">'+alfabet[i]+'</a></li>' );
        $( "#words" ).append( '<div id="'+alfabet[i]+'" class="col offset-s1 s10"><ul class="collapsible"></ul></div>' );

        $.getJSON("dictonary/"+alfabet[i]+".json", function(result){
            $.each(result, function(i, field){
              $("#"+alfbet[i]).append(field);
            });
          });
    }
    $('.tabs').tabs();
    $('.collapsible').collapsible();
  });