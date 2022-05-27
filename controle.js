let usuarioDB = JSON.parse(localStorage.getItem("db_usuario"));
let tableInfo = document.querySelector("table");
let nomeIntro = document.querySelector("#nomeUsuario");


window.onload = () => {

    usuarioDB.map((item) => {

        //criando elementos
        let row = document.createElement("tr");
        let dataName = document.createElement("td");
        let dataSirname = document.createElement("td");
        let dataEmail = document.createElement("td");
        let dataType = document.createElement("td");

        dataName.innerHTML = item.name;
        dataSirname.innerHTML = item.sirname;
        dataEmail.innerHTML = item.emails;
        dataType.innerHTML = item.tipo;

        row.appendChild(dataName);
        row.appendChild(dataSirname);
        row.appendChild(dataEmail);
        row.appendChild(dataType);

        tableInfo.appendChild(row);
    })

    var usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    nomeIntro.innerHTML = usuarioCorrente.name;
    
}