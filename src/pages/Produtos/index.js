

import './index.css';
import serviceProduto from "../../service/cliente";
import Swal from 'sweetalert2';
// HOOKs
import { useEffect, useState } from 'react';
import Produto from '../../models/Front';
import { FaPencilAlt, FaTrashAlt,} from 'react-icons/fa'


function ProdutoPage() {
  const [produtos, setProdutos] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [produto, setProduto] = useState(new Produto());

  useEffect(() => {
    serviceProduto.obter()
      .then(response => {
        setProdutos(response.data);
      })
      .catch(erro => {
        console.log(erro);
      });
  }, []);

  const editar = (e) => {
    setModoEdicao(true);
    let produtoEncontrado = produtos.find(c => c.id == e.target.id);

    if (produtoEncontrado) {
      produtoEncontrado.dataCadastro = produtoEncontrado.dataCadastro.substring(0, 10);
      setProduto(produtoEncontrado);
    } 
  }

  const excluir = (e) => {
    let produtoEncontrado = produtos.find(c => c.id == e.target.id);

    if (produtoEncontrado) {
      if (window.confirm("Deseja realmente excluir o Produto " + produtoEncontrado.nome)) {
        excluirProdutoBackEnd(produtoEncontrado.id);
      }
    }
  }

  const adicionar = () => {
    setModoEdicao(false);
    limparProduto();
  };

  const atualizarProdutoNaTabela = (produtoAtualizado, removerProduto = false) => {
    let indice = produtos.findIndex((cliente) => cliente.id === produtoAtualizado.id);

    if (removerProduto) {
      produtos.splice(indice, 1);
    } else {
      produtos.splice(indice, 1, produtoAtualizado);
    }

    setProdutos([...produtos]);
  }

  const salvar = () => {
    if (!produto.nome || !produto.valor || !produto.quantidadeEstoque) {
      Swal.fire({
        icon: 'error',
        text: 'Produto, Valor e Estoque são obrigatórios.'
      });
      return;
    }

    if (modoEdicao) {
      atualizarProdutoBackend(produto);
    } else {
      adicionarProdutoBackend(produto);
    }
  };

  const adicionarProdutoBackend = (produto) => {
    serviceProduto.adicionar(produto)
      .then(response => {
        setProdutos([...produtos, new Produto(response.data)]);
        limparProduto();

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 4500
        });
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  const atualizarProdutoBackend = (produto) => {
    serviceProduto.atualizar(produto)
      .then(response => {
        atualizarProdutoNaTabela(response.data);
        limparProduto();

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto atualizado com sucesso!',
          showConfirmButton: false,
          timer: 4500
        });
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  const excluirProdutoBackEnd = (id) => {
    serviceProduto.excluir(id)
      .then(() => {
        let produtoEncontrado = produtos.find(c => c.id == id);
        atualizarProdutoNaTabela(produtoEncontrado, true);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto excluído com sucesso!',
          showConfirmButton: false,
          timer: 4500
        });
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  const limparProduto = () => {
    setProduto({
      id: '',
      nome: '',
      valor: '',
      quantidadeEstoque: '',
      dataCadastro: '',
      observacao: '',
    });
  }

  return (
    <div className="container">
      {/* Titulo */}
      <div className="row mt-3">
        <div className="col-sm-12">
          <h4>Produtos</h4>
          <hr />
        </div>
      </div>

      {/* Botão adicionar */}
      <div className="row">
        <div className="col-sm-3">
          <button
            id="btn-adicionar"
            className="btn btn-primary btn-sm"
            data-bs-toggle="modal" data-bs-target="#modal-cliente"
            onClick={adicionar}
          >
            Adicionar
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div class="row mt-3">
        <div class="col-sm-12">
          <table class="table table-bordered table-hover table-dark table-striped">
            <thead>
              <tr className='Cabeçalho'>
                <th>Id</th>
                <th>Nome</th>
                <th>Valor</th>
                <th>Estoque</th>
                <th>Marca</th>
                <th>Cadastro</th>  
                <th></th>
              </tr>
            </thead>
            <tbody>
              {produtos.map(produto => (
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.valor}</td>
                  <td>{produto.quantidadeEstoque}</td>
                  <td>{produto.observacao}</td>
                  <td>{new Date(produto.dataCadastro).toLocaleDateString()}</td>
                  <td>
                    <button
                      id={produto.id}
                      onClick={editar}
                      className="btn btn-outline-primary btn-sm mr-3"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-cliente"
                    >
                    <FaPencilAlt/>  Editar
                    </button>
                    <button
                      id={produto.id}
                      onClick={excluir}
                      className="btn btn-outline-primary btn-sm espacar"
                    >
                     <FaTrashAlt/> Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div className="row">
        {/* The Modal */}
        <div className="modal fade modal-lg" id="modal-cliente">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">{modoEdicao ? "Editar Produto" : "Adicionar Produto"}</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-2">
                    <label htmlFor="id" className="form-label">Id</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="id"
                      value={produto.id}
                      onChange={(e) => setProduto({ ...produto, id: e.target.value })}
                    />
                  </div>
                  <div className="col-sm-10">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      value={produto.nome}
                      onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="Valor" className="form-label">Valor</label>
                    <input
                      type="text"
                      className="form-control"
                      id="valor"
                      value={produto.valor}
                      onChange={(e) => setProduto({ ...produto, valor: e.target.value })}
                    />
                  </div>
                  
                  <div className="col-sm-2">
                    <label htmlFor="Estoque" className="form-label">Estoque</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Estoque"
                      value={produto.quantidadeEstoque}
                      onChange={(e) => setProduto({ ...produto, quantidadeEstoque: e.target.value })}
                    />
                  </div>

                
                  <div className="col-sm-4">
                    <label htmlFor="Marca" className="form-label">Marca</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Marca"
                      value={produto.observacao}
                      onChange={(e) => setProduto({ ...produto, observacao: e.target.value })}
                    />
                    </div>

                  
                  <div className="col-sm-3">
                    <label htmlFor="dataCadastro" className="form-label">Data de cadastro</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dataCadastro"
                      disabled
                      value={produto.dataCadastro}
                      onChange={(e) => setProduto({ ...produto, dataCadastro: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button id="btn-salvar" className="btn btn-primary btn-sm" onClick={salvar} >Salvar</button>
                <button id="btn-cancelar" className="btn btn-light btn-sm" data-bs-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdutoPage;
