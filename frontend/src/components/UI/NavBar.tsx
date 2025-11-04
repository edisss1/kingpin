import { Link } from "react-router-dom"
import { KingpinLogo } from "../../assets/icons/KingpinLogo"
import Button from "../Common/Button"

const NavBar = () => {
    return (
        <nav className="px-[clamp(1rem,5vw,3rem)] py-4 flex items-center justify-between">
            <Link className="flex items-center gap-1" to={"/"}>
                <KingpinLogo />
                <h1 className="text-xl font-medium">Kingpin</h1>
            </Link>

            <div className="flex items-center justify-center gap-3">
                <Button className="px-3 py-1.5" variant="primary">
                    Login
                </Button>
                <Button className="px-3 py-1.5" variant="secondary">
                    Sign up
                </Button>
            </div>
        </nav>
    )
}
export default NavBar
