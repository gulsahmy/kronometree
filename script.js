const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");

const sdakika = document.getElementById("sdakika"); 
const ssaniye = document.getElementById("ssaniye"); 

const baslat = document.getElementById("baslat");
const reset = document.getElementById("reset");

let dur = false;


sdakika.addEventListener("change", () => {
    dakika.textContent = sdakika.value;
});

ssaniye.addEventListener("change", () => {
    saniye.textContent = ssaniye.value < 10 ? "0" + ssaniye.value : ssaniye.value;
});

baslat.addEventListener("click", startTimer);

reset.addEventListener("click", () => {
    dur = true;
    dakika.textContent = "00";
    saniye.textContent = "00";
    sdakika.value = "00";
    ssaniye.value = "00";
})

function startTimer(){
    let dk = dakika.textContent;
    let sn = saniye.textContent;

    const interval = setInterval(() =>{
        sn--;
        sn = sn < 10 ? "0" + sn : sn;
        if(sn == "0-1"){
            dk--;
            sn = 59;
        }
        if ((dk == 0 && sn == 0) || (dk == 0 && sn == 0)) {
            clearInterval(interval);
            window.alert("Süre doldu");
            sdakika.value = "00";
            ssaniye.value = "00";
        }
        if (dur) {
            clearInterval(interval);
            return;
        }

        dakika.textContent = dk;
        saniye.textContent = sn;

    },1000)
}