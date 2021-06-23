(function() {
    const checkItems = document.querySelectorAll('input[type="checkbox"]');
    let lastChecked = null;
    // 플래그 변수 초기화
    let inBetween = false;

    const checkText = function(checkbox) {
        const todo = checkbox.nextElementSibling;
        todo.classList.toggle('active');
    }

    const handleCheck = function(e) {
        const self = this;
        if(e.shiftKey && this.checked) {
            checkItems.forEach(function(checkItem) {
                if(checkItem === self || checkItem === lastChecked) {
                    // 플래그 활성화/비활성화
                    // 일정 조건에 플래그를 활성화/비활성화함
                    inBetween = !inBetween;
                }

                if(inBetween) {
                    // 플래그 함수로 분기할 작업영역
                    if(!checkItem.checked) {
                        checkItem.checked = true;
                        checkText(checkItem);
                    }
                }
            });
        }
        lastChecked = this;
    }

    const init = function() {
        checkItems.forEach(function(item) {
            item.addEventListener('change', function(e) {
                checkText(this);
            });
            item.addEventListener('click', handleCheck);
        });
    };

    init();
})();