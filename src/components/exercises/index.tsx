import React from "react";

import './style.css'

type Props = {
    children: React.ReactNode;
}

export function Exercises({ children }: Props) {
    return (
        <table className="exercises__list">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>S.</th>
                    <th>R.</th>
                    <th colSpan={4}>Carga</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}