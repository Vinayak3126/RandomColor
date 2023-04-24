
 function nwcolor(){
    let no =Math.random();
 let hex =no.toString(16).padEnd(6,0);
 finalhex = hex.slice(2,8);

    let maindv = document.getElementById("maindv");
    maindv.style.background = "#" + finalhex;
    document.getElementById("code").innerHTML = "#" + finalhex;
 }

 function cpcode(){
    navigator.clipboard.writeText("#"+finalhex);
 }
 nwcolor();