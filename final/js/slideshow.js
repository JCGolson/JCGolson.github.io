$(document).ready(function() {
    setInterval(slider, 4000);
    var i = 1;
  
    function slider() {
     i = $('input[name=radio-set]:checked').attr('id');
        
        
     i = (parseInt(i.slice(-1)) % 5)+1;
       
        
     $('#bouton-' + i).prop('checked', true);
        
    }
  });