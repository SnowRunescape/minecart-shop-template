import { Card, CardContent, CardHeader } from "@Minecart/components/Card";
import { useStore } from "@Minecart/contexts/providers/Store";

const Goal = () => {
  const store = useStore();

  if (!store?.widgets.goal.enabled) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="rounded-t-lg bg-primary pb-5 text-white">META DO MÊS</CardHeader>

      <CardContent className="flex flex-col gap-3">
        <div className="text-center text-sm text-gray-600">{store.widgets.goal.description}</div>
      </CardContent>
    </Card>
  );
};

export default Goal;
