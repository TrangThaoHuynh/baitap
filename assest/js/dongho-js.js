setInterval(function(){
    let d = new Date();
    let c = document.getElementById("block").innerHTML = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} 
    ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
},1000)