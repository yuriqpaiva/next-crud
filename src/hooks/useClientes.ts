import { useEffect, useState } from 'react'
import Cliente from '../core/Cliente'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../backend/db/ColecaoCliente'
import useTabelaOuForm from './useTabelaOuForm'

export default function useClientes() {
    const repositorio: ClienteRepositorio = new ColecaoCliente()

    const {
        tabelaVisivel,
        exibirTabela,
        exibirFormulario
    }
        = useTabelaOuForm()

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(obterTodos, [])

    function obterTodos() {
        repositorio.obterTodos().then((clientes) => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        // console.log(`Selecionar ${cliente.nome}`)
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repositorio.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await repositorio.salvar(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio)
        exibirFormulario()
    }

    return {
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        cliente,
        clientes,
        visivel,
        setVisivel,
        tabelaVisivel,
        exibirTabela
    }
}