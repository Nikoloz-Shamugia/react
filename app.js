const body = document.getElementById('body');
const blueDiv = document.createElement('div');
const whiteDiv = document.createElement('div');
blueDiv.style.backgroundColor = 'rgb(7, 7, 84)';
blueDiv.style.display = 'grid';
blueDiv.style.placeItems = 'center';
blueDiv.style.padding = '50px 100px'
whiteDiv.style.height = '350px';
whiteDiv.style.backgroundColor = 'white';
body.appendChild(blueDiv);
body.appendChild(whiteDiv);
blueDiv.innerHTML = `
    <p class='welcome-message'>welcome</p>
    <h1 class='welcome-message'>Selling on the internet like a pro</h1>
    <p class='welcome-message'>we know how large objects will act, but things on a small scale do not act that way</p>
    <div>
        <button class ='buttons'>Get Quote Now</button>
        <button class ='buttons'>Learn More</button>
    </div>
    <div class = 'info-wrapper'>
        <div class = 'info'>
            <img class = 'image' src="check.png" alt="">
            <h5>training courses</h5>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex reiciendis sint molestiae ullam consectetur, molestias, corrupti, cum earum culpa dolorem facilis vel quam laborum temporibus sed! Atque voluptate omnis nesciunt?</span>
        </div>
        <div class = 'info'>
            <img class = 'image' src="check.png" alt="">
            <h5>training courses</h5>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex reiciendis sint molestiae ullam consectetur, molestias, corrupti, cum earum culpa dolorem facilis vel quam laborum temporibus sed! Atque voluptate omnis nesciunt?</span>
        </div>
        <div class = 'info'>
            <img class = 'image' src="check.png" alt="">
            <h5>training courses</h5>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex reiciendis sint molestiae ullam consectetur, molestias, corrupti, cum earum culpa dolorem facilis vel quam laborum temporibus sed! Atque voluptate omnis nesciunt?</span>
        </div>
    </div>
`;

const welcomeMessages = document.getElementsByClassName('welcome-message');
for (const message of welcomeMessages) {
  message.style.color = 'white';
  message.style.margin = '20px 0'
}
const buttons = document.getElementsByClassName('buttons')
for(const button of buttons){
    button.style.padding = '10px 20px'
    button.style.borderRadius = '5px'
    button.style.backgroundColor = 'lightblue'
    button.style.cursor = 'pointer'
}
const infoWrapper = document.querySelector('.info-wrapper');
infoWrapper.style.display = 'flex';
infoWrapper.style.alignItems = 'center';
infoWrapper.style.justifyContent = 'space-around';
infoWrapper.style.width = '100%'

const info = document.querySelectorAll('.info')
info.forEach((infoItem) => {
    infoItem.style.backgroundColor = 'whitesmoke';
    infoItem.style.width = '350px'
    infoItem.style.padding = '20px'
    infoItem.style.marginTop = '70px'
    infoItem.style.borderRadius = '15px'
  });

whiteDiv.innerHTML = `
    <p class='welcome-message'>practice advice</p>
    <h1 class='welcome-message'>Featured products</h1>
    <p class='welcome-message'>we know how large objects will act, but things on a small scale do not act that way</p>
    <form>
        <input class = 'input' type="text">
        <button class = 'subscribe-button'>subscribe</button>
    </form>
`
whiteDiv.style.display = 'grid';
whiteDiv.style.placeItems = 'center';
whiteDiv.style.padding = '50px 100px'

const input = document.querySelector('.input')
input.style.width = '400px'
input.style.height = '30px'
input.style.borderRadius = '10px'

const subButton = document.querySelector('.subscribe-button')
subButton.style.height = '30px'
subButton.style.borderRadius = '10px'
subButton.style.padding = '5px 10px'
subButton.style.backgroundColor = 'blue'
subButton.style.color = 'white'

