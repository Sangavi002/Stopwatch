var scount = 0;
var mcount = 0;
var hcount = 0;
let time;

function start(){
    time = setInterval(function(){
        if(scount < 59){
            if (mcount === 0 && hcount === 0 && scount === 0) {
                document.getElementById('mCount').style.display = 'none';
                document.getElementById('hCount').style.display = 'none';
            }
            scount++;
            document.getElementById("sCount").textContent = scount <= 9 ? '0'+ scount : scount;
            console.log(scount);  
        }
        else{
            scount = 0;
            document.getElementById("sCount").textContent = '0'+ scount;
            if(mcount < 59){
                mcount++;
                document.getElementById("mCount").textContent = mcount <= 9 ? '0'+ mcount + ':' : mcount;
                console.log(mcount);
                document.getElementById('mCount').style.display = 'inline';   
            }
            else{
                mcount = 0;
                document.getElementById("mCount").textContent = '0'+ mcount + ':';
                if(hcount < 59){
                    hcount++;
                    document.getElementById("hCount").textContent = hcount <= 9 ? '0' + hcount + ':' : hcount;
                    console.log(hcount);
                    document.getElementById('hCount').style.display = 'inline';
                }
            }
        }
    },1000)
}
start();
function pause(){
    clearInterval(time);
}
pause();
function reset(){
    clearInterval(time);
    scount = 0;
    mcount = 0;
    hcount = 0;
    document.getElementById("hCount").textContent = '00:';
    document.getElementById("mCount").textContent = '00:';
    document.getElementById("sCount").textContent = '00';
    document.getElementById('sCount').style.display = 'inline';
    document.getElementById('mCount').style.display = 'inline';
    document.getElementById('hCount').style.display = 'inline';
}
reset()
