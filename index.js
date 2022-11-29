const button = document.querySelector("#calcular");
const div = document.createElement("section");
const body = document.querySelector("body");
div.classList.add("container");
div.classList.add("d-flex");
div.classList.add("p-5");
div.classList.add("flex-column");

button.addEventListener("click", () => {
    const total = document.querySelector("#total").value;
    const porciento = document.querySelector("#porciento").value;

    let resultadoPorcental = (total*porciento)/100;
    let resultadoFrecuencial = total - resultadoPorcental;
    const p = document.createElement("p");
    p.innerText = "El resultado para " + porciento +"% es " + resultadoFrecuencial;

    div.appendChild(p);
    body.appendChild(div);
   
    


});

//d-flex p-5 flex-column