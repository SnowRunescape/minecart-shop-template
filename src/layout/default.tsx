import { Link, Outlet } from 'react-router-dom';

const Default = () => {
  return (
      <div className="flex flex-col gap-10">
        <header className="flex gap-3 bg-primary p-3">
          <Link to="/" className="bg-white py-2 px-4">Inicio</Link>
          <Link to="/shop" className="bg-white py-2 px-4">Loja</Link>
          <Link to="/rules" className="bg-white py-2 px-4">Regras</Link>
          <Link to="/team" className="bg-white py-2 px-4">Equipe</Link>
        </header>

        <div className="container">
          <Outlet />
        </div>

        <footer className="text-center">
          Demo ® Todos os direitos reservados!
        </footer>
      </div>
  );
}

export default Default;