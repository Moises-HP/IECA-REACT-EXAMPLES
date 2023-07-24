import { Link } from "react-router-dom";
import { auth } from "..";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const { user, signOutApp } = useAuth();

  return (
    <nav className="h-20 w-full bg-black p-4 flex justify-between text-white items-center">
      <Link to="/">
        <span>FakeStore</span>
      </Link>
      {!user ? (
        <Link to="/login">
          <span className="bg-white text-black p-2 rounded-lg">
            Iniciar sesión
          </span>
        </Link>
      ) : (
        <button
          onClick={() => {
            signOutApp();
            alert("Sesión cerrada");
          }}
          className="underline"
        >
          Cerrar sesión
        </button>
      )}
      <Link to="/carrito">
        <span>Carrito</span>
      </Link>
    </nav>
  );
};

export default NavBar;
