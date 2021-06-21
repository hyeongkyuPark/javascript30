(function() {
    const inputs = document.querySelectorAll('.controller input');
    
    function handleUpdate() {
        // dataset으로 data- 속성 가져오기
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
        console.log(document.documentElement.style.getPropertyValue('--base'));
    }
    
    const init = function(){
        // 인풋 변경식 발생하는 이벤트
        inputs.forEach(function(input) {
            input.addEventListener('change', handleUpdate);
        });
        // 요소위에서 마우스가 움직일대 발생하는 이벤트
        inputs.forEach(function(input) {
            input.addEventListener('mousemove', handleUpdate);
        });
    
    }
    
    init();
})();
