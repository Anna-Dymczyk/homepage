{
    const welcome = () => {
        console.log("Hello🙂");
    };
    welcome();


    const showHideTable = () => {
        const button = document.querySelector(".js-buttonShowTable");
        const table = document.querySelector(".js-table");
        const showTable = "Pokaż moje zdobyte doświadczenie"
        const hideTable = "Ukryj tabelę"
        table.classList.toggle("js-hideTable");
        button.innerText = button.innerText === hideTable ? showTable : hideTable;
    };

    const init = () => {
        const button = document.querySelector(".js-buttonShowTable");
        button.addEventListener("click", showHideTable);

    };

    init();


}