import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ExplorePage from "./pages/ExplorePage"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ideas" element={<ExplorePage />} />
        </Routes>
    )
}
export default Router
