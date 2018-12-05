let distance = require('google-distance-matrix');
 
let origins = ['Hyderabad']; //'Rajahmundry','visakapatnam'
let destinations = ['Chennai'];
 

distance.key('API - KEY');
distance.units('imperial'); //METRIC

distance.matrix(origins, destinations, function (err, distances) {
    if (!err) console.log(distances);
    if (err) return console.log(err);
    if (!distances) return console.log('no distance available for two points');

    if(distances.status == 'OK') {
    	for(let i=0;i<origins.length;i++){
    		for(let j=0;j<destinations.length;j++){
    			let origin = distances.origin_addresses[i];
                let destination = distances.destination_addresses[j];
                if (distances.rows[0].elements[j].status == 'OK') {
                    let distance = distances.rows[i].elements[j].distance.text;
                    console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                } else {
                    console.log(destination + ' is not reachable by land from ' + origin);
                }
    		}
    	}
    }
});
