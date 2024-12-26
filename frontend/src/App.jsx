import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExercisesPage from "./pages/ExercisesPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/exercises" element={<ExercisesPage />} />
            </Routes>
        </Router>
    );
}

export default App;