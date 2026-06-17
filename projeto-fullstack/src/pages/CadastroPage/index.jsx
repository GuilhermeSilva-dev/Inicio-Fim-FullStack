import { toast } from 'react-toastify';
import api from '../../services/api';
import './style.css';

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

    async function enviarFormulario(event) {
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
}