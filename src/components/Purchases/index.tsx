import { useStore } from "../../contexts/providers/Store";
import Card from '../Card';
import Img from "./../../components/Img";
import { getHelmByUsername } from "./../../helpers/minecraft";

const Purchases = () => {
  const store = useStore();

  if (!store?.widgets.purchases.enabled) {
    return null;
  }

  const title = store?.widgets.purchases.listing_type === "top" ?
    "TOP COMPRADORES" :
    "ÚLTIMOS COMPRADORES";

  return (
    <Card title={title} backgroundTitle="bg-primary">
      <div className="flex flex-col gap-3">
        {store?.widgets.purchases.list.map((player, index) => (
          <div key={player.buyer} className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <Img
                src={getHelmByUsername(player.buyer, 32)}
                className="rounded w-[32px]"
                effect="opacity"
                placeholderSrc="https://cdn.minecart.com.br/assets/img/steve_head_64x64.png"
              />

              {(index === 0) ? <img src="https://cdn.minecart.com.br/assets/img/icons/icon-crown.svg" className="w-[28px]" /> : null}

              <span>{player.buyer}</span>
            </div>

            {store.widgets.purchases.display_value ? <span>R$ {player.amount}</span> : null}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Purchases;