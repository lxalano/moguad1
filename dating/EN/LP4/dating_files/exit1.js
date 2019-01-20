
/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(a){}return r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var f=p[u].split("="),l=f[0].replace(d,decodeURIComponent),m=f.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{if(m=t.read?t.read(m,l):t(m,l)||m.replace(d,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(a){}if(n===l){c=m;break}n||(c[l]=m)}catch(a){}}return c}return o.get=o.set=o,o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n(function(){})});

/* docReady is a single plain javascript function that provides a method of scheduling one or more javascript functions to run at some later point when the DOM has finished loading. */
!function(t,e){"use strict";function n(){if(!a){a=!0;for(var t=0;t<o.length;t++)o[t].fn.call(window,o[t].ctx);o=[]}}function d(){"complete"===document.readyState&&n()}t=t||"docReady",e=e||window;var o=[],a=!1,c=!1;e[t]=function(t,e){return a?void setTimeout(function(){t(e)},1):(o.push({fn:t,ctx:e}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(n,1):c||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",d),window.attachEvent("onload",n)),c=!0)))}}("docReady",window);

// exit modal window
if (typeof popup_style == 'undefined') {
	var popup_style = "popup-light";
}

if (typeof popup_glow == 'undefined') {
	var popup_glow = "glow-red";
}		

var thePopup = '<div id="popup_exit" class="popup-modal '+ popup_style +'"><div class="modal-offer '+ popup_glow +'"><div class="modal-content"><div class="modal-text" id="popupText"></div></div></div></div><div class="popup_overlay"></div>';

var current_href = window.location.hostname;
var PreventExitSplash = false;

function getUrlParameter(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
getUrlParameter("p") === "0" ? PreventExitSplash = true : PreventExitSplash = false;

// classes for text colors in <span class=""></span>: text-red, text-green, text-white, text-yellow
var alert_lang = {
		en: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>GET EXTRA</span></strong> discounts and <strong><span class='text-green'>FREE</span></strong> shipping right now!</strong><br/><br/>Amazing new pills, best viagra alternative, make her <strong><span class='text-red'>SCREAM!</span></strong><br/><br/>Click <span class='text-green'>STAY ON PAGE</span></strong> below and get your benefits!<br/><br/>*********************************************<br/><br/>",
		fr: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>OBTENEZ</span></strong> des remises <strong><span class='text-green'>SUPPLEMENTAIRES</span></strong> et la livraison des maintenant!</strong><br/><br/>De nouvelles pilules incroyables, la meilleure alternative au viagra, faites la <strong><span class='text-red'>CRIER!</span></strong><br/><br/>Cliquez sur <span class='text-green'>RESTER SUR LA PAGE</span></strong> ci-dessous et obtenez vos avantages!<br/><br/>*********************************************<br/><br/>",
		de: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>ERHALTE JETZT EXTRA</span></strong> Rabatte und <strong><span class='text-green'>KOSTENLOSEN</span></strong> Versand!</strong><br/><br/>Unglaubliche neue Pillen, die beste Viagra-Alternative, bring sie zum <strong><span class='text-red'>Schreien!</span></strong><br/><br/>Klicke unten auf <span class='text-green'>AUF DER SEITE BLEIBEN</span></strong> und erhalte deine Vorteile!<br/><br/>*********************************************<br/><br/>",
		nl: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>KRIJG NU EXTRA</span></strong> kortingen en <strong><span class='text-green'>GRATIS</span></strong> verzending!</strong><br/><br/>Verbazingwekkende nieuwe pillen, het beste viagra-alternatief, laat haar <strong><span class='text-red'>GILLEN!</span></strong><br/><br/>Klik hieronder op <span class='text-green'>BLIJF OP PAGINA</span></strong> en profiteer van je voordelen!<br/><br/>*********************************************<br/><br/>",
		it: "<br/><br/>*********************************************<br/><br/>*** ASPETTA! *** <br/><br/><span class='text-green'>RICEVI</span></strong> sconti <strong><span class='text-green'>EXTRA</span></strong> e spedizione gratuita adesso!</strong><br/><br/>Nuove fantastiche pillole, l'alternativa migliore al viagra, falla <strong><span class='text-red'>URLARE!</span></strong><br/><br/>Clicca <span class='text-green'>RESTA SULLA PAGINA</span></strong> e ricevi i tuoi benefici!<br/><br/>*********************************************<br/><br/>",
		es: "<br/><br/>*********************************************<br/><br/>*** ¡DETENTE! *** <br/><br/>¡<span class='text-green'>OBTÉN</span></strong> descuentos <strong><span class='text-green'>EXTRA</span></strong> y envío gratuito ahora mismo!</strong><br/><br/>¡Nuevos píldoras increíbles, la mejor viagra alternativa, hazla <strong><span class='text-red'>GRITAR DE PLACER!</span></strong><br/><br/>¡Haz clic en <span class='text-green'>PERMANECER EN LA PÁGINA</span></strong> en la parte inferior y obtén beneficios!<br/><br/>*********************************************<br/><br/>",
		no: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>FÅ EKSTRA</span></strong> avslag og <strong><span class='text-green'>GRATIS</span></strong> frakt nå!</strong><br/><br/>Fantastiske nye piller, det beste alternativet til Viagra, få henne til å <strong><span class='text-red'>SKRIKE!</span></strong><br/><br/>Klikk <span class='text-green'>BLI PÅ SIDEN</span></strong> under og motta dine fordeler!<br/><br/>*********************************************<br/><br/>",
		dk: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>FÅ EKSTRA</span></strong> rabatter og <strong><span class='text-green'>GRATIS</span></strong> levering lige nu!</strong><br/><br/>Fantastiske nye piller, bedste alternativ til viagra, få hende til at <strong><span class='text-red'>SKRIGE!</span></strong><br/><br/>Klik på <span class='text-green'>BLIV PÅ SIDEN</span></strong> nedenfor og få dine fordele!<br/><br/>*********************************************<br/><br/>",
		da: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>FÅ EKSTRA</span></strong> rabatter og <strong><span class='text-green'>GRATIS</span></strong> levering lige nu!</strong><br/><br/>Fantastiske nye piller, bedste alternativ til viagra, få hende til at <strong><span class='text-red'>SKRIGE!</span></strong><br/><br/>Klik på <span class='text-green'>BLIV PÅ SIDEN</span></strong> nedenfor og få dine fordele!<br/><br/>*********************************************<br/><br/>",
		fi: "<br/><br/>*********************************************<br/><br/>*** PYSÄHDY! *** <br/><br/><span class='text-green'>SAA LISÄÄ</span></strong> alennuksia ja <strong><span class='text-green'>ILMAINEN</span></strong> toimitus juuri nyt!</strong><br/><br/>Mahtavia uusia pillereitä, parhaat viagran vaihtoehdot, saa hänet <strong><span class='text-red'>HUUTAMAAN!</span></strong><br/><br/>Klikkaa <span class='text-green'>PYSY SIVULLA</span></strong> alta ja saat etusi!<br/><br/>*********************************************<br/><br/>",
		tr: "<br/><br/>*********************************************<br/><br/>*** DUR! *** <br/><br/><span class='text-green'>ŞİMDİ ÜCRETSİZ</span></strong> kargo ve <strong><span class='text-green'>EXTRA</span></strong> indirim al!</strong><br/><br/>En iyi viagra alternatifi, inanılmaz yeni haplar, ona <strong><span class='text-red'>ÇIĞLIK</span></strong> attır!<br/><br/>Aşağıdaki <span class='text-green'>SAYFADA KAL’a</span></strong> tıkla ve avantajlardan faydalan!<br/><br/>*********************************************<br/><br/>",
		pt: "<br/><br/>*********************************************<br/><br/>*** PARE! *** <br/><br/><span class='text-green'>OBTENHA</span></strong> descontos <strong><span class='text-green'>EXTRA</span></strong> e portes gratuitos já!</strong><br/><br/>Novas cápsulas surpreendentes, a melhor alternativa ao viagra, faça-a <strong><span class='text-red'>GEMER!</span></strong><br/><br/>Clique em <span class='text-green'>PERMANECER NA PÁGINA</span></strong> abaixo e consiga as suas vantagens!<br/><br/>*********************************************<br/><br/>",
		pl: "<br/><br/>*********************************************<br/><br/>*** CZEKAĆ! *** NIE POZWALA uwolnić KUPON EXPIRE!<br/><br/>Specjalna Zniżka i *** *** wysyłka GRATIS aktywowany.<br/><br/>Nowe oryginalne tabletki, lepiej niż Viagra, Fuck na wiele godzin!<br/><br/>Kliknij poniżej PAGE Stay On, aby otrzymać natychmiastowy rabat.<br/><br/>*********************************************<br/><br/>",
		cz: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>ZÍSKEJTE EXTRA</span></strong> slevy a poštovné <strong><span class='text-green'>ZDARMA</span></strong> právě teď!</strong><br/><br/>Nové úžasné tablety, nejlepší alternativa viagry, bude <strong><span class='text-red'>KŘIČET</span> blahem!</strong><br/><br/>Klikněte níže na <span class='text-green'>ZŮSTAT NA STRÁNCE</span></strong> a získejte své výhody!<br/><br/>*********************************************<br/><br/>",
		cs: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>ZÍSKEJTE EXTRA</span></strong> slevy a poštovné <strong><span class='text-green'>ZDARMA</span></strong> právě teď!</strong><br/><br/>Nové úžasné tablety, nejlepší alternativa viagry, bude <strong><span class='text-red'>KŘIČET</span> blahem!</strong><br/><br/>Klikněte níže na <span class='text-green'>ZŮSTAT NA STRÁNCE</span></strong> a získejte své výhody!<br/><br/>*********************************************<br/><br/>",
		hu: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/>Szerezzen <span class='text-green'>EGYEDI</span></strong> kedvezmenyeket és <strong><span class='text-green'>INGYENES SZÁLLÍTÁST</span></strong> most azonnal!</strong><br/><br/>Elképesztő új tabletta, a viagra legjobb alternatívája, <strong><span class='text-red'>SIKÍTSON</span></strong> ön miatt!<br/><br/>Kattintson az <span class='text-green'>OLDALON MARADOK</span></strong> gombra és szerezze meg kedvezményeit!<br/><br/>*********************************************<br/><br/>",
		sk: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>ZÍSKAJTE EXTRA</span></strong> zľavy a doručenie <strong><span class='text-green'>ZADARMO</span></strong> práve teraz!</strong><br/><br/>Skvelé nové tabletky, najlepšia alternatíva Viagry, aby žena <strong><span class='text-red'>KRIČALA!</span></strong><br/><br/>Kliknite na <span class='text-green'>OSTAŤ NA STRÁNKE</span></strong>  a získajte vaše výhody!<br/><br/>*********************************************<br/><br/>",
		ro: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>OBŢINE EXTRA</span></strong> reduceri și beneficiază de transport gratis chiar <strong><span class='text-green'>ACUM</span></strong>!</strong><br/><br/>Noile pastile uimitoare, cea mai bună alternativă la Viagra, o vor face să <strong><span class='text-red'>STRIGE</span></strong> de plăcere!<br/><br/>Apasă butonul de mai jos <span class='text-green'>RĂMÂI PE PAGINĂ</span></strong> și beneficiază de toate aceste avantaje!<br/><br/>*********************************************<br/><br/>",
		gr: "<br/><br/>*********************************************<br/><br/>*** ΣΤΟΠ! *** <br/><br/>Λάβετε <span class='text-green'>ΕΞΤΡΑ</span></strong> εκπτώσεις και <strong><span class='text-green'>ΔΩΡΕΑΝ</span></strong> αποστολή τώρα!</strong><br/><br/>Τα εκπληκτικά νέα χάπια, η καλύτερη εναλλακτική λύση του viagra, κάντε την να <strong><span class='text-red'>ΟΥΡΛΙΑΞΕΙ!</span></strong><br/><br/>Κάντε κλικ στο <span class='text-green'>ΜΕΙΝΕΤΕ ΣΤΗ ΣΕΛΙΔΑ</span></strong> και λάβετε τα οφέλη σας!<br/><br/>*********************************************<br/><br/>",
		el: "<br/><br/>*********************************************<br/><br/>*** ΣΤΟΠ! *** <br/><br/>Λάβετε <span class='text-green'>ΕΞΤΡΑ</span></strong> εκπτώσεις και <strong><span class='text-green'>ΔΩΡΕΑΝ</span></strong> αποστολή τώρα!</strong><br/><br/>Τα εκπληκτικά νέα χάπια, η καλύτερη εναλλακτική λύση του viagra, κάντε την να <strong><span class='text-red'>ΟΥΡΛΙΑΞΕΙ!</span></strong><br/><br/>Κάντε κλικ στο <span class='text-green'>ΜΕΙΝΕΤΕ ΣΤΗ ΣΕΛΙΔΑ</span></strong> και λάβετε τα οφέλη σας!<br/><br/>*********************************************<br/><br/>",
		ru: "<br/><br/>*********************************************<br/><br/>*** СТОЙ! *** <br/><br/>Забирай дополнительную <span class='text-green'>СКИДКУ</span></strong> и <strong><span class='text-green'>БЕСПЛАТНУЮ ДОСТАВКУ</span></strong> прямо сейчас!</strong><br/><br/>Невероятные, новые таблетки, лучшая альтернатива виагре, заставят ее <strong><span class='text-red'>КРИЧАТЬ!</span></strong><br/><br/>Нажми <span class='text-green'>ОСТАТЬСЯ НА СТРАНИЦЕ</span></strong>, чтобы получить скидку!<br/><br/>*********************************************<br/><br/>",
		id: "<br/><br/>*********************************************<br/><br/>*** BERHENTI! *** <br/><br/><span class='text-green'>DAPATKAN LEBIH</span></strong> diskaun dan penghantaran <strong><span class='text-green'>PERCUMA SEKARANG!</span></strong></strong><br/><br/>Pill baru yang menakjubkan, alternatif Viagra terbaik, buat si dia <strong><span class='text-red'>MENJERIT!</span></strong><br/><br/>Klik <span class='text-green'>TINGGAL PADA HALAMAN</span></strong> di bawah dan dapatkan faedah-faedah anda!<br/><br/>*********************************************<br/><br/>",
		th: "<br/><br/>*********************************************<br/><br/>*** หยุดก่อน! *** <br/><br/>รับส่วนลดเพิ่มเติมและจัดส่งฟรีตอนนี้เลย!<br/><br/>ยาใหม่ที่น่าตื่นเต้น ทางเลือกไวอากร้าที่ดีที่สุด ทำให้เธอต้องร้องขอชีวิต!<br/><br/>คลิก อยู่ในหน้านี้ ด้านล่างและรับสิทธิประโยชน์ของคุณ!<br/><br/>*********************************************<br/><br/>",
		vn: "<br/><br/>*********************************************<br/><br/>*** CHỜ ĐỢI! *** KHÔNG CHO MIỄN PHÍ PHIẾU GIẢM GIÁ CỦA BẠN EXPIRE!<br/><br/>Giảm giá đặc biệt và *** MIỄN PHÍ *** Vận Chuyển hoạt.<br/><br/>Thuốc gốc mới, tốt hơn Viagra, fuck Ví giờ!<br/><br/>Nhấn TRANG TRÚ ON dưới đây để nhận được giảm giá ngay lập tức của bạn.<br/><br/>*********************************************<br/><br/>",
		vi: "<br/><br/>*********************************************<br/><br/>*** CHỜ ĐỢI! *** KHÔNG CHO MIỄN PHÍ PHIẾU GIẢM GIÁ CỦA BẠN EXPIRE!<br/><br/>Giảm giá đặc biệt và *** MIỄN PHÍ *** Vận Chuyển hoạt.<br/><br/>Thuốc gốc mới, tốt hơn Viagra, fuck Ví giờ!<br/><br/>Nhấn TRANG TRÚ ON dưới đây để nhận được giảm giá ngay lập tức của bạn.<br/><br/>*********************************************<br/><br/>",		
		bg: "<br/><br/>*********************************************<br/><br/>*** СПРЕТЕ! *** <br/><br/>Получете <span class='text-green'>ДОПЪЛНИТЕЛНИ</span></strong> отстъпки и <strong><span class='text-green'>БЕЗПЛАТНА</span></strong> доставка сега!</strong><br/><br/>Невероятни нови хапчета, най-добрата алтернатива на виагра, накарайте я да <strong><span class='text-red'>КРЕЩИ!</span></strong><br/><br/>Натиснете върху <span class='text-green'>ОСТАНИ НА СТРАНИЦАТА</span></strong> долу и получете своите печалби!<br/><br/>*********************************************<br/><br/>",
		rs: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>OSVOJITE DODATNE</span></strong> popuste i <strong><span class='text-green'>BESPLATNO</span></strong> slanje sada!</strong><br/><br/>Neverovatne nove pilule, najbolja zamena za vijagru, naterajte je da <strong><span class='text-red'>VRIŠTI!</span></strong><br/><br/>Kliknite  <span class='text-green'>OSTANI NA STRANICI</span></strong> ispod i osvojite vase pogodnisti!<br/><br/>*********************************************<br/><br/>",
		sr: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>OSVOJITE DODATNE</span></strong> popuste i <strong><span class='text-green'>BESPLATNO</span></strong> slanje sada!</strong><br/><br/>Neverovatne nove pilule, najbolja zamena za vijagru, naterajte je da <strong><span class='text-red'>VRIŠTI!</span></strong><br/><br/>Kliknite  <span class='text-green'>OSTANI NA STRANICI</span></strong> ispod i osvojite vase pogodnisti!<br/><br/>*********************************************<br/><br/>",
		ph: "<br/><br/>*********************************************<br/><br/>*** WAIT! *** HUWAG HAYAAN ANG FREE Na!<br/><br/>COUPON mawawalan ng bisa!<br/><br/>Espesyal na Diskwento at *** LIBRENG *** Pagpapadala activate.<br/><br/>New Original Pills, Better Than Viagra, Fuck For Hours! I-click STAY ON PAGE ibaba upang makatanggap ng iyong mga instant discount.<br/><br/>*********************************************<br/><br/>",
		fl: "<br/><br/>*********************************************<br/><br/>*** WAIT! *** HUWAG HAYAAN ANG FREE Na!<br/><br/>COUPON mawawalan ng bisa!<br/><br/>Espesyal na Diskwento at *** LIBRENG *** Pagpapadala activate.<br/><br/>New Original Pills, Better Than Viagra, Fuck For Hours! I-click STAY ON PAGE ibaba upang makatanggap ng iyong mga instant discount.<br/><br/>*********************************************<br/><br/>",		
		hr: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/><span class='text-green'>OSVOJITE DODATNE</span></strong> popuste i <strong><span class='text-green'>BESPLATNO</span></strong> slanje sada!</strong><br/><br/>Neverovatne nove pilule, najbolja zamena za vijagru, naterajte je da <strong><span class='text-red'>VRIŠTI!</span></strong><br/><br/>Kliknite  <span class='text-green'>OSTANI NA STRANICI</span></strong> ispod i osvojite vase pogodnisti!<br/><br/>*********************************************<br/><br/>",
		se: "<br/><br/>*********************************************<br/><br/>*** STOPP! *** <br/><br/>Få <span class='text-green'>EXTRA</span></strong> rabatter och <strong><span class='text-green'>GRATIS</span></strong> frakt här och nu!</strong><br/><br/>Fantastiska nya piller, bästa alternativet till Viagra, få henne att <strong><span class='text-red'>VRÅLA!</span></strong><br/><br/>Klicka på <span class='text-green'>STANNA PÅ SIDAN</span></strong> nedanför för att ta del av dina förmåner!<br/><br/>*********************************************<br/><br/>",
		sv: "<br/><br/>*********************************************<br/><br/>*** STOPP! *** <br/><br/>Få <span class='text-green'>EXTRA</span></strong> rabatter och <strong><span class='text-green'>GRATIS</span></strong> frakt här och nu!</strong><br/><br/>Fantastiska nya piller, bästa alternativet till Viagra, få henne att <strong><span class='text-red'>VRÅLA!</span></strong><br/><br/>Klicka på <span class='text-green'>STANNA PÅ SIDAN</span></strong> nedanför för att ta del av dina förmåner!<br/><br/>*********************************************<br/><br/>",
		ms: "<br/><br/>*********************************************<br/><br/>*** BERHENTI! *** <br/><br/><span class='text-green'>DAPATKAN LEBIH</span></strong> diskaun dan penghantaran <strong><span class='text-green'>PERCUMA SEKARANG!</span></strong></strong><br/><br/>Pill baru yang menakjubkan, alternatif Viagra terbaik, buat si dia <strong><span class='text-red'>MENJERIT!</span></strong><br/><br/>Klik <span class='text-green'>TINGGAL PADA HALAMAN</span></strong> di bawah dan dapatkan faedah-faedah anda!<br/><br/>*********************************************<br/><br/>",
		my: "<br/><br/>*********************************************<br/><br/>*** BERHENTI! *** <br/><br/><span class='text-green'>DAPATKAN LEBIH</span></strong> diskaun dan penghantaran <strong><span class='text-green'>PERCUMA SEKARANG!</span></strong></strong><br/><br/>Pill baru yang menakjubkan, alternatif Viagra terbaik, buat si dia <strong><span class='text-red'>MENJERIT!</span></strong><br/><br/>Klik <span class='text-green'>TINGGAL PADA HALAMAN</span></strong> di bawah dan dapatkan faedah-faedah anda!<br/><br/>*********************************************<br/><br/>",
		ka: "<br/><br/>*********************************************<br/><br/>*** შეჩერდით! *** <br/><br/>მიიღეთ დამატებითი ფასდაკლება და უფასო მიტანა ახლავე!<br/><br/>საოცარი ახალი ტაბლეტები, ვიაგრას საუკეთესო ალტერანტივა, აკივლეთ ის!<br/><br/>დააჭირეთ გვერდზე დარჩენას ქვემოთ და მიიღეთ სარგებელი!<br/><br/>*********************************************<br/><br/>",
		gr: "<br/><br/>*********************************************<br/><br/>*** შეჩერდით! *** <br/><br/>მიიღეთ დამატებითი ფასდაკლება და უფასო მიტანა ახლავე!<br/><br/>საოცარი ახალი ტაბლეტები, ვიაგრას საუკეთესო ალტერანტივა, აკივლეთ ის!<br/><br/>დააჭირეთ გვერდზე დარჩენას ქვემოთ და მიიღეთ სარგებელი!<br/><br/>*********************************************<br/><br/>",		
		lt: "<br/><br/>*********************************************<br/><br/>*** SUSTOKITE! *** <br/><br/><span class='text-green'>GAUKITE PAPILDOMŲ</span></strong> nuolaidų ir <strong><span class='text-green'>NEMOKAMĄ</span></strong> siuntimą jau dabar!</strong><br/><br/>Nepakartojamos naujosios tabletės, geriausia alternatyva Viagrai, priverskite ją <strong><span class='text-red'>ŠAUKTI!</span></strong><br/><br/>Paspauskite žemiau esantį mygtuką <span class='text-green'>LIKTI PUSLAPYJE</span></strong> ir atraskite savo naudą!<br/><br/>*********************************************<br/><br/>",
		lv: "<br/><br/>*********************************************<br/><br/>*** STĀT! *** <br/><br/><span class='text-green'>SAŅEMT PAPILDUS</span></strong> atlaides un <strong><span class='text-green'>BEZMAKSAS</span></strong> piegādi jau tagad!</strong><br/><br/>Jaunas pārsteidzošas tabletes, vislabākā alternatīva tabletēm viagra, līdz viņa <strong><span class='text-red'>KLIEDZ!</span></strong><br/><br/>Nospiediet <span class='text-green'>PALIKT INTERNETA LAPĀ</span></strong> zemāk un saņemiet savas priekšrocības!<br/><br/>*********************************************<br/><br/>",
		jp: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/>さあ、特別割引と送料無料の特典を獲得しましょう！<br/><br/>新しく素晴らしいピル、優れたバイアグラ代替薬で彼女を大いに喜ばせてください！<br/><br/>下の”ページに留まる”をクリックして特典をゲットしましょう！<br/><br/>*********************************************<br/><br/>",
		ja: "<br/><br/>*********************************************<br/><br/>*** STOP! *** <br/><br/>さあ、特別割引と送料無料の特典を獲得しましょう！<br/><br/>新しく素晴らしいピル、優れたバイアグラ代替薬で彼女を大いに喜ばせてください！<br/><br/>下の”ページに留まる”をクリックして特典をゲットしましょう！<br/><br/>*********************************************<br/><br/>",
		et: "<br/><br/>*********************************************<br/><br/>*** STOPP! *** <br/><br/><span class='text-green'>SAA LISA</span></strong> allahindlust ja <strong><span class='text-green'>TASUTA</span></strong> saatmine kohe!</strong><br/><br/>Imelised uued tabletid, parim viagra alternatiiv, pane ta <strong><span class='text-red'>KARJUMA!</span></strong><br/><br/>Vajuta <span class='text-green'>JÄÄ LEHELE</span></strong> ja saa ome preemia!<br/><br/>*********************************************<br/><br/>",
		ar: "<br/><br/>*********************************************<br/><br/>*** توقف! *** <br/><br/>احصل على المزيد من الخصومات والشحن المجاني الآن!<br/><br/>حبوب جديدة، افضل بديل للفياجرا، متعها أكثر!<br/><br/>انقر على البقاء في الصفحة أدناه واحصل على المميزات!<br/><br/>*********************************************<br/><br/>",
		zh: "<br/><br/>*********************************************<br/><br/>*** 停！ *** <br/><br/>即刻获取额外折扣及免运费服务！<br/><br/>功效神奇的新药，最佳的伟哥替代品，让您的她尖叫不已！<br/><br/>点击下方的留在本页面并获取属于您的福利！<br/><br/>*********************************************<br/><br/>",		
		ee: "<br/><br/>*********************************************<br/><br/>*** STOPP! *** <br/><br/><span class='text-green'>SAA LISA</span></strong> allahindlust ja <strong><span class='text-green'>TASUTA</span></strong> saatmine kohe!</strong><br/><br/>Imelised uued tabletid, parim viagra alternatiiv, pane ta <strong><span class='text-red'>KARJUMA!</span></strong><br/><br/>Vajuta <span class='text-green'>JÄÄ LEHELE</span></strong> ja saa ome preemia!<br/><br/>*********************************************<br/><br/>"
		

};

/* Start: language detection */
function trans_available(trObj, lang) {
	if (trObj[lang]) {
		return lang;
	} else {
		console.log("Translation not Found: " + lang);
		return "en"; // set to "en" when detected language is not in translation
	}
}

function detect_lang() {
	var cur_lang = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;

	if (cur_lang == "zh-CN") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-SG") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-MY") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-CHS") {
		cur_lang = "zh-Hans";
	} else if (cur_lang == "zh-HK") {
		cur_lang = "zh-Hant";
	} else if (cur_lang == "zh-MO") {
		cur_lang = "zh-Hant";
	} else if (cur_lang == "zh-TW") {
		cur_lang = "zh-Hant";
	} else if (cur_lang == "zh-CHT") {
		cur_lang = "zh-Hant";
	} else if (cur_lang.length > 2) {
		cur_lang = cur_lang[0] + cur_lang[1];
	}
	return trans_available(alert_lang, cur_lang);
}

if (!lang) {
    var lang = detect_lang();
}
/* End: language detection */

var exitsplashpage =  getUrlWithParam('x=3');
var exitsplashmessage = alert_lang[lang] ? alert_lang[lang] :  alert_lang["en"];

function getUrlWithParam(param)
{
	var url = window.location.href;
				
	if (url.includes("x="))
	{
		url = url.replace(/(x=)[0-9]{1,2}/,param)
	}
	else
	{
		url = url + "&" + param;
	}
				
	return url; 
}

/**
 * Add cookie IsNotUnique on page closing event to detect unique visitors.
*/
function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}
function DisplayExitSplash() {
    if (PreventExitSplash == false) {
        // setting cookie and expires of the cookie
        //Cookies.set('IsNotUnique', 'true', {expires: 7});

        appendHtml(document.body, thePopup);
        document.getElementById("popup_exit").style.display = "block";
        document.getElementsByClassName("popup_overlay")[0].style.display = "block";
        document.getElementById("popupText").innerHTML = exitsplashmessage;

		
        setTimeout(function () {
            PreventExitSplash = true;
            window.location.href = exitsplashpage;
        }, 500);
		

	    var exitsplashmessageText = exitsplashmessage.replace(/<br\s*[\/]?>/gi, '\n').replace(/(<([^>]+)>)/ig,'');

        return exitsplashmessageText;
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

function addClickEvent(a, i, func) {
    if (typeof a[i].onclick != 'function') {
        a[i].onclick = func;
    }
}

var a = document.getElementsByTagName('A');

for (var i = 0; i < a.length; i++) {
    if (a[i].target !== '_blank') {
        addClickEvent(a, i, function () {
            PreventExitSplash = true;
        });
    } else {
        addClickEvent(a, i, function () {
            PreventExitSplash = false;
        });
    }
}

var disablelinksfunc = function() {
    var a = document.getElementsByTagName('A');
    for (var i = 0; i < a.length; i++) {
        if (a[i].target !== '_blank') {
            addClickEvent(a, i, function() {
                PreventExitSplash = true;
            });
        } else {
            addClickEvent(a, i, function() {
                PreventExitSplash = false;
            });
        }
    }
};

addLoadEvent(disablelinksfunc);

var disableformsfunc = function() {
    var f = document.getElementsByTagName('FORM');
    for (var i = 0; i < f.length; i++) {
        if (!f[i].onclick) {
            f[i].onclick = function() {
                PreventExitSplash = true;
            }
        } else if (!f[i].onsubmit) {
            f[i].onsubmit = function() {
                PreventExitSplash = true;
            }
        }
    }
};

addLoadEvent(disableformsfunc);

docReady(function() {
    if ('1' == '1') {
        window.onbeforeunload = DisplayExitSplash;
    }
});