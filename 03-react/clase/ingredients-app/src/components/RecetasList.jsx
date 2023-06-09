import { useState, useEffect } from "react";
import { RecetasItem } from "./RecetasItem";
import { RecetasForm } from "./RecetasForm";
import './components.css'

export const RecetasList = () => {
  const [recetaCount, setRecetaCount] = useState(0);
  const [recetas, setRecetas] = useState([
    {
      name: "Albondigas",
      ingredientes: "Chile chipotle, Carne molida, Tazas de agua, Tazas de Puré de tomate",
      tiempoPreparacion: 60,
      imgURL: "https://assets.unileversolutions.com/recipes-v2/231517.png"
    }
  ]);

  const addReceta = (receta) => {
    setRecetas([...recetas, receta]);
    localStorage.setItem('Recetas', JSON.stringify([...recetas, receta]))
  };

  useEffect(() => {
    setRecetaCount(recetas.length);
  }, [recetas]);

  useEffect(() => {
    const recetasLocal = JSON.parse(localStorage.getItem('Recetas'));
    if (recetasLocal) {
      setRecetas(recetasLocal);
    }
  }, [])

  return (
    <>
      <h1>Recetas de Cocina: {recetaCount}</h1>
      <RecetasForm onSubmit={addReceta} recetas={recetas} />
      <ul className="flex gap-4 py-4">
        {recetas.map((receta) => (
          <li className="li-style">
            <RecetasItem receta={receta} />
          </li>
        ))}
      </ul>
    </>
  );
}
