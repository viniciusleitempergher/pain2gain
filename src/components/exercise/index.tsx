type Props = {
    name: String,
    series: Number,
    repetitions: Number,
    weight: Array<Number>
}

export function Exercise({ name, series, repetitions, weight }: Props) {
    return (
        <tr>
            <td>{name}</td>
            <td>{series}</td>
            <td>{repetitions}</td>
            <td>{weight[0]}</td>
            <td>{weight[1]}</td>
            <td>{weight[2]}</td>
            <td>{weight[3]}</td>
        </tr>
    )
}