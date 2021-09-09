import { ReactNode } from 'react'
import './style.css'

type Props = {
    children: ReactNode;
    href?: string;
}

export function Button(props: Props) {
    return (
        <a className="button" href={props.href}>
            {props.children}
        </a>
    )
}