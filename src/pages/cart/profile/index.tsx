import React from 'react';

const CartProfile = () => {
  return (
    <div className="flex flex-col gap-3 border rounded bg-white mx-auto p-3" style={{
      width: 600
    }}>
      <div className="bg-yellow-100 rounded p-2">
        Ei amigo, informe seu nick corretamente, essa é a parte mais <b>IMPORTANTE</b> do processo!
      </div>

      <div className="flex">
        <input className="w-full border p-2 rounded-l" type="text" placeholder="Exemplo: Steve" />
        <button className="bg-green-400 py-2 px-3 rounded-r">Continuar</button>
      </div>
    </div>
  );
}

export default CartProfile;