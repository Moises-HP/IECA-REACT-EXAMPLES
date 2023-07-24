import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartProvider } from "./provider/CartProvider";
import Login from "./pages/Login";
import Auth from "./hoc/Auth";
import Protected from "./pages/auth/Protected";
import NewProduct from "./pages/auth/NewProduct";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <main className="min-h-screen flex flex-col">
          <NavBar />
          {/** Rutas sin proteger */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/carrito" exact element={<Cart />} />
            <Route path="/login" exact element={<Login />} />
            <Route
              path="/protected"
              exact
              element={
                <Auth>
                  <Protected />
                </Auth>
              }
            />
            <Route
              path="/nuevo-producto"
              exact
              element={
                <Auth>
                  <NewProduct />
                </Auth>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
