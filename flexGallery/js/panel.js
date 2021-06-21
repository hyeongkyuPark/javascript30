(function() {
    const panels = document.querySelectorAll('.panel');
    
    const toggleOpen = function(e) {
        this.classList.toggle('open');
    }
    
    const init = function() {
        panels.forEach(function(panel) {
            panel.addEventListener('click', toggleOpen);
        });
    }

    init();
})();