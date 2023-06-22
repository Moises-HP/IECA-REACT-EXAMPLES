

export const RecetasForm = ({ onSubmit, recetas }) => {
    const submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form[0].value;
        const ingredientes = form[1].value;
        const tiempoPreparacion = form[2].value;
        const imgURL = form[3].value;
        const receta = { name, ingredientes, tiempoPreparacion, imgURL };
        localStorage.setItem('Recetas', [...recetas, JSON.stringify(receta)])
        onSubmit(receta);
        form.reset();
      };
    
      return (
        <form onSubmit={submit}>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Ingredientes" />
          <input type="number" placeholder="Tiempo de preparación" />
          <input type="text" placeholder="URL de la imagen" />
          <button type="submit">Agregar</button>
        </form>
      );
}
