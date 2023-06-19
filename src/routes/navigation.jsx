import React from "react";
import CountdownTimer from '../public/components/countdown';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
export default function Navigation() {
    return (
    <Router>
        <Routes>
        <Route path="*" element={<CountdownTimer />} />
        </Routes>
    </Router>
    );
}
