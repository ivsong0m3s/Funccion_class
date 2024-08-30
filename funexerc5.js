const body = document.querySelector(`body`);
body.style.height = `100vh`;
body.style.overflow = `hidden`
body.style.backgroundColor = `black`;
body.style.display = `flex`;
body.style.justifyContent = `center`;
body.style.alignItems = `center`;

const div2 = document.createElement(`div`);
div2.style.width = `200px`;
div2.style.height = `200px`;
div2.style.display = `flex`;
div2.style.justifyContent = `center`;
div2.style.alignItems = `center`;
div2.style.backgroundColor = `gray`;
body.appendChild(div2);

const div = document.createElement(`div`);
div.style.width = `100px`;
div.style.height = `100px`;
div.style.display = `flex`;
div.style.justifyContent = `center`;
div.style.alignItems = `center`;
div.style.flexDirection = `column`
div.style.backgroundColor = `white`;
div2.appendChild(div);

const textoDiv = document.createElement(`h3`);
textoDiv.textContent = `Olá mundo`;
div.appendChild(textoDiv);

const bt = document.createElement(`button`);
bt.textContent = `Clica em mim`;
div.appendChild(bt);
bt.addEventListener(`click`, function () {
    body.style.backgroundColor = `green`;
    body.style.transition = `2s`;
   
    div.style.backgroundColor = `blue`;
    div.style.borderRadius = `50%`;
    div.style.transition = `1.5s`;
    div.style.scale = `1.5`;
    div.style.rotate = `-45deg`;

    div2.style.scale = `2`;
    div2.style.rotate = `45deg`;
    div2.style.transition = `1.5s`;
    div2.style.backgroundColor = `yellow`;
})