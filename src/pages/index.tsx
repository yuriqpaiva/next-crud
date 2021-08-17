import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'
export default function Home() {

  const {
    selecionarCliente,
    excluirCliente, cliente, clientes, salvarCliente,
    novoCliente, tabelaVisivel, exibirTabela
    }
    = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green" onClick={novoCliente}>Novo cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={exibirTabela} clienteMudou={salvarCliente} />
        )}
      </Layout>
    </div>
  )
}