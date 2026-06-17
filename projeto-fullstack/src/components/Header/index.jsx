import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
    return (
        <header>
            <h1>Gerenciamento de Usuários</h1>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/usuarios">Lista de Usuários</Link>
            </nav>
        
        </header>
    )
}