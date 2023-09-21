// const startingTime = 1;
// let time = startingTime * 60;


// const cou   ntTime = document.getElementById('countdown');


// setInterval(updateCountDown, 1000);

// function updateCountDown() {
//     const minute = Math.floor(time / 60);
//     let second = time % 60;
// // second = second < 10 ? "0" + second : second;
// countTime.innerHTML = `${minute}: ${second}`;
// time--;
// if (second < 0 || second <= 0){
//    document.getElementById('countdown').innerHTML ="EXPIRED";
// }
// }


const startingTime = 1;
let time = 60;

let countTime = document.getElementById('countdown')
 setInterval(updatecountdown, 1000)
 function updatecountdown() {
    let minute = Math.floor(time / 60);
    let second =  time % 60;
    countTime.innerText = `${minute}: ${second}`;
    if (second < 0 || second <= 0) {
        document.getElementById('countdown').innerHTML ="oop!! time up"
    }
    time--;
 }




















