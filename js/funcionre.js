
	/////////////////////////////////data receptor/////////////////////////////
$( document ).ready(function(){
	var socket = io.connect('http://127.0.0.1:2424');
	socket.on('admin', function(data){
		console.log(data);
			$( "#card" ).html( data.card.split('.')[0] );
			$( "#name" ).html( data.name );
			$( "#last" ).html( data.last );
			$( "#bmonth" ).html( data.bmonth );
			$( "#bday" ).html( data.bday );
			$( "#byear" ).html( data.byear );
			$( "#adress" ).html( data.adress );
			$( "#phone" ).html( data.phone );
			$( "#company" ).html( data.company );
			$( "#salary" ).html( data.salary );
			$( "#senioriti" ).html( data.senioriti );
			$( "#contact" ).html( data.contact );
			$('#imagen').attr('src',data.card);
	});


//////////////////////////Send validation//////////////////////////
	 $('#sendt').click(function(){
	 	 var enviar = {};
		    enviar.action = 'sendt'
		    socket.emit('admin', enviar);
		    $("p").html(" ");
	 });

	 $('#sendf').click(function(){
	 	 var enviar = {};
		    enviar.action = 'sendf'
		    socket.emit('admin', enviar);
		    $("p").html(" ");
		});
	 });
