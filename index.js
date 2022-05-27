//Código JS para a parte de Cadastro
let nome = document.querySelector("#name_input");
let sobrenome = document.querySelector("#sirname_input");
let email = document.querySelector("#email_input");
let senha = document.querySelector("#password_input");
let btnCad = document.querySelector("#btn_signup");
let estudanteRadio = document.querySelector("#estudanteRadio");
let empresaRadio = document.querySelector("#empresaRadio");


let cadastro = () => {
    console.log("chamado");

    let tipoTemp = (estudanteRadio.checked) ? "versão estudante":"versão empresa";
    let users = {
        name: nome.value,
        sirname: sobrenome.value,
        emails: email.value,
        password: senha.value,
        tipo: tipoTemp
    }


    let db_usuario = localStorage.getItem("db_usuario");
    if (db_usuario) {
        let db_users_2 = JSON.parse(db_usuario);
        db_users_2.push(users);
        localStorage.setItem("db_usuario", JSON.stringify(db_users_2));
    } else {
        localStorage.setItem("db_usuario", JSON.stringify([users]));
    }

    alert(`O usuário ${nome.value} foi cadastrado com sucesso para a ${tipoTemp}`);

    return true;
}


//Código JS para a parte do Login
let userName = document.querySelector("#input_user");
let userPassword = document.querySelector("#input_password");
let btnLog = document.querySelector("#btn_login");


let login = () => {
    console.log("Teste");
    let usuarioDB = JSON.parse(localStorage.getItem("db_usuario"));

    if(usuarioDB) {
        console.log("existe db");

        let validoLogin = false;

        usuarioDB.map((item) => {
            if(item.name == userName.value && item.password == userPassword.value) {
                validoLogin = true;

                let usuarioCorrente = {
                    name: item.name,
                    password: item.password,
                    email: item.emails,
                    sobrenome: item.sirname,
                    tipo: item.tipo
                }

                sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
                sessionStorage.setItem("estadoLogin", JSON.stringify(validoLogin));

                alert(`O login de ${item.name} foi efetuado com sucesso para a ${item.tipo}`);
                console.log(validoLogin);
                
                
            }
        });        
        

        if(validoLogin == false) {
            sessionStorage.setItem("estadoLogin", JSON.stringify(validoLogin));
            alert("Login negado. Tente novamente");
            console.log("teste"); 
        }


        if(estadoLogin == "true"){
            window.location.assign(newPage);
        }

    } else {
        alert("Login negado. Tente novamente");
        console.log("teste");
    }

};

let controle = () => {
    var estadoLogin = JSON.parse(sessionStorage.getItem("estadoLogin"));

    if(estadoLogin == true)
        window.location.href = "controle.html";
 
}