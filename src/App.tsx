import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import LandingPage from "./pages/LandingPage";
import FriendsPage from "./pages/FriendsPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import LibraryPage from "./pages/LibraryPage";
import LoansPage from "./pages/LoansPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />}></Route>
                <Route path="/library" element={<LibraryPage />}></Route>
                <Route path="/loans" element={<LoansPage />}></Route>
                <Route path="/friends" element={<FriendsPage />}></Route>
                <Route path="/book/:id" element={<BookDetailsPage />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
