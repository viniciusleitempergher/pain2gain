import './style.css'

type Props = {
    nome: String,
    tempo: String,
    data: String,
}

export function Train({ nome, tempo, data }: Props) {
    return (
        <div className="list__item">
            <p className="list__item__p list__item__p-nome">{nome}</p>
            <p className="list__item__p">{tempo}</p>
            <p className="list__item__p">{data}</p>
        </div>
    )
}