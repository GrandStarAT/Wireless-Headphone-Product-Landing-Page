
let hour = document.getElementById("hur");
let mine = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ap")

setInterval(() => {


    let dat = new Date();

    let h = dat.getHours() < 10 ? "0" + dat.getHours() : "" + dat.getHours();
    let m = dat.getMinutes() < 10 ? "0" + dat.getMinutes() : "" + dat.getMinutes();
    let s = dat.getSeconds() < 10 ? "0" + dat.getSeconds() : "" + dat.getSeconds();

    ampm.innerHTML=h>12? "PM":"AM"
    hour.innerHTML = h > 12 ? h - 12 : h;
    mine.innerHTML = m;
    sec.innerHTML = s;

}, 1000)  
