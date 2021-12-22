remove = () => {
    let textnode = document.createTextNode("Canned Fish x4");
    let things = document.getElementById("cart-items");

    things.children[1].remove();
    things.replaceChild(textnode, things.lastChild);
}

remove()