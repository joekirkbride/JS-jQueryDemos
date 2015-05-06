// track if mouse over ryu
var isHovered = false;

// on document ready
$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		isHovered = true;
		// alert('mouse enter ryu div');
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		isHovered = false;	
	})
	.mousedown(function() {
		playHoudoken();
		$('.ryu-throwing').show();
		$('.ryu-ready').hide();
		// $('.ryu-still').hide();
		$('.hadouken').finish().show().animate(
			{'left': '8.75rem'}, 280,
			function() {
				$(this).hide();
				$(this).css('left', '-10rem');
			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// $('.ryu-still').hide();
		// $('.hadouken').hide();
	});
});
$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			playPose();
			$('.ryu-cool').show();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
		}
	}).keyup(function(e) {
		if (e.keyCode == 88) {
			$('#pose-sound')[0].pause();
			$('#pose-sound')[0].load();			
			$('.ryu-cool').hide();
			// $('.ryu-still').show();
			if (isHovered == true) {
				$('.ryu-ready').show();
			}
			else {
				$('.ryu-still').show();
			}
		}
	});
function playHoudoken() {
	$('#hadouken-sound')[0].volume = 0.2;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
var playSound = false;
function playPose() {
	playSound = !playSound;
	if (playSound) {
		$('#pose-sound')[0].volume = 0.2;
		// $('#pose-sound')[0].load();
		$('#pose-sound')[0].play();
	}
}