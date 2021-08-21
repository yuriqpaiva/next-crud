import { useEffect, useState } from 'react'
import Cliente from '../core/Cliente'
import Botao from './Botao'
import Entrada from './Entrada'

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')

    useEffect(() => setIdade(''), [])

    return (
        <div>
            {id ? (
                < Entrada
                    texto='Código'
                    valor={id}
                    somenteLeitura
                    className="mb-5"
                />
            ) : false}
            <Entrada
                texto='Nome'
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
                placeholder='Digite o nome do cadastro'
            />
            <Entrada
                texto='Idade'
                tipo='number'
                valor={idade}
                valorMudou={setIdade}
                placeholder='Insira a idade do cadastro'
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2" 
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}