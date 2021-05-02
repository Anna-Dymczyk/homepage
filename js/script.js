console.log("Hello🙂");

let button = document.querySelector(".js-buttonShowTable");
let table = document.querySelector(".js-table");
let showTable = "Pokaż moje zdobyte doświadczenie"
let hideTable = "Ukryj tabelę"

button.addEventListener("click", () => {
    table.classList.toggle("js-hideTable");
    button.innerText = button.innerText === hideTable ? showTable : hideTable;
});

// lub
// button.addEventListener("click", () => {
//     table.classList.toggle("js-hideTable");
//     button.innerText = table.classList.contains("js-hideTable")? showTable : hideTable;
// });

