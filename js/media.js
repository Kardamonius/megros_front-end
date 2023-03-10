var supportsVideo = !!document.createElement('video').canPlayType;
if (supportsVideo) {
	//var videoContainer = document.getElementById('videoContainer');
	//var video = document.getElementById('video');
	//var videoControls = document.getElementById('video-controls');

	//video.controls = false;
	//videoControls.style.display = 'block';
	//var mute = document.getElementById('mute')

	//playpause.addEventListener('click', function (e) {
	//	if (video.paused || video.ended) video.play();
	//	else video.pause();
	//});

	//mute.addEventListener('click', function (e) {
	//	video.muted = !video.muted;
	//});
	document.querySelector('#play-pause').onclick = playPause;
	let video;
	video = document.querySelector('#video');
	function playPause() {
		if (video.paused || video.ended) video.play();
		else video.pause();
	};
}