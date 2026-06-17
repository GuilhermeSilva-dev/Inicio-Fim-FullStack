import './style.css';

export default function CadastroPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaEnviando, setEstaEnviando] = useState(false);

    function limparCampos() {
        setNome('');
        setEmail('');
        setSenha('');
    }

    async function enviarFormulario(event) {
        event.preventDefault();
        setEstaEnviando(true);
    }

    const dadosDoFormulario = {
        nome: nome,
        email: email,
        senha: senha,
    };

    try {
        const resposta = await api.post('/cadastro', dadosDoFormulario);
        console.log(resposta.data);
        alert('Usuário cadastrado com sucesso!');
        limparCamposDoFormulario();
    } catch (error) {
        console.error('Erro ao enviar o formulário:', error);
    } finally {
        setEstaEnviando(false);
    }
}