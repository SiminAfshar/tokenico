import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import "./styles.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </BrowserRouter>
    )
}