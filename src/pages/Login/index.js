import { useState } from 'react';
import Swal from 'sweetalert2';
import imagemlogin from './Hand coding-bro.png';
import './index.css';
import usuarioService from '../../service/usuario';

function Login() {
  const [email, setEmail] = useState('admin@admin.com');
  const [senha, setSenha] = useState('123456');

  const Logar = () => {
    if (!email || !senha) {
      Swal.fire({
        icon: 'error',
        text: 'Os campos de e-mail e senha são obrigatórios!',
      });
      return;
    }

    // Comunicar-se com a API e fazer a autenticação...
    usuarioService
      .autenticar(email, senha)
      .then((response) => {
        usuarioService.salvarToken(response.data.token);
        usuarioService.salvarUsuario(response.data.usuario);

        window.location = '/';
      })
      .catch((erro) => {
        Swal.fire({
          icon: 'error',
          text: 'Erro ao fazer login. Verifique suas credenciais.',
        });
        console.log(erro);
      });
  };

  return (
    <div className="tela-inicial">
      {/* TELA DA ESQUERDA */}
      <div className="esquerda">
        <h1>Faça Login e Veja o Que Fizemos..</h1>
        <img src={imagemlogin} className="img-esquerda" alt="IMG Animada" />
      </div>

      {/* Tela Da Direita */}
      <div className="direita">
        <div className="box-login">
          {/* Login */}
          <h1>LOGIN</h1>
          {/* Grupo Email */}
          <div className="Grupo">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="exemplo@exemplo.com"
            />
          </div>

          {/* Grupo Senha */}
          <div className="Grupo">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type="password"
            />
          </div>

          {/* Botão De Entrar */}
          <button id="btn-entrar" onClick={Logar}>
            ENTRAR
          </button>

          
        </div>
      </div>
    </div>
  );
}

export default Login;
