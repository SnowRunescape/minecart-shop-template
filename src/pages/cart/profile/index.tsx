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
    <div className="soft-panel mx-auto flex w-full max-w-2xl flex-col gap-5 p-6">
      <div>
        <h1 className="section-title">Dados do comprador</h1>
        <p className="mt-1 text-sm text-gray-500">
          Informe o nick que recebera os produtos no servidor.
        </p>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
        Ei amigo, informe seu nick corretamente, essa é a parte mais{" "}
        <b>IMPORTANTE</b> do processo!
      </div>

      <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exemplo: Steve"
          onChange={(e) => setUsername(e.target.value)}
          maxLength={16}
          defaultValue={username}
        />

        <button type="submit" className="btn btn-success shrink-0">
          {t("words.continue")}
        </button>
      </form>
    </div>
  );
};

export default CartProfile;
