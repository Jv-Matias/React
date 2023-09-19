import { useState } from 'react';
import Swal from 'sweetalert2'
import './index.css'
// import './imagem.svg'

import usuarioService from '../../service/usuario';

function Login (){
    const [email, setEmail] = useState('admin@admin.com');
    const [senha, setSenha] = useState('123456');

    const Logar = () => {
  
        if(!email || !senha){
            Swal.fire({
                icon: 'error',
                text: 'Os campos de e-mail e senha são obrigatórios!'
            });
            return;
        }     
        // Me comunicar com a api e fazer a autenticação...

        usuarioService.autenticar(email, senha)
        .then(response => {
            usuarioService.salvarToken(response.data.token);
            usuarioService.salvarUsuario(response.data.usuario);
            
            window.location='/';
        })
        .catch(erro =>{
            console.log(erro)
        })
    };

    return (
        // <!-- Tela Inicial -->
<div class="tela-inicial">

    {/* <!-- TELA DA ESQUERDA --> */}
    <div class="esquerda">
        <h1>Faça Login  E Veja O Que Fizemos..</h1>
        <img src={'Imagem.svg'} class="img-esquerda" alt="IMG Animada" />
    </div>



    {/* <!-- Tela Da Direita --> */}
    <div class="direita">
        <div class="box-login">
            {/* <!-- Login --> */}
            <h1>LOGIN</h1>
            {/* <!-- Grupo Email --> */}
            <div class="Grupo">
                <label for="E-mail">E-mail</label>
                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="exemplo@exemplo.com" />
            </div>

            {/* <!-- Grupo Senha --> */}
            <div class="Grupo">
                <label for="Senha">Senha</label>
                <input id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} type="password"/>
            </div>

            {/* <!-- Cadastrar-se --> */}
            <button id="btn-cadastro" type="button">Cadastrar-Se</button>


            {/* <!-- Botão De Entrar --> */}
            <button id="btn-entrar"onClick={Logar}>ENTRAR</button>
        </div>
    </div>



</div>
    
    )
}

export default Login;