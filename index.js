let usuario = JSON.parse(sessionStorage.getItem("usuario"));
let tarefas = [];


function buscaTarefa() {
    fetch(`https://js-lista-de-tarefas-api.onrender.com/tarefas/${usuario.id}`)
        .then(resposta => resposta.json())
        .then(json => {
            if (json.tipo == "erro") {
                throw json.mensagem;
            }
            tarefas = json;
            carregarTarefa(tarefas);
        })
        .catch(erro => {
            console.log("error", erro);
        });
}

buscaTarefa();

function carregarTarefa(listaTarefa) {
    let grid = document.querySelector("#tarefas");
    if (listaTarefa.length == 0) {
        grid.innerHTML = "<p>Crie sua primeira tarefa</p>";
    }
}