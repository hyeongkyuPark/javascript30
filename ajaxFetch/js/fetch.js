(function() {
    const searchInput = document.querySelector('.search-input');
    const searchList = document.querySelector('.search-list');
    const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const cities = [];
    
    fetch(url).then(json => json.json()).then(data => cities.push(...data));
    
    const numberWithCommas = function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    const searchChange = function(text, cities) {
        const regex = new RegExp(text, 'gi');
        return cities.filter(place => place.city.match(regex) || place.state.match(regex));
    }
    
    const viewChange = function(e) {
        const searchs = searchChange(this.value, cities);
        const self = this;
        const html = searchs.map(function(place) {
            const regex = new RegExp(self.value, 'gi');
            const cityName = place.city.replace(regex, `<span class="hl">${self.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="hl">${self.value}</span>`);
            
            return `
            <li class="search-item">
                <span>${cityName},${stateName}</span>
                <span>${numberWithCommas(place.population)}</span>
            </li>
            `;
        }).join('');
    
        searchList.innerHTML = html;
    }
    
    const init = function() {
        searchInput.addEventListener('change', viewChange);
        searchInput.addEventListener('keyup', viewChange);
    }
    
    init();
})();

