

export const RecetasItem = ({ receta }) => {
    const { name, ingredientes, tiempoPreparacion, imgURL } = receta;
    return (
      <div>
        <h2>{name}</h2>
        <p>{ingredientes}</p>
        <p>{tiempoPreparacion} mins</p>
        <img src={imgURL} alt={name} />
      </div>
    );
}
