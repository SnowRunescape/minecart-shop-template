import { minecart } from 'minecart-sdk';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const CartProfile = () => {
  useDocumentTitle("Carrinho");

  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    minecart.cart.setUsername(username);
    navigate("/cart");
  }

  return (
    <div className="flex flex-col gap-3 border rounded bg-white mx-auto p-3" style={{
      width: 600
    }}>
      <div className="bg-yellow-100 rounded p-2">
        Ei amigo, informe seu nick corretamente, essa é a parte mais <b>IMPORTANTE</b> do processo!
      </div>

      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border p-2 rounded-l"
          placeholder="Exemplo: Steve"
          onChange={(e) => setUsername(e.target.value)}
          maxLength={16}
        />
        <button type="submit" className="bg-green-400 py-2 px-3 rounded-r">Continuar</button>
      </form>
    </div>
  );
}

export default CartProfile;