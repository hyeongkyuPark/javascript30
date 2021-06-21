 (function() {
    const drumItems = document.querySelectorAll('.drum-item');

    const audioPlay = function(audioElem) {
        audioElem.currentTime = 0; // audio 재생시간 0으로 되돌리기
        audioElem.play();
    }
    
    const drumActive = function(drumElem) {
        drumElem.classList.add('active');
    }

    const drumActiveRemove = function(drumElem) {
        drumElem.classList.remove('active');
    };

    const keydownHandler = function(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const drumItem = document.querySelector(`.drum-item[data-key="${e.keyCode}"]`);

        if(audio) {
            audioPlay(audio);
            drumActive(drumItem);
        }
    }

    const transitionendHandler = function(e) {
        drumActiveRemove(this);
    }

    const init = function() {
        // kyedown event : 키보드를 눌렀을때 발생하는 이벤트
        window.addEventListener('keydown', keydownHandler);

        // transition이 끝날때 발생하는 이벤트
        drumItems.forEach(function(item) {
            item.addEventListener('transitionend', transitionendHandler);
        });
    };

    init();
 })();