$(document).ready(function(){



   $("#secondpage,#athletes").hide();

  $("#arrow,#arrow2").click(function(){ 
$("#firstpage").show();
$("#secondpage,#athletes").hide();
});
   
   $("#btnathletes").click(function(){ 
$("#athletes").show();
$("#secondpage,#firstpage").hide();
});
   $("#btnevents").click(function(){
$("#secondpage").show();
$("#firstpage,#athletes").hide();
 

 var root = 'http://localhost:8081/api';

  $.ajax({

            url: root+'/events/',
            method: 'GET',
            data:JSON.parse,
       		success:function(data){
            console.log(data);

         

for (var i=0; i<data.length;i++){
         	
           

$("#verticalmenu").append("<div>"+ "<p>" + data[i].location + "</p>"+ "<br>" + data[i].startDate +" - "+ data[i].endDate + "</div>")

}


$( "#verticalmenu>div").addClass("oberhof");        
$( ".oberhof>p").addClass("oberhofp");



$(".oberhof").each(function(i) {
        $(this).attr('id', "oberhof" + (i + 1));
 });
  $('#oberhof1').click(function(){
  	 
  	$(this).css('background', 'orange');

    $.ajax({

            url: root + '/results/Oestersund',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
          
  $.each(data, function (key, value){
 	
 	$.each(value, function (k, v){
 		
$("#results2").append("<div>"+  v.athlete.firstName +" " +v.athlete.lastName +" "+ v.athlete.nationality + " "+v.time + "</div>");
  
});
       });
$( "#results2>div").addClass("oberhof3"); 
 
 },

 error: function (data) {
              console.log(data);
       	 }
          
   });

  	  });
  $('#oberhof2').click(function(){
  	 
  	$(this).css('background', 'orange');

    $.ajax({

            url: root + '/results/Pokljuka',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
          
  $.each(data, function (key, value){
 	
 	$.each(value, function (k, v){
 		
$("#results3").append("<div>"+  v.athlete.firstName +" " +v.athlete.lastName +" "+ v.athlete.nationality + " "+v.time + "</div>");
  
});
       });
$( "#results3>div").addClass("oberhof4"); 
   
 },

 error: function (data) {
              console.log(data);
       	 }
          
   });

  	  });

    $('#oberhof3').click(function(){
  	 
  	$(this).css('background', 'orange');

    $.ajax({

            url: root + '/results/Nove Mesto',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
          
  $.each(data, function (key, value){
 	
 	$.each(value, function (k, v){
 		
$("#results3").append("<div>"+  v.athlete.firstName +" " +v.athlete.lastName +" "+ v.athlete.nationality + " "+v.time + "</div>");
  
});
       });
$( "#results3>div").addClass("oberhof4"); 
   
 },

 error: function (data) {
              console.log(data);
       	 }
          
   });

  	  });
    $('#oberhof4').click(function(){
  	 
  	$(this).css('background', 'orange');

    $.ajax({

            url: root + '/results/Oberhof',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
          
  $.each(data, function (key, value){
 	
 	$.each(value, function (k, v){
 		
$("#results3").append("<div>"+  v.athlete.firstName +" " +v.athlete.lastName +" "+ v.athlete.nationality + " "+v.time + "</div>");
  
});
       });
$( "#results3>div").addClass("oberhof4"); 
   
 },

 error: function (data) {
              console.log(data);
       	 }
          
   });

  	  });
     $('#oberhof5').click(function(){
  	 
  	$(this).css('background', 'orange');

    $.ajax({

            url: root + '/results/Ruhpolding',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
          
  $.each(data, function (key, value){
 	
 	$.each(value, function (k, v){
 		
$("#results3").append("<div>"+  v.athlete.firstName +" " +v.athlete.lastName +" "+ v.athlete.nationality + " "+v.time + "</div>");
  
});
       });
$( "#results3>div").addClass("oberhof4"); 
   
 },

 error: function (data) {
              console.log(data);
       	 }
          
   });

  	  });
      $('#oberhof6').click(function(){
  	 
  	$(this).css('background', 'orange');

    $.ajax({

            url: root + '/results/Antholz-Anterselva',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
          
  $.each(data, function (key, value){
 	
 	$.each(value, function (k, v){
 		
$("#results3").append("<div>"+  v.athlete.firstName +" " +v.athlete.lastName +" "+ v.athlete.nationality + " "+v.time + "</div>");
  
});
       });
$( "#results3>div").addClass("oberhof4"); 
   
 },

 error: function (data) {
              console.log(data);
       	 }
          
   });

  	  });
  	  $('#oberhof7').click(function(){
  	 
  	$(this).css('background', 'orange');

    $.ajax({

            url: root + '/results/Hochfilzen',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
          
  $.each(data, function (key, value){
 	
 	$.each(value, function (k, v){
 		
$("#results3").append("<div>"+  v.athlete.firstName +" " +v.athlete.lastName +" "+ v.athlete.nationality + " "+v.time + "</div>");
  
});
       });
$( "#results3>div").addClass("oberhof4"); 
   
 },

 error: function (data) {
              console.log(data);
       	 }
          
   });

  	  });
  	  $('#oberhof8').click(function(){
  	 
  	$(this).css('background', 'orange');

    $.ajax({

            url: root + '/results/Pyeongchang',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
          
  $.each(data, function (key, value){
 	
 	$.each(value, function (k, v){
 		
$("#results3").append("<div>"+  v.athlete.firstName +" " +v.athlete.lastName +" "+ v.athlete.nationality + " "+v.time + "</div>");
  
});
       });
$( "#results3>div").addClass("oberhof4"); 
   
 },

 error: function (data) {
              console.log(data);
       	 }
          
   });

  	  });
  	  $('#oberhof9').click(function(){
  	 
  	$(this).css('background', 'orange');

    $.ajax({

            url: root + '/results/Kontiolahti',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
          
  $.each(data, function (key, value){
 	
 	$.each(value, function (k, v){
 		
$("#results3").append("<div>"+  v.athlete.firstName +" " +v.athlete.lastName +" "+ v.athlete.nationality + " "+v.time + "</div>");
  
});
       });
$( "#results3>div").addClass("oberhof4"); 
   
 },

 error: function (data) {
              console.log(data);
       	 }
          
   });

  	  });

  	 $('#oberhof10').click(function(){
  	 
  	$(this).css('background', 'orange');

    $.ajax({

            url: root + '/results/Oslo Holmenkollen',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
          
  $.each(data, function (key, value){
 	
 	$.each(value, function (k, v){
 		
$("#results3").append("<div>"+  v.athlete.firstName +" " +v.athlete.lastName +" "+ v.athlete.nationality + " "+v.time + "</div>");
  
});
       });
$( "#results3>div").addClass("oberhof4"); 
   
 },

 error: function (data) {
              console.log(data);
       	 }
          
   });

  	  });


                    },

        	error: function (data) {
              console.log(data);
       	 }     
            });
 	});
$("#btnathletes").click(function(){ 
	 var root = 'http://localhost:8081/api';
	
 $.ajax({

            url: root + '/athletes/',
            method: 'GET',
            contentType:'application/json',
            data:JSON.parse,

       		success:function(data){
            console.log(data);

for (var i=0; i<data.length;i++){
$("#athletesverticalmenu").append("<div>"+ data[i].id + "."+data[i].nationality+" "+ data[i].firstName +"  "+ data[i].lastName +" "+ data[i].points+ "</div>")
}
$( "#athletesverticalmenu>div").addClass("oberhof2");
 
 
$(".oberhof2").each(function(i) {
        $(this).attr('id', "oberhof2" + (i + 1));

 $.ajax({

            url: root + '/athletes/1',
            method: 'GET',
            data:JSON.parse,
       		success:function(data){
            console.log(data);

      $("#name").text("NAME:LAURA"); 
      $("#surname").text("SURNAME:DAHLMEIER"); 
      $("#dateofbirth").text("DATE OF BIRTH:8.april 1993"); 
      $("#placeofbirth").text("PLACE OF BIRTH:Garmisch-Partenkirchen"); 
      $("#height").text("HEIGHT:163"); 
      $("#weight").text("WEIGHT:53"); 
      $("#totalpoints").text("TOTAL POINTS:123"); 
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("oberhof21");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
  $.ajax({

            url: root + '/athletes/2',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);

$("#name").text("NAME:TATIANA"); 
      $("#surname").text("SURNAME:AKIMOVA"); 
      $("#dateofbirth").text("DATE OF BIRTH:26.october 1990"); 
      $("#placeofbirth").text("PLACE OF BIRTH:Cheboksary"); 
      $("#height").text("HEIGHT:168"); 
      $("#weight").text("WEIGHT:57"); 
      $("#totalpoints").text("TOTAL POINTS:110"); 
var modal = document.getElementById('myModal');
var btn = document.getElementById("oberhof22");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
   $.ajax({

            url: root + '/athletes/3',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);

$("#name").text("NAME:CELIA"); 
      $("#surname").text("SURNAME:AYMONIER"); 
      $("#dateofbirth").text("DATE OF BIRTH:5.august 1991"); 
      $("#placeofbirth").text("PLACE OF BIRTH:Cheboksary"); 
      $("#height").text("HEIGHT:162"); 
      $("#weight").text("WEIGHT:56"); 
      $("#totalpoints").text("TOTAL POINTS:109"); 
var modal = document.getElementById('myModal');
var btn = document.getElementById("oberhof23");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
    $.ajax({

            url: root + '/athletes/4',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
	  $("#name").text("NAME:ANIAS"); 
      $("#surname").text("SURNAME:BESCOND"); 
      $("#dateofbirth").text("DATE OF BIRTH:15.may 1987"); 
      $("#placeofbirth").text("PLACE OF BIRTH:Aunay sur Odon"); 
      $("#height").text("HEIGHT:170"); 
      $("#weight").text("WEIGHT:67"); 
      $("#totalpoints").text("TOTAL POINTS:107"); 

var modal = document.getElementById('myModal');
var btn = document.getElementById("oberhof24");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
     $.ajax({

            url: root + '/athletes/5',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
 $("#name").text("NAME:JUSTINE"); 
      $("#surname").text("SURNAME:BRAISAZ"); 
      $("#dateofbirth").text("DATE OF BIRTH:4.june 1996"); 
      $("#placeofbirth").text("PLACE OF BIRTH:Albertville"); 
      $("#height").text("HEIGHT:168"); 
      $("#weight").text("WEIGHT:60"); 
      $("#totalpoints").text("TOTAL POINTS:100"); 

var modal = document.getElementById('myModal');
var btn = document.getElementById("oberhof25");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
      $.ajax({

            url: root + '/athletes/6',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
	$("#name").text("NAME:LUCIE"); 
      $("#surname").text("SURNAME:CHARVATOVA"); 
      $("#dateofbirth").text("DATE OF BIRTH:1.february 1993"); 
      $("#placeofbirth").text("PLACE OF BIRTH:Hradec Kralove"); 
      $("#height").text("HEIGHT:173"); 
      $("#weight").text("WEIGHT:66"); 
      $("#totalpoints").text("TOTAL POINTS:99"); 

var modal = document.getElementById('myModal');
var btn = document.getElementById("oberhof26");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
       $.ajax({

            url: root + '/athletes/7',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
	  $("#name").text("NAME:ANAIS"); 
      $("#surname").text("SURNAME:CHEVALIER"); 
      $("#dateofbirth").text("DATE OF BIRTH:12.february 1993"); 
      $("#placeofbirth").text("PLACE OF BIRTH:Saint Martin d'Heres"); 
      $("#height").text("HEIGHT:168"); 
      $("#weight").text("WEIGHT:60"); 
      $("#totalpoints").text("TOTAL POINTS:100"); 

var modal = document.getElementById('myModal');
var btn = document.getElementById("oberhof27");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
        $.ajax({

            url: root + '/athletes/8',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);
$("#name").text("NAME:DARYA"); 
      $("#surname").text("SURNAME:DOMRACHEVA"); 
      $("#dateofbirth").text("DATE OF BIRTH:3.august 1986"); 
      $("#placeofbirth").text("PLACE OF BIRTH:Mins"); 
      $("#height").text("HEIGHT:168"); 
      $("#weight").text("WEIGHT:60"); 
      $("#totalpoints").text("TOTAL POINTS:70"); 

var modal = document.getElementById('myModal');
var btn = document.getElementById("oberhof28");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
         $.ajax({

            url: root + '/athletes/9',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
          $.ajax({

            url: root + '/athletes/10',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
           $.ajax({

            url: root + '/athletes/11',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
            $.ajax({

            url: root + '/athletes/12',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
             $.ajax({

            url: root + '/athletes/13',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
              $.ajax({

            url: root + '/athletes/14',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
               $.ajax({

            url: root + '/athletes/15',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
                $.ajax({

            url: root + '/athletes/16',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
                 $.ajax({

            url: root + '/athletes/17',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
                  $.ajax({

            url: root + '/athletes/18',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
                   $.ajax({

            url: root + '/athletes/19',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
                    $.ajax({

            url: root + '/athletes/20',
            method: 'GET',
            data:JSON.parse,

       		success:function(data){
            console.log(data);



 },


 error: function (data) {
              console.log(data);
       	 }
          
   });
});
},
 error: function (data) {
              console.log(data);
       	 }
          
   });
  });
  	
 }); 
