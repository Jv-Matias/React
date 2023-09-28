import './index.css';
import {FaHouse, FaPersonChalkboard, FaCartShopping,FaArrowRightToBracket } from 'react-icons/fa6'


import { Link, useLocation } from 'react-router-dom';
import usuarioService from '../../service/usuario';


function Menu(){

    const logout = () =>{
        usuarioService.sairSistema();
    };

    if(useLocation().pathname !== '/login'){
        return (
            <ul className='menu'>
                <li><Link to='/'><FaHouse />Home</Link></li>
                <li><Link to='/Produtos'> <FaCartShopping /> Shop </Link></li>
                <li><Link to='/Cliente'> <FaPersonChalkboard /> Client </Link></li>
                <li><Link onClick={logout}><FaArrowRightToBracket /> Sair</Link></li>
            </ul>
        )
    }else {
        return null;    
    }
}

export default Menu;