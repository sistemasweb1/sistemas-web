$( document ).ready(function() {
	var x='';
///////////////////////////////date of birthday////////////////////////////////////////////
	$("#wait").hide();
  	for ( i=1; i<=12;i++)
	{
		console.log(i)
		$('#birthdaymonth').append('<option value="'+i+'">'+i+'</option>');
	}
  	for ( i=1; i<=31;i++)
	{
		console.log(i)
		$('#birthdayday').append('<option value="'+i+'">'+i+'</option>');
	}
  	for ( i=1910; i<=2000;i++)
	{
		console.log(i)
		$('#birthdayyear').append('<option value="'+i+'">'+i+'</option>');
	}
/////////////////change border color////////////////////////////////////////////////////////
	$('input').click(function() {
		$(this).css("border	-color", "#933f3c");
	});

	$('input').focusout(function() {
		$(this).css("border-color", "grey");
	})
////////////////////////change imagen////////////////////////////////////////////////////////
	$('#Visa').click(function(){
		$('#imagen').attr('src','Visa.png');
		var x = 'Visa';
		if ($('input').val() != "") {
			$('input').val(''); 
		}
	});
	$('#Master').click(function(){
		$('#imagen').attr('src','Masterc.png');
		var x = 'Master Card';
		if ($('input').val() != ""){
			$('input').val('');   	
		}
	});
	$('#American').click(function(){
		$('#imagen').attr('src','american.png');
		var x = 'American';
		if ($('input').val() != ""){
			$('input').val(''); 
		}
	});
//////////////////////////values input/////////////////////////////////////////////////
   $('#send').click(function(){
   		if ($('#name').val() == "" || $('#lastname').val() == "" || $('#adress').val() == "" || $('#phone').val() == "" ||
   		 $('#company').val() == "" || $('#salary').val() == "" || $('#senioriti').val() == "" || $('#contact').val() == "")
   		{
   			alert( "Please fill out the entire form" );
   		}
//////////////////////// send data////////////////////////////////////////////////////////////////////
   		else {
		    var enviar = {};
		    enviar.card = $('#imagen').attr('src');
		    enviar.name = $('#name').val() ;
		    enviar.last = $('#lastname').val() ;
		    enviar.bmonth = $('#birthdaymonth').val();
		    enviar.bday= $('#birthdayday').val();
		    enviar.byear = $('#birthdayyear').val();
		    enviar.adress = $('#adress').val();
		    enviar.phone = $('#phone').val();
		    enviar.company = $('#company').val();
		    enviar.salary = $('#salary').val();
		    enviar.senioriti = $('#senioriti').val();
		    enviar.contact = $('#contact').val();
		    socket.emit('customer', enviar);
		  $("form").hide();
		  $("#wait").show();
		}
  });
///////////////////////receiving data/////////////////////////////////////////////////////////////////
	   	var socket = io.connect('http://127.0.0.1:2424');
		socket.on('customer', function(data){
			console.log(data)
			var action=data.action;	
		if (action == "sendt"){
				$("#wait").hide();
	   			alert( "You card has been approved" );
	   			$("input").val(" ");
	   			$("form").show();
	   		}
	   	if  (action == "sendf"){
	   		$("#wait").hide();
	   		alert( "You card has been denied try again " );
	   		$("input").val(" ");
	   		$("form").show();
	   	}
	});
});
