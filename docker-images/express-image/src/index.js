var Chance = require('chance');

// Utilisation du conctructeur pour créer l'objet chance
var chance = new Chance();

var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send( generateMeetings() );
});

app.listen(3000, function(){
	console.log('Accepting HTTP request on port 3000.');
})

var zero = 0;

function generateMeetings(){
	var numberOfMeetings = chance.integer({
		min: zero,
		max: 15
	});

	console.log(numberOfMeetings);

	var meetings = [];
	for(var i = zero; i < numberOfMeetings; i++){

		meetings.push({
			adress: chance.address(),
			city: chance.city(),
			country: chance.country({ full: true }),
			date: chance.date({year: 2017, american: false}),

		});

	};
	console.log(meetings);
	return meetings;



}