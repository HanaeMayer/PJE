var validToken
var urbaTodayURL

function initTodaysPage(){
	
	getToken();
	generateHtmlUsingToken();
	getTodaysBookings();
	displayTodaysBookings();
}

function getToken(){
	$.ajax({
		url : "http://pluginoutlookomnicom.urbaonline.com/api/v1/authentication/getToken?login=yves&password=urba2012",
		dataType : 'jsonp',
		success : function(data){
		validToken= data.Token
		console.log(validToken);
		} //votre callback
						
	})
	alert(validToken);
	}
	
function generateHtmlUsingToken() {
	urbaTodayURL = "http://pluginoutlookomnicom.urbaonline.com/api/v1/bookings/8?Token="+validToken
}
	
function getTodaysBookings() {
	$.ajax({
		url : urbaTodayURL,
		dataType : 'jsonp',
		success : function(data){
		tbl_bookings = eval("("+data+")");
		console.log(tbl_bookings.startDate)
		} //votre callback
						
	})
}

function displayTodaysBookings() {
	$.getJSON('reservations.json', function(json) {
			var items = [];
		$.each(json, function(key, value) {

			items.push('<span class="res">' + json[key].resource.id + '</span> > <span class="res">' + json[key].resource.displayName + '</span></br>');
			items.push('<span class="horaire">'+json[key].date+'</span></br>');
			items.push('<span class="horaire">'+json[key].startDate+'</span> / <span class="horaire">'+json[key].endDate+'</span></br>');
			items.push('Qui : <span>'+json[key].fields[0].value+'</span></br>');
			items.push('Organisateur : <span>'+json[key].fields[2].value+'</span></br>');
			items.push('Téléphone : <span>'+json[key].fields[1].value+'</span></br>');
			if(json[key].fields[3].value){
				items.push('Objet : <span>'+json[key].fields[3].value+'</span></br>');}
			if(json[key].fields[5].value){
				items.push('Disposition : <span>'+json[key].fields[5].value+'</span></br>');}
			if(json[key].fields[8].value){
				items.push('Entité : <span>'+json[key].fields[8].value+'</span></br>');}
			if(json[key].fields[7].value){
				items.push('<span>'+json[key].fields[7].value+'</span></br>');}
			if(json[key].fields[8].value){
				items.push('Type : <span>'+json[key].fields[8].value+'</span></br>');}
			if(json[key].fields[6].value){
				items.push('Commentaire : <span>'+json[key].fields[6].value+'</span></br>');}
			if(json[key].fields[4].value){
				items.push('<span class="npart">Nb participants : <span>'+json[key].fields[4].value+'</span></span></br>');}
			//if(){
			//	items.push();}
						
			$('<div>', {'class': 'reservationSalle',
				html: items.join('')
				}).appendTo('body');
			items.length = 0;
		});
	});
}
