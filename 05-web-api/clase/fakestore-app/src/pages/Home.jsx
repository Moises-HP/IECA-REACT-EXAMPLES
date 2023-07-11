import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProducts } = useAPI();

  const [buscadorName, setBuscadorName] = useState('');

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  //*estados de la barra de busqueda
  const [InputValue, setInputValue] = useState('');

  //*control escritura de la barra de busqueda
  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  }

  //*control de busqueda de la barra de busqueda
  const handleSubmit = (e) => {
      e.preventDefault();
      
      if( InputValue.trim().length >= 0){
        setBuscadorName(InputValue);
        setInputValue('');
      }
  }

  const getBusqueda = (buscadorName) => {
    let productsbusqueda = products.filter( product => (product.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(buscadorName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))));
    return productsbusqueda;
  }

  return (
    <div className="flex-1 flex flex-col gap-4 p-4">
      <h1>FakeStore</h1>

      
      <form className="" onSubmit={handleSubmit}>
        <input 
          className="" 
          type="search" 
          placeholder="Buscar productos..." 
          aria-label="Search"
          value= {InputValue}
          onChange={ handleInputChange }
        />
        
        <button className="" onClick={handleSubmit}>
        </button>
      </form>
      

      {loading && <p>Cargando...</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {!loading &&

        (buscadorName === '') ?

        products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))

        : 

          (getBusqueda(buscadorName).length === 0) ?
          <span>Sin productos que coincidan</span>
          :
          getBusqueda(buscadorName).map((product) => (
              <ProductItem key={product.id} product={product} />
          ))
      }
      </div>
    </div>
  );
};

export default Home;
