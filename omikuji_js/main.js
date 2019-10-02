var button = document.getElementById("button1");
button.onclick = function() {
    Element = document.getElementById("input");
    var P = document.createElement('p');
    var Div = document.getElementById("div");
    P.innerHTML = Element.value;
    Div.appendChild(P);
};
