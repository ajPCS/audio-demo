
    var bg = document.getElementById('bg');

    function playAudio() {
        bg.play();
    }

    function pauseAudio(){
        bg.pause();
    }

    function stopAudio() {
        bg.pause();
        bg.currentTime = 0;
    }

    function changeRate(){
        var rate = (event.clientY / window.innerHeight) * 4.75 + 0.25;
        bg.playbackRate = rate;
    }

    function changeVol(){
        var vol = event.clientY / window.innerHeight;
        bg.volume = vol;
    }

    function changeTime(){
        var time = (event.clientY / window.innerHeight) * bg.duration;
        bg.currentTime = time;
    }

    function updateRate(){
        document.getElementById('rateVal').innerHTML = bg.playbackRate;

        var blueVal = parseInt(bg.playbackRate * 51);
        document.getElementById('rateDiv').style.backgroundColor = "rgb(255, 0, " + blueVal + ", 0.275)";
    }

    function updateVol(){
        document.getElementById('volVal').innerHTML = bg.volume;

        var redVal = parseInt(bg.volume * 255);
        document.getElementById('volDiv').style.backgroundColor = "rgb(" + redVal + ", 255, 0, 0.275)";
    }

    function updateTime(){

        document.getElementById('timeVal').innerHTML = bg.currentTime;

        var greenVal = parseInt(bg.currentTime / bg.duration * 255);
        document.getElementById('timeDiv').style.backgroundColor = "rgb(0, " + greenVal + ", 255, 0.275)";

        var leftVal = (bg.currentTime / bg.duration) * window.innerWidth;

        document.getElementById('pb-time').style.left = leftVal + "px";
    }
