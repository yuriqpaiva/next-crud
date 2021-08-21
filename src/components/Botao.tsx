interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: (param: any) => void
}

export default function Botao(props: BotaoProps) {

    const cor = props.cor ?? 'gray'

    return (
        <button className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md 
            box-content hover:border-purple-900 border-2
            ${props.className}
        `}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}