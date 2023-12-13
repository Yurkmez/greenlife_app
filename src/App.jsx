import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Block1 from './components/page1/Block1';
import Block2 from './components/page2/Block2';
import EmailSend from './components/page3/EmailSend';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index={true} element={<Block1 />} />
                        <Route path="apartments" element={<Block2 />} />
                        <Route path="contact" element={<EmailSend />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
