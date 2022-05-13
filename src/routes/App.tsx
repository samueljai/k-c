import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Food from '../components/Food/Food';
import Beaches from '../components/Beaches/Beaches';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="food" element={<Food />} />
                <Route path="beaches" element={<Beaches />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
