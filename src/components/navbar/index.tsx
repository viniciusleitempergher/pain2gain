import { Button } from '../button'
import { Logo } from '../logo'
import './style.css'

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Logo />
            </div>
            <div className="navbar__letstrain">
                <Button>
                    Treinos
                </Button>
            </div>
        </nav>
    )
}