import { Navbar } from '../../components/navbar';
import { Exercises } from '../../components/exercises'
import { Exercise } from '../../components/exercise'

import './style.css';
import { Button } from '../../components/button';

export function TrainPage() {
    return (
        <div className="trainpage">
            <Navbar />
            <div className="content">
                <h2 className="content__title">Exercícios</h2>
                <Exercises>
                    <Exercise name="Dorsal voador" series={3} repetitions={15} weight={[20, 20, 20, 0]} />
                    <Exercise name="Remada 2 halteres em pe inclinada" series={3} repetitions={15} weight={[7, 7, 7, 0]} />
                    <Exercise name="Puxada alta frontal b.neutra" series={3} repetitions={15} weight={[20, 20, 20, 0]} />
                    <Exercise name="Rosca polia baixa" series={3} repetitions={15} weight={[15, 15, 15, 0]} />
                    <Exercise name="Dorsal voador" series={3} repetitions={15} weight={[20, 20, 20, 0]} />
                </Exercises>
            </div>

            <div className="button-start">
                <Button href="/" >
                    Iniciar!
                </Button>
            </div>
        </div>
    )
}