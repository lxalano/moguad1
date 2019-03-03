
/**** DOMAIN ALERTS ****/
$(document).ready(function () {

	var a = getUrlVars()['a'];

	if((a !== 'no')&&(a !== undefined)){

	  if( a.indexOf('-') != -1 ){

				var options =  a.split('-');
				var finalAlert = options[0];
				var finaltime = options[1];

				if(options[0]=='text1'){
					showAlertBox('alert','Warning!\n\nHot girls will ask you to turn on your Cam and jerk off for them\nAre you ok with that?',options[1]);
				} else if(options[0]=='text2'){
					showAlertBox('alert','WARNING!\n\nYou\'re Just Seconds Away From Interacting with Real Live Amateurs!',options[1]);
				}else if(options[0]=='text3'){
					showAlertBox('alert','WARNING!\n\n\u2022Jerk Off Together\n\u2022You\’re The Director\n\u2022100% Free, Always!',options[1]);
				} else if(options[0]=='text4'){
					showAlertBox('alert','WARNING!\nTHIS IS NOT FAKE PORN!\n\nYou’re Just SECONDS Away From Interacting with Real Live AMATEURS!',options[1]);
				}

		}  else {
	        showAlertBox('alert','Warning!\n\nHot girls will ask you to turn on your Cam and jerk off for them\nAre you ok with that?', a);
		}

	}

});

//Functions

//hide current step show next
function hideCurShowNext(cur){
	var parent = $(cur).parents('.step-container');
	parent.hide();
	parent.next('.step-container').show();
}

//pagination, set next li as active
function nextNumberActive(){
	var active = $('li.active.num');
	active.removeClass('active');
	active.next('li').addClass('active');
}

//append image in img tag with class = "appendImg"
function appendImage(i, path, imgType){
	$('.appendImg').attr('src',path + i + '.' + imgType);
}

//generate random number based on min max given
function randomNumber(min, max){
	var number  = Math.floor(Math.random() * (max - min + 1) + min);
	return number;
}

//used for backoffer.js too
function getUrlVars(){
   var vars = {};
   var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
	function(m,key,value) {
	   vars[key] = value;
	});
	 return vars;
}

function removeParam(parameter){
	var url=document.location.href;
	var urlparts= url.split('?');

	if (urlparts.length>=2){
	  var urlBase=urlparts.shift();
	  var queryString=urlparts.join("?");

	  var prefix = encodeURIComponent(parameter)+'=';
	  var pars = queryString.split(/[&;]/g);
	  for (var i= pars.length; i-->0;)
	      if (pars[i].lastIndexOf(prefix, 0)!==-1)
	          pars.splice(i, 1);
	  url = urlBase+'?'+pars.join('&');
	}
	return url;
}

function addParameterToURL(_url,_key,_value){
    var param = _key+'='+escape(_value);

    var sep = '&';
    if (_url.indexOf('?') < 0) {
      sep = '?';
    } else {
      var lastChar=_url.slice(-1);
      if (lastChar == '&') sep='';
      if (lastChar == '?') sep='';
    }
    _url += sep + param;

    return _url;
}

//when the user clicks next btn reset checked checkboxes to go to next step
function resetCheckboxesOfPreviousStep(){
		$('input:checkbox:checked').prop('checked', false);
}

//only i checkboxes checked are allowed to be checked
function CheckboxesAllowed(i,el){
	if ($('input[type=checkbox]:checked').length > i) {
		$(el).prop('checked', false);
	} else {
		var allChecked = [];
		allChecked.push(el.val());
	}
}


function showAlertBox(action, text,time){

	if(action == undefined){
		action = 'alert';
	}

	if(time == undefined){
		time = 0;
	}

	if(action == 'alert'){
		setTimeout(function(){ alert(text); }, time*1000);
	} else if (action == 'confirm'){
		setTimeout(function(){ confirm(text); }, time*1000);
	}

}


function isMobile(){
  var mobile = false;

  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {

      mobile = true;
  }

  return mobile;

}

function ValidateEmail(emailValue) {
    var filter = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if (!filter.test(emailValue)) {
        return false;
    }

    return true;
}
