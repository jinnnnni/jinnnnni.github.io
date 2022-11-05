const h1 = document.querySelector("h1");

function clock(){

    const clockDate = new Date();

    const year = clockDate.getFullYear();
    const month = String(clockDate.getMonth()).padStart(2, "0");
    const day = String(clockDate.getDay()).padStart(2, "0");

    const hours = String(clockDate.getHours()).padStart(2, "0");
    const minutes = String(clockDate.getMinutes()).padStart(2, "0");
    const seconds = String(clockDate.getSeconds()).padStart(2, "0");
    
    const ourClock = ` ${year}.${month}.${day}, ${hours}:${minutes}:${seconds}`
    h1.innerText = ourClock;
}

clock();
setInterval(clock, 1000);