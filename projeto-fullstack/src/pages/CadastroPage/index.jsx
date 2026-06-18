import { toast } from 'react-toastify';
import api from '../../services/api';
import './style.css';
import { useState } from 'react';

export default function CadastroPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaEnviando, setEstaEnviando] = useState(false);

    //função para limpar os campos do formulário
    function limparCampos() {
        setNome('');
        setEmail('');
        setSenha('');
    }

    async function envioDoFormulario(event) {
        //evitar que a página seja recarregada ao enviar o formulário
        event.preventDefault();
        setEstaEnviando(true);


        const dadosDoFormulario = {
            nome: nome,
            email: email,
            senha: senha,
        };

        try {
            //Tenta cadastrar um usuario na API, se der certo, mostra a mensagem de sucesso, se der errado, mostra a mensagem de erro.
            const resposta = await api.post('/usuarios', dadosDoFormulario);

            //se der certo.
            toast.success('Resposta.data.mensagem');
            console.log(resposta.data);
            alert('Usuário cadastrado com sucesso!');
            limparCamposDoFormulario();
        } catch (erro) {
            //se der errado.
            const mensagemDoServidor = erro.response?.data?.mensagem
            toast.error(mensagemDoServidor);
        } finally {
            //executa dando certo ou errado, para que o botão de enviar volte a ficar habilitado
            setEstaEnviando(false);
        }
    }

    return (
        <div className="cadastro-page">
            <form onSubmit={envioDoFormulario}>
                <div className="grupo-form">
                    <label htmlFor="campo-nome">Nome:</label>
                    <input
                        id='campo-nome'
                        type="text"
                        placeholder='Ex.: Maria Silva'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        />
                </div>
                <div className="grupo-form">
                    <label htmlFor="campo-email">email:</label>
                    <input
                        id='campo-email'
                        type="email"
                        placeholder='Ex.: maria@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="grupo-form">
                    <label htmlFor="campo-senha">senha:</label>
                    <input
                        id='campo-senha'
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        />
                </div>

                <button type='submit' disabled={estaEnviando}>
                    {estaEnviando ? 'Cadastrando...' : 'Cadastrar'}
                </button>

            </form>
        </div>
    )
}