
let input = document.getElementById('answer')
// let restart = document.getElementById('restart')
let submit = document.getElementById('submit')


let ranE = Math.floor(Math.random() * 100);

let e = document.getElementById('input').value;
function submitBtn() {
    let e = document.getElementById('input').value;
    let ranE = Math.floor(Math.random() * 100);
    if (e >= ranE) {
        input.innerHTML = " stop"
    }
    else if (e < ranE) {
        input.innerHTML = "continue"
    }
}
// updatTime()

function resetBtn() {
// e.value = '';
    document.getElementById('input').value = "";
}





const startingTime = 1;
let time = 60;

const countTime = document.getElementById('time')
setInterval(updatTime, 1000)
function updatTime() {
    let minute = Math.floor(time / 60)
    let second = time % 60;
    countTime.innerHTML = `${minute}: ${second}`;
    if (second < 0 || second <= 0) {
        document.getElementById('time').innerHTML = 'EXPIRED';
    }
    time--;
}
