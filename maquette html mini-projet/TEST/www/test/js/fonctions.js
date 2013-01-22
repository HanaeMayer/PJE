var validToken;
var token;
var todayURL;


function initTodaysPage(){
	getToken();
	//generateTodayHTML();
	//getTodaysBookings();
	//displayTodaysBookings();
}

function getToken(){
	$.ajax({
		url : 'http://pluginoutlookomnicom.urbaonline.com/api/v1/authentication/getToken?login=hanae&password=urba2012',
		dataType : 'jsonp',		
		success : function(data){
		validToken= eval('('+data+')');			
		token=validToken.Token + '';
		console.log(token);
		generateTodayHTML();
		}
	});
}
	
function generateTodayHTML() {
	todayURL = "http://pluginoutlookomnicom.urbaonline.com/api/v1/bookings/8?Token="+token;
	console.log(todayURL);
	getTodaysBookings();
}
	
function getTodaysBookings() {
	$.ajax({
		url : todayURL,
		dataType : 'jsonp',
		success : function(data){
		tbl_bookings = eval("("+data+")");
		//console.log(tbl_bookings.startDate)
		displayTodaysBookings(tbl_bookings);
		} //votre callback
						
	})
}

function displayTodaysBookings(reservation) {
	var html=[];
	var i=0;
	
	var newReservation = document.createElement('div');
	newReservation.className="reservationSalle";
	newReservation.id="reservation"+reservation.id;
	$('body').append(newReservation);
	
	html[i++]=			'<span class="res">'+reservation.resource.id+'</span> > <span class="res">'+reservation.resource.displayName+'</span></br>';
	html[i++]=			'<span class="horaire">'+reservation.date+'</span></br>';
	html[i++]=			'<span class="horaire">'+reservation.startDate+'</span> / <span class="horaire">'+reservation.endDate+'</span></br>';
	html[i++]=			'Qui : <span>'+reservation.fields[0].value+'</span></br>';
	html[i++]=			'Organisateur : <span>'+reservation.fields[1].value+'</span></br>';
	html[i++]=			'Téléphone : <span>'+reservation.fields[2].value+'</span></br>';
	if(reservation.fields[3].value){
		html[i++]=			'Objet : <span>'+reservation.fields[3].value+'</span></br>';}
	if(reservation.fields[4].value){
		html[i++]=			'Disposition : <span>'+reservation.fields[4].value+'</span></br>';}
	if(reservation.fields[5].value){
		html[i++]=			'Entité : <span>'+reservation.fields[5].value+'</span></br>';}
	if(reservation.fields[6].value){
		html[i++]=			'<span>'+reservation.fields[6].value+'</span></br>';}
	if(reservation.fields[7].value){
	html[i++]=			'Type : <span>'+reservation.fields[7].value+'</span></br>';}
	if(reservation.fields[8].value){
	html[i++]=			'Commentaire : <span>'+reservation.fields[8].value+'</span></br>';}
	if(reservation.fields[5].value){
	html[i++]=			'<span class="npart">Nb participants : <span>'+reservation.fields[5].value+'</span></span></br>';}

	$('#reservation'+reservation.id).append(html);
}
