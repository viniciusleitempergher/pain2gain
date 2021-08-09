import { Navbar } from '../../components/navbar'
import { Train } from '../../components/train'

import './style.css'

export function Home() {
    return (
        <div className="home">
            <Navbar />
            <main className="content">
                <div className="list">
                    <Train nome="Treino A" tempo="1hr" data="-" />
                    <Train nome="Treino B" tempo="1hr" data="-" />
                    <Train nome="Treino C" tempo="1hr30min" data="-" />
                    <Train nome="Treino D" tempo="1hr20min" data="09/08/2021 18:30" />
                    <Train nome="Treino E" tempo="1hr" data="-" />
                </div>
            </main>
        </div>
    )
}