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
      <CardHeader className="rounded-t-lg bg-primary pb-5 text-white">{title}</CardHeader>

      <CardContent className="flex flex-col gap-3">
        {store?.widgets.purchases.list.map((player, index) => (
          <div key={player.buyer} className="flex items-center justify-between gap-3 rounded-lg bg-gray-50 p-2">
            <div className="flex min-w-0 items-center gap-2">
              <Img
                src={getHelmByUsername(player.buyer, 32)}
                className="h-8 w-8 rounded"
                effect="opacity"
                placeholderSrc="https://cdn.minecart.com.br/assets/img/steve_head_64x64.png"
              />

              {index === 0 ? (
                <img
                  src="https://cdn.minecart.com.br/assets/img/icons/icon-crown.svg"
                  className="h-6 w-6"
                />
              ) : null}

              <span className="truncate text-sm font-semibold">{player.buyer}</span>
            </div>

            {store.widgets.purchases.display_value ? (
              <span className="shrink-0 text-sm font-bold text-gray-950">R$ {player.amount}</span>
            ) : null}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Purchases;
