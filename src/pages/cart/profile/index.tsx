import useDocumentTitle from "@Minecart/hooks/useDocumentTitle";
import useSideBar from "@Minecart/hooks/useSideBar";
import { t } from "i18next";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

const CartProfile = () => {
  useDocumentTitle("Carrinho");
  useSideBar(false);

  const [username, setUsername] = useLocalStorageState(
    "minecart-store-username",
    {
      defaultValue: "",
    }
  );

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/cart");
  };

  return (
    <div
      className="flex flex-col gap-3 border rounded bg-white mx-auto p-3"
      style={{
        width: 600,
      }}
    >
      <div className="bg-yellow-100 rounded p-2">
        Ei amigo, informe seu nick corretamente, essa é a parte mais{" "}
        <b>IMPORTANTE</b> do processo!
      </div>

      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border p-2 rounded-l"
          placeholder="Exemplo: Steve"
          onChange={(e) => setUsername(e.target.value)}
          maxLength={16}
          defaultValue={username}
        />

        <button type="submit" className="bg-success py-2 px-3 rounded-r">
          {t("words.continue")}
        </button>
      </form>
    </div>
  );
};

export default CartProfile;
