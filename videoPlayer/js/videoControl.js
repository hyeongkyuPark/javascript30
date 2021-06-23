(function() {
    const player = document.querySelector('.player');
    const video = player.querySelector('.video');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress-bar');
    const playButton = player.querySelector('.play-button');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.range-input');
    
    const togglePlay = function() {
        if(video.paused) {
            // 비디오 재생
            video.play();
        } else {
            // 비디오 정지
            video.pause();
        }
    }
    
    const updateButon = function() {
        const icon = this.paused ? '▶' : '⏸'
    
        playButton.innerHTML = icon;
    }
    
    const skip = function() {
        video.currentTime += parseFloat(this.dataset.skip);
    }
    
    const handleRangeUpdate = function(e) {
        // volume : 소리 크기
        // playbackRate : 재생 속도
        video[this.name] = this.value;
    }
    
    const handleProgress = function() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${percent}%`;
    }
    
    const scrub = function(e) {
        const percent = (e.offsetX / progress.offsetWidth) * video.duration;
        
        video.currentTime = percent;
    }
    
    const init = function() {
        video.addEventListener('play', updateButon);
        video.addEventListener('pause', updateButon);
        video.addEventListener('click', togglePlay);
        video.addEventListener('timeupdate', handleProgress);
        playButton.addEventListener('click', togglePlay);
        skipButtons.forEach(function(button) {
            button.addEventListener('click', skip);
        });
        ranges.forEach(function(range) {
            range.addEventListener('change', handleRangeUpdate)
            range.addEventListener('mousemove', handleRangeUpdate)
        })
        let mousedown = false;
        progress.addEventListener('click', scrub);
        progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
        progress.addEventListener('mousedown', () => mousedown = true);
        progress.addEventListener('mouseup', () => mousedown = false);
    }

    init();
    
})();
