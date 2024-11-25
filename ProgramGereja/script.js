let time = document.getElementById("time");
    setInterval(() =>{
      let d = new Date();
      time.innerHTML = d.toLocaleTimeString();
    },1000)

    document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    });