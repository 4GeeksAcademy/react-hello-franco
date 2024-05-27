// Importa React y ReactDOM
import React, { useState } from "react";
import ReactDOM from "react-dom";

// Incluye tus estilos en el bundle de webpack
import "../styles/index.css";

// Define el componente `TrafficLight`
export default function TrafficLight() {
    const [selectedColor, setSelectedColor] = useState("red");
    return (
        <div className="traffic-light">
            <div 
                onClick={() => setSelectedColor("red")} 
                className={`round red ${selectedColor === "red" ? "glow" : ""}`}>
            </div>
            <div 
                onClick={() => setSelectedColor("yellow")} 
                className={`round yellow ${selectedColor === "yellow" ? "glow" : ""}`}>
            </div>
            <div 
                onClick={() => setSelectedColor("green")} 
                className={`round green ${selectedColor === "green" ? "glow" : ""}`}>
            </div>
        </div>
    );
}
