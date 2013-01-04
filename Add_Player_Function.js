jQuery.fn.addVideo = function(source,thumb,auto){
  var s = "";
  var t = "";
	var a = "";
	if (auto == true) {
		a = 'autoplay="autoplay"';
	}else{
		a = "";
	}
	if (thumb !== "") {
		t = 'poster="'+thumb+'"';
	}else{
		t = "";
    }
	if (source !== "") {
		s = source;
	}else{
		s = "";
	}
	$(this).append('<video class="screen" id="video"' + t + 'autobuffer preload="auto" controls="controls">\
    <source src="' + s + '.mp4" type="video/mp4">\
    <source src="' + s + '.ogg" type="video/ogg">\
	<source src="' + s + '.webm" type="type="video/webm">\
	<object data="' + s + '"></object>\
  </video>\
  ');
