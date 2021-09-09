import { Navbar } from '../../components/navbar'
import { Train } from '../../components/train'

import './style.css'

export function Home() {
    return (
        <div className="home">
            <Navbar />
            <main className="content">
                <h2 className="content__title">Seus Treinos</h2>
                <div className="content__list">
                    <Train nome="Treino A" tempo="1hr15min" data="15/09/2021 18:30" />
                    <Train nome="Treino B" tempo="1hr" data="30/09/2021 18:30" />
                    <Train nome="Treino C" tempo="1hr30min" data="09/08/2021 18:30" />
                    <Train nome="Treino D" tempo="1hr20min" data="09/08/2021 18:30" />
                    <Train nome="Treino E" tempo="1hr" data="09/08/2021 18:30" />
                </div>
            </main>
        </div>
    )
}