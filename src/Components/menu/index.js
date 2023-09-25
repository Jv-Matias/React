import './index.css';


import { Link, useLocation } from 'react-router-dom';
import usuarioService from '../../service/usuario';

function Menu(){

    const logout = () =>{
        usuarioService.sairSistema();
    };

    if(useLocation().pathname !== '/login'){
        return (
            <ul className='menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/front'>Front</Link></li>
                <li><Link to='/vanila'>Vanila</Link></li>
                <li><Link to='/mobile'>Mobile</Link></li>
                <li><Link onClick={logout}>Sair</Link></li>
            </ul>
        )
    }else {
        return null;    //retorna nada para o componente não ser renderizado no DOM
    }
}

export default Menu;