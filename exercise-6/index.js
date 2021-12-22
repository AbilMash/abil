addInfo = () => {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    while (true) {
        let newLi = prompt("Введите текст для пункта списка", "Abil");

        if (newLi === null || newLi === 0) {
            break;
        }

        let li = document.createElement('li');
        li.appendChild(document.createTextNode(newLi));
        ul.appendChild(li);
    }
}