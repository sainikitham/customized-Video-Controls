window.onload = function()
{
  var minutes = parseInt(document.getElementById("my_video").duration / 60, 10);
  var seconds = Math.floor(document.getElementById("my_video").duration % 60);
  document.getElementById("totduration").innerHTML = minutes + ":" + seconds;
  setInterval(function (){
    var minutes = parseInt(document.getElementById("my_video").currentTime / 60, 10);
    var seconds = Math.floor(document.getElementById("my_video").currentTime % 60);
    document.getElementById("crntduration").innerHTML = minutes + ":" + seconds;
  },60);
  document.getElementById('my_video').onmouseover = function()
  {
    document.getElementById('video_control_bar').style.opacity = "0.8";
  }
  document.getElementById('video_control_bar').onmouseover = function()
  {
    document.getElementById('video_control_bar').style.opacity = "0.8";
  }
  document.getElementById('my_video').onmouseout = function()
  {
    document.getElementById('video_control_bar').style.opacity = "0";
  }
}
function playpause(btn,atr)
{
  var vid = document.getElementById('my_video');
  if (vid.paused) {
    vid.play();
    btn.className = "fa fa-pause";

  }
  else {
    vid.pause();
    btn.className = "fa fa-play";
  }
}
function seekup()
{
  var vid = document.getElementById("my_video");
  var seekslider = document.getElementById("seekslider");
  var seekto = vid.duration * (seekslider.value / 100);
  vid.currentTime = seekto;
}
function seektime() {
  var vid = document.getElementById("my_video");
  var seekslider = document.getElementById("seekslider");
  seekslider.value = vid.currentTime * (100/vid.duration);
}
function volumechange()
{
  var vid = document.getElementById("my_video");
  var vol = document.getElementById('volume');
  if(vid.muted){
		vid.muted = false;
		vol.className = "fa fa-volume-up";
    document.getElementById("seeksliderv").value = "100";
	} else {
		vid.muted = true;
		vol.className = "fa fa-volume-off";
    document.getElementById("seeksliderv").value = "0";
	}

}
function slidervolume()
{
  var vid = document.getElementById("my_video");
  vid.volume = document.getElementById("seeksliderv").value / 100;
}
function changescreen() {
  var vid = document.getElementById("my_video");
  if (vid.requestFullscreen) {
      vid.requestFullscreen();
    } else if (vid.mozRequestFullScreen) {
      vid.mozRequestFullScreen();
    } else if (vid.webkitRequestFullscreen) {
      vid.webkitRequestFullscreen();
    }
}
