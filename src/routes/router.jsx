import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatList from "../components/CatList";
import CatProfile from "../components/CatProfile";

const RouterLink = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<CatList />} />
                    <Route path="/images/:id" element={<CatProfile />} />
                </Routes>
            </Router>
        </>
    )
}
export default RouterLink