//js format
String.prototype.format=function(){
  if(arguments.length==0) return this;
  for(var s=this, i=0; i<arguments.length; i++)
    s=s.replace(new RegExp("\\{"+i+"\\}","g"), arguments[i]);
  return s;
};


function gethost(){
	var href = window.location.href;

	var posi = href.indexOf('danye');
	
	return href.substr(0, posi);
}


function appendcomment(){
	var template = '<li style="opacity: 0.8;" class="comment">' 
        + '<img src="{0}" class="picture">'
        + '<div class="plun">' 
         + '<h2>{1}</h2>'
         + '<span><a href="javascript:void(0)" class="ipt i-g">15秒前</a></span><div>{2}</div>'
         + '</div></li>';

	var host = gethost();

	$.getJSON(host + '/comment.php', function(result){
		$.each(result, function(key, value){
			var tmp = template;
			tmp = tmp.format(value['HeadPic'], value['UserName'], value['Content']);
			$('#rcslider').append(tmp);
		})
	});
	

}

appendcomment();