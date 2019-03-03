window.history.pushState({page: 1}, "", "");

window.addEventListener('popstate', function(event) {

  if(event){
  	//use getUrlVars function from main.js
	var b = getUrlVars()['b'];
	var campId = getUrlVars()['campid'];



	var parameters = ['campid','creative','adid','spotid','reqid'];


	//store the values into an array
	var allGivenParams = {};

	for(i=0;i<parameters.length;i++){

		var paramName = parameters[i];
		var paramValue = getUrlVars()[parameters[i]]

		if(paramValue !== undefined){

			allGivenParams[paramName] = paramValue;

		}

	}


	checkBandRedirect(b, allGivenParams);

  }

});

function checkBandRedirect(b, allGivenParams){

	if(b !== 'no'){

		var urlAppend = '';


		for (var key in allGivenParams) {
      		if (allGivenParams.hasOwnProperty(key)) {
      			urlAppend += '&' + key + '=' + allGivenParams[key];
      		}
    	}


		if((b == "yes")||(b == undefined)||(b > 9 )){
			b = 0;
		}

		var possibleUrls=new Array()
    possibleUrls[0]="http://track.afcpatrk.com/dd4c5c22-b4da-4052-b824-d77ee69f74e9";
		possibleUrls[1]="http://track.afcpatrk.com/dd4c5c22-b4da-4052-b824-d77ee69f74e9";
		possibleUrls[2]="http://track.afcpatrk.com/dd4c5c22-b4da-4052-b824-d77ee69f74e9";
		possibleUrls[3]="http://track.afcpatrk.com/dd4c5c22-b4da-4052-b824-d77ee69f74e9";
		possibleUrls[4]="http://track.afcpatrk.com/dd4c5c22-b4da-4052-b824-d77ee69f74e9";
		possibleUrls[5]="http://track.afcpatrk.com/dd4c5c22-b4da-4052-b824-d77ee69f74e9";
		possibleUrls[6]="http://track.afcpatrk.com/dd4c5c22-b4da-4052-b824-d77ee69f74e9";
		possibleUrls[7]="http://track.afcpatrk.com/dd4c5c22-b4da-4052-b824-d77ee69f74e9";
		possibleUrls[8]="http://track.afcpatrk.com/dd4c5c22-b4da-4052-b824-d77ee69f74e9";
		possibleUrls[9]="http://track.afcpatrk.com/dd4c5c22-b4da-4052-b824-d77ee69f74e9";

		b++;

		var finalUrl = possibleUrls[b-1] + '?b=' + b;

		finalUrl += urlAppend;

		redirectTo(finalUrl);

	} else {
    window.history.back();
  }

}

function redirectTo(url){
	window.location = url;
}
