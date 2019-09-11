import React from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/sidebar";

function App() {
    return (
        <div className="checkout">
            <Sidebar />
            <div className="checkout__details"></div>
        </div>
    );
}

export default App;
