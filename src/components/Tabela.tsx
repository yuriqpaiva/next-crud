import Cliente from "../core/Cliente";
import { IconeEdit, IconeTrash } from "./Icones";

interface TabelaProps {
    clientes: Cliente[],     // Espera receber um array de clientes
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteSelecionado && props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    // Só vai chamar o método map se clientes estives definido!
    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'
                    }`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className={`flex justify-center`}>
                {props.clienteSelecionado ? (
                    <button className={`
                    flex justify-center items-center text-green-600 
                    rounded-full hover:bg-purple-50 p-2 m-1
                `} onClick={() => props.clienteSelecionado?.(cliente)}>
                        {IconeEdit}
                    </button>
                ) : false
                }
                {props.clienteExcluido ? (
                    <button className={`
                flex justify-center items-center text-red-600 
                rounded-full hover:bg-purple-50 p-2 m-1
                `} onClick={() => props.clienteExcluido?.(cliente)}>
                        {IconeTrash}
                    </button>
                ) : false
                }
            </td>
        )
    }

    return (
        // Tailwind: w-full ocupa todo espaço do container!
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}