const idElement = document.getElementById("id");
const adviceElement = document.getElementById("advice");
const btnElement = document.getElementById("generate");

const url = 'https://api.adviceslip.com/advice';

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.slip);
        idElement.innerHTML = data.slip.id;
        adviceElement.innerText = data.slip.advice;
    }
    );

btnElement.addEventListener("click", function() {
    document.location.reload();
})


