(function() {
    const secondHand = document.querySelector('.hand.sec');
    const minHand = document.querySelector('.hand.min');
    const hourHand = document.querySelector('.hand.hour');
    
    const getDegrees = function(time, count) {
        return ((time / count) * 360) + 90;
    }
    
    const setDate = function() {
        const data = new Date();
        
        const seconds = data.getSeconds();
        const secondsDegrees = getDegrees(seconds, 60);
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
        const min = data.getMinutes();
        const minDegrees = getDegrees(min, 60);
        minHand.style.transform = `rotate(${minDegrees}deg)`;
    
        const hour = data.getHours();
        const hourDegrees = getDegrees(hour, 12);
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
    
    const init = function() {
        setDate();
        setInterval(setDate, 1000);
    }

    init();
})();

