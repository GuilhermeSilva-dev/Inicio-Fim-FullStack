import './style.css';

export default function Footer() {
    return (
        <footer>
            <p>
                &copy;  {new Date().getFullYear()}
                Meu Projeto. Todos os direitos reservados.
                <br />
                Desenvolvido por Guilherme Silva.
            </p>
        </footer>
    )
}