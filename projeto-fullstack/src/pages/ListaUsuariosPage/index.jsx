import { useEffect, useState } from 'react';
import './style.css';
import { toast } from 'react-toastify';

export default function ListaUsuariosPage() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function buscarUsuarios() {
            try {
                //Se der certo.
                const respose = await api.get('/usuarios');
                setUsuarios(respose.data);
            } catch (erro) {
                //Se der errado.
                toast.error('Erro ao buscar usuários:');
            }
        }
        buscarUsuarios()
    }, [])

    return (
        <div className="lista-usuarios">
            <h1>Lista de Usuários</h1>

            {
                usuarios.length === 0 ? (
                    <p>Nenhum usuário cadastrado</p>
                ) : (
                    <table className='tabela-usuarios'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map(usuario => (
                                <tr key ={usuario.email}>
                                    <td> {usuario.nome}</td>
                                    <td> {usuario.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

        </div>
    )
}