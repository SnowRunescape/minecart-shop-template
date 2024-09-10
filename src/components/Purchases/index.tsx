import { Card, CardContent, CardHeader } from "@Minecart/components/Card";
import Img from "@Minecart/components/Img";
import { useStore } from "@Minecart/contexts/providers/Store";
import { getHelmByUsername } from "@Minecart/helpers/minecraft";

const Purchases = () => {
  const store = useStore();

  if (!store?.widgets.purchases.enabled) {
    return null;
  }

  const title =
    store?.widgets.purchases.listing_type === "top"
      ? "TOP COMPRADORES"
      : "ÚLTIMOS COMPRADORES";

  return (
    <Card>
      <CardHeader className="bg-primary pb-3">{title}</CardHeader>

      <CardContent className="flex flex-col gap-3">
        {store?.widgets.purchases.list.map((player, index) => (
          <div key={player.buyer} className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <Img
                src={getHelmByUsername(player.buyer, 32)}
                className="rounded w-[32px]"
                effect="opacity"
                placeholderSrc="https://cdn.minecart.com.br/assets/img/steve_head_64x64.png"
              />

              {index === 0 ? (
                <img
                  src="https://cdn.minecart.com.br/assets/img/icons/icon-crown.svg"
                  className="w-[28px]"
                />
              ) : null}

              <span>{player.buyer}</span>
            </div>

            {store.widgets.purchases.display_value ? (
              <span>R$ {player.amount}</span>
            ) : null}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Purchases;
