const color = document.getElementById('color');
const svg = document.getElementById('random-circle');
const button = document.querySelector('button');
button.addEventListener("click", ()=>{
    svg.innerHTML = "";
    for(let i = 0; i < Math.floor((Math.random() * 50)+20); i++) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        randomX = Math.floor((Math.random() * (440-60) )+60);
        randomY = Math.floor((Math.random() * (440-60) )+60);
        console.log(randomX);
        console.log(randomY);
        circle.setAttribute("cx", randomX);
        circle.setAttribute("cy",randomY);
        circle.setAttribute("r", Math.floor(Math.random() * 50));
        circle.setAttribute("stroke-width", "px");
        circle.setAttribute("fill","none");
        circle.setAttribute("stroke",color.value);
        svg.appendChild(circle);
    }
})