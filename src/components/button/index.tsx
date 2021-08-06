import React, { ReactNode } from 'react'
import './style.css'

type Props = {
    children: ReactNode,
}

export function Button({ children }: Props) {
    return (
        <a href="" className="button">
            {children}
        </a>
    )
}