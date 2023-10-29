let btn = document.getElementsByClassName("button-start")[0];
let hour = document.getElementsByClassName("sub-div1")[0];
let min = document.getElementsByClassName("sub-div2")[0];
let sec = document.getElementsByClassName("sub-div3")[0];
let btn_res = document.getElementsByClassName("button-restart")[0];
let btn_clr = document.getElementsByClassName("button-clear")[0];
let btn_reset = document.getElementsByClassName("button-reset")[0];
let a = 0;
let count_min = 0;
let count_hour = 0;
let intervalID;
const secFun = () => {
   
    btn_res.style.display = "none";
    btn_clr.style.display = "block";
    btn_reset.style.display = "block";
    intervalID = setInterval(() => {
        btn.style.display = "none";
        if (a < 10) {
            sec.innerHTML = `0${a}`;
        } else {
            sec.innerHTML = `${a}`;
        }
        a++;
        if (a > 59) {
            count_min++;
            if (count_min > 59) {
                count_hour++;
                if (count_hour < 10) {
                    hour.innerHTML = `0${count_hour}:`;
                } else {
                    hour.innerHTML = count_hour;
                }
                count_min = 0;
            }
            if (count_min < 10) {
                min.innerHTML = `0${count_min}:`;
            } else {
                min.innerHTML = count_min;
            }
            a = 0;
        }
    }, 1000); // Change the interval to 1000ms (1 second)
}

btn.addEventListener("click", secFun);
btn_clr.addEventListener("click",()=>{
    btn_res.style.display = "block";
    clearInterval(intervalID);
})
btn_res.addEventListener("click",secFun);
btn_reset.addEventListener("click" ,()=>{
    btn.style.display = "block";
    btn_res.style.display = "none";
    btn_clr.style.display = "none";
    btn_reset.style.display = "none";
    clearInterval(intervalID)
    a = 0;
    count_min = 0;
    ount_hour = 0;
    min.innerHTML = "00"
    hour.innerHTML = "00"
    sec.innerHTML = "00"
})
