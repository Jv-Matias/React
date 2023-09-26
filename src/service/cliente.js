import service from "./geral";
import serviceProduto from "./usuario";
import serviceCliente from "./usuario"

function obter(){

    return new Promise((resolve, reject) => {
        service.get('/produtos')
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

function adicionar(produto){
    
    produto.dataCadastro = new Date().toISOString();

    return new Promise((resolve, reject) => {
        service.post('/produtos', produto)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

function atualizar(produto){
    return new Promise((resolve, reject) => {
        service.put(`/produtos/${produto.id}`, produto)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

function excluir(id){
    return new Promise((resolve, reject) => {
        service.delete(`/produtos/${id}`)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}
// Parte dos clientes 

function obterCliente(){

    return new Promise((resolve, reject) => {
        service.get('/clientes')
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}
function adicionarCliente(cliente){
    
    cliente.dataCadastro = new Date().toISOString();

    return new Promise((resolve, reject) => {
        service.post('/clientes', cliente)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

function atualizarCliente(cliente){
    return new Promise((resolve, reject) => {
        service.put(`/clientes/${cliente.id}`, cliente)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

function excluirCliente(id){
    return new Promise((resolve, reject) => {
        service.delete(`/clientes/${id}`)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}



export default {
    obter,
    adicionar,
    atualizar,
    excluir,
    obterCliente,
    adicionarCliente,
    atualizarCliente,
    excluirCliente
}