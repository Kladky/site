let colors = [
    'D60068',
    'CA00FF',
    '469B8B',
    '2F66B9',
    'D5552F'
]

let allLinks = document.getElementsByTagName('a');

let setColor = () => {
    console.log("setting");
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].setAttribute('style', `color: #${randomColor}`);
    }
}

setColor();

window.setInterval(setColor, 8000);
