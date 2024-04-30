let colorEl = document.getElementById('color');
let btnEl = document.getElementById('btn');

btnEl.addEventListener('click', () => {
    let hexCode = '#'
    for(let i=1;i<=3; i++) {
        let code = Math.floor(Math.random() * 256);
        hexCode += code.toString(16).padStart(2, '0');
    }
    colorEl.textContent = hexCode;
    document.body.style.backgroundColor = hexCode;
});