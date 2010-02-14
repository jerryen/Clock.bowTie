function playerUpdate() {
	showClock();
	updatePos();
}

function trackUpdate(track) {
	var title = track.property('title');
	var artist = track.property('artist');
	var album = track.property('album');
	if (title != undefined) {
		$('#info').fadeOut(250, function() {
			$('#title').html(title);
			$('#artist').html(artist + (album ? ' / ' + album : '') || "&nbsp;");
			$('#info').fadeIn(250);
		});
	} else {
		$('#info').fadeOut(250, function() {
			$('#title').html('is playing');
			$('#artist').html('Nothing');
			$('#info').fadeIn(250);
		});
	};
}






function updatePos() {
	Bowtie.setFrame(0, 0, screen.width, 39);
}

function fadeIn(id) {
	$("#" + id).css("opacity", 1);
}
function fadeOut(id) {
	$("#" + id).css("opacity", .2);
}
function showClock() {
	var time = new Date();
	time = time.toLocaleTimeString();
	$("#ampm").attr("src", (/ AM /.test(time) ? "am" : "pm") + ".png");
	if(time[2] == ":") {
		fadeIn("v11");
		fadeIn("v12");
		showNum(time[1], "hour");
		showNum(time[3], "ten");
		showNum(time[4], "one");
	} else {
		fadeOut("v11");
		fadeOut("v12");
		showNum(time[0], "hour");
		showNum(time[2], "ten");
		showNum(time[3], "one");
	}
}
function showNum(num, pos) {
	num = parseInt(num);
	pos = pos == "hour" ? 2 : pos == "ten" ? 4 : 6;
	var hPos = pos / 2;
	switch(num) {
		case 1:
			fadeOut("v" + pos + "1");
			fadeOut("v" + pos + "2");
			pos++;
			fadeIn("v" + pos + "1");
			fadeIn("v" + pos + "2");
			fadeOut("h" + hPos + "1");
			fadeOut("h" + hPos + "2");
			fadeOut("h" + hPos + "3");
			break;
		case 2:
			fadeOut("v" + pos + "1");
			fadeIn("v" + pos + "2");
			pos++;
			fadeIn("v" + pos + "1");
			fadeOut("v" + pos + "2");
			fadeIn("h" + hPos + "1");
			fadeIn("h" + hPos + "2");
			fadeIn("h" + hPos + "3");
			break;
		case 3:
			fadeOut("v" + pos + "1");
			fadeOut("v" + pos + "2");
			pos++;
			fadeIn("v" + pos + "1");
			fadeIn("v" + pos + "2");
			fadeIn("h" + hPos + "1");
			fadeIn("h" + hPos + "2");
			fadeIn("h" + hPos + "3");
			break;
		case 4:
			fadeIn("v" + pos + "1");
			fadeOut("v" + pos + "2");
			pos++;
			fadeIn("v" + pos + "1");
			fadeIn("v" + pos + "2");
			fadeOut("h" + hPos + "1");
			fadeIn("h" + hPos + "2");
			fadeOut("h" + hPos + "3");
			break;
		case 5:
			fadeIn("v" + pos + "1");
			fadeOut("v" + pos + "2");
			pos++;
			fadeOut("v" + pos + "1");
			fadeIn("v" + pos + "2");
			fadeIn("h" + hPos + "1");
			fadeIn("h" + hPos + "2");
			fadeIn("h" + hPos + "3");
			break;
		case 6:
			fadeIn("v" + pos + "1");
			fadeIn("v" + pos + "2");
			pos++;
			fadeOut("v" + pos + "1");
			fadeIn("v" + pos + "2");
			fadeIn("h" + hPos + "1");
			fadeIn("h" + hPos + "2");
			fadeIn("h" + hPos + "3");
			break;
		case 7:
			fadeOut("v" + pos + "1");
			fadeOut("v" + pos + "2");
			pos++;
			fadeIn("v" + pos + "1");
			fadeIn("v" + pos + "2");
			fadeIn("h" + hPos + "1");
			fadeOut("h" + hPos + "2");
			fadeOut("h" + hPos + "3");
			break;
		case 8:
			fadeIn("v" + pos + "1");
			fadeIn("v" + pos + "2");
			pos++;
			fadeIn("v" + pos + "1");
			fadeIn("v" + pos + "2");
			fadeIn("h" + hPos + "1");
			fadeIn("h" + hPos + "2");
			fadeIn("h" + hPos + "3");
			break;
		case 9:
			fadeIn("v" + pos + "1");
			fadeOut("v" + pos + "2");
			pos++;
			fadeIn("v" + pos + "1");
			fadeIn("v" + pos + "2");
			fadeIn("h" + hPos + "1");
			fadeIn("h" + hPos + "2");
			fadeOut("h" + hPos + "3");
			break;
		case 0:
			fadeIn("v" + pos + "1");
			fadeIn("v" + pos + "2");
			pos++;
			fadeIn("v" + pos + "1");
			fadeIn("v" + pos + "2");
			fadeIn("h" + hPos + "1");
			fadeOut("h" + hPos + "2");
			fadeIn("h" + hPos + "3");
			break;
	}
}
