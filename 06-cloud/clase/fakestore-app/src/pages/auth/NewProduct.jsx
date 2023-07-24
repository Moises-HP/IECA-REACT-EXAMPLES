import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../index";

const NewProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });
  const [loadingForm, setLoadingForm] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoadingForm(true);
      const docRef = await addDoc(collection(firestore, "products"), formData);
      console.log("Document written with ID: ", docRef);
      setFormData({
        title: "",
        description: "",
        price: 0,
        image: "",
      });
      setLoadingForm(false);
    } catch (e) {
      console.log(e);
      setLoadingForm(false);
      alert("Error al escribir objeto");
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-4 p-4 max-w-xl">
      <h1>Nuevo producto</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Título</label>
          <input
            className="border border-gray-500 p-2 "
            name="title"
            value={formData.title}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="description">Descripción</label>
          <input
            className="border border-gray-500 p-2 "
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Precio</label>
          <input
            className="border border-gray-500 p-2 "
            name="price"
            type="text"
            value={formData.price}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image">Imagen</label>
          <input
            className="border border-gray-500 p-2 "
            name="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
          ></input>
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded-lg"
          disabled={loadingForm}
        >
          {loadingForm ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
