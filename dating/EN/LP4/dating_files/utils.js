/** docReady is a single plain javascript function that provides a method of scheduling one or more javascript functions to run at some later point when the DOM has finished loading. */
!function(t,e){"use strict";function n(){if(!a){a=!0;for(var t=0;t<o.length;t++)o[t].fn.call(window,o[t].ctx);o=[]}}function d(){"complete"===document.readyState&&n()}t=t||"docReady",e=e||window;var o=[],a=!1,c=!1;e[t]=function(t,e){return a?void setTimeout(function(){t(e)},1):(o.push({fn:t,ctx:e}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(n,1):c||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",d),window.attachEvent("onload",n)),c=!0)))}}("docReady",window);

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function hideUnsub() {
	var u = getParameterByName('m');
	var u2 = getParameterByName('s4');
	var uDiv = document.getElementsByClassName("unsubscribe")[0];
	if (u == 1 || u2 == 1) {
		uDiv.style.display = "block";
	} else {
		uDiv.style.display = "none";
	}
}

function languageDetection() {
	var forceLang = getParameterByName("lang");
	if (forceLang) {
		return forceLang;
	} else {
		var userLang = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
		if (userLang === "zh-SG" || userLang === "zh-HK" || userLang === "zh-TW") {
			userLang = "zh-CN";
		} else if (userLang === "pt-BR") {
			userLang = "pt-BR";
		} else if (userLang.length > 2) {
			userLang = userLang[0] + userLang[1];
		}
		return userLang;
	}
}

function writeLocation(node, data) {
	var lang =  node.getAttribute("data-lang") || languageDetection(),
		flag = parseInt(node.getAttribute("data-flag")),
		cname = parseInt(node.getAttribute("data-cname")),
		city = parseInt(node.getAttribute("data-city")),
		prefix = node.getAttribute("data-prefix"),
		suffix = node.getAttribute("data-suffix"),
		prevText = node.textContent || node.innerText;

	if (prevText === 'undefined') prevText = "";

	var langSet = data.cnames[lang] ? lang : 'en';
	var arr = [], str = '';

	if (cname !== 0) {
		arr.push(data.cnames[langSet]);
	}

	if (city !== 0) {
		var cityText, geoCity = data.city[langSet];

		if (geoCity && langSet === lang) {
			var before = prefix ? prefix : '';
			var after = suffix ? suffix : '';
			cityText = before + geoCity + after;
		} else {
			cityText = prevText;
		}
		arr.push(cityText);
	}

	var str2 = arr.join(", ");

	if (flag !== 0) {
		if (node.classList.contains('squared')) {
			str += '<i class="flag-icon flag-icon-squared flag-icon-' + data.cc.toLowerCase() + '"></i>' + str2;
		} else {
			str += '<i class="flag-icon flag-icon-' + data.cc.toLowerCase() + '"></i>' + str2;
		}
	} else {
		str = str2;
	}

	node.innerHTML = str;
}

function showLocation(containerId) {
	var locationInfoNode = document.getElementById(containerId);
	var locationInfoNodes = document.getElementsByClassName(containerId);

	if (locationInfoNode || locationInfoNodes.length) {
		var url = 'https://tdsjsext3.com/ExtService.svc/getextparams';

		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send(null);

		xhr.onreadystatechange = function () {
			var DONE = 4;
			var OK = 200;

			if (xhr.readyState === DONE) {
				if (xhr.status === OK) {
					var data = JSON.parse(xhr.responseText);

					if (locationInfoNode) {
						writeLocation(locationInfoNode, data);
					}

					if (locationInfoNodes.length) {
						for (var i = 0; i < locationInfoNodes.length; i++) {
							writeLocation(locationInfoNodes[i], data);
						}
					}
				} else {
					console.log('Error: ' + xhr.status);
				}
			}
		}
	}
}

function appendPixels() {
	var redirectTo = "/web/";

	function addPixel(pixel_link) {
		var pixel = new Image(1, 1);
		pixel.src = pixel_link;
		pixel.style.position = "absolute";
		pixel.style.top = "-50px";
		document.body.appendChild(pixel);
	}

	function addExoPixels(goal) {
		var aliases = ["main.exoclick.com", "main.exdynsrv.com", "main.exosrv.com"];
		for (var i = 0; i < aliases.length; i++) {
			var n = "https://" + aliases[i] + "/tag.php?goal=" + goal;
			addPixel(n);
		}
	}

	addPixel("//delivery.trafficforce.com/retargeting.php?id=391");
	addExoPixels("581b21a74a633d6b0efdadf552fe94ce");
	addPixel("//tag.reporo.net/rem/pwy_1st");

	var els = document.querySelectorAll('a[href="/web/"]');
	for (var i = 0, l = els.length; i < l; i++) {
		var el = els[i];
		el.addEventListener("click", function(e){
			e.preventDefault();
			setTimeout(function () {
				location.href = redirectTo;
			}, 600);
			addPixel("//delivery.trafficforce.com/retargeting.php?id=411");
			addExoPixels("a4d9e26e19c37e5113a3f0d9780930f3");
			addPixel("//tag.reporo.net/rem/pwy_2nd");
		}, false);
	}
}

docReady(function() {
	if (document.getElementsByClassName("unsubscribe")[0]) {
		hideUnsub();
	}

	showLocation("userLocation");
});

/* 
 window.onload = function() {
 setTimeout(appendPixels, 2000);
 };*/