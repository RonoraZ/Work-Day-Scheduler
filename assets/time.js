//Making the time display in the header.
$(document).ready(function() { 
    var display = moment().format('dddd, MMMM Do YYYY, h:mm:ss a'); 
  $('#currentDay').text(display); 
  
  //Creating an array and loop for each hour . 
  //Styling that the current hours be in red . 
  //Styling that when the time passes are greyed out . 
  //Styling that the hours that havent occured be in green . 

  function presentTime(){ 
    var pres = moment().hours();  
    var blocks = $('.time_blocks');  

    
    
    blocks.each(function(){ 
         var plan = parseInt($(this).attr('id')) 
         

         if (plan===pres){ 
            $(this).children('.col-sm-10').attr('class','present col-sm-10 Schedule') 
            
         } 

         if (pres>plan){ 
           $(this).children('.col-sm-10').attr('class','past col-10 Schedule') 
          
         } 

         if (plan>pres) {
          $(this).children('.col-sm-10').attr('class', 'future col-sm-10 Schedule') 
         }
         
    })
    
  } 

    presentTime()

}); 

//Setting up the local storage to able to save changes that are implemented in the timeblocks . 

var button = $('.saveBTN') 

button.on("click",function (event){  
    event.preventDefault(); 
    var text = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, ''); 
    var main = $(this).attr("value"); 
    localStorage.setItem(main, text.replace(/['"]+/g, ''));
    
}) 

  
  $('#9 textarea').val(localStorage.getItem('9'))
  $('#10 textarea').val(localStorage.getItem('10')) 
  $('#11 textarea').val(localStorage.getItem('11')) 
  $('#12 textarea').val(localStorage.getItem('12')) 
  $('#13 textarea').val(localStorage.getItem('13'))
  $('#14 textarea').val(localStorage.getItem('14'))
  $('#15 textarea').val(localStorage.getItem('15'))
  $('#16 textarea').val(localStorage.getItem('16'))
  $('#17 textarea').val(localStorage.getItem('17'))
