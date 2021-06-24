(function () {
    const addItems = document.querySelector('.add-item');
    const itemsList = document.querySelector('.plates');
    const items = JSON.parse(localStorage.getItem('items')) || [];

    const populateList = function (plates = [], platesList) {
        platesList.innerHTML = plates.map(function (plate, i) {
            return `
                <li>
                    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : null} />
                    <label for="item${i}">${plate.text}</label>    
                </li>
            `;
        }).join('');
    }

    const addItem = function (e) {
        // 기본 이벤트 발생을 막음(submit의 경우 서버 전송을 막음)
        e.preventDefault();

        const text = (this.querySelector('[name="item"]')).value;
        const item = {
            text,
            done: false,
        }
        items.push(item);
        populateList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
        this.reset();
    }

    const toggleDone = function (e) {
        if (!e.target.matches('input')) return; // input가 아니면 미작동 (델리게이션, 이벤트 위임)
        const el = e.target;
        const index = el.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    }

    const init = function () {
        populateList(items, itemsList);
        addItems.addEventListener('submit', addItem);
        itemsList.addEventListener('click', toggleDone);
    };

    init();
})();
