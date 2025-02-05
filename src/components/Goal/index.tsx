import { Card, CardContent, CardHeader } from "@Minecart/components/Card";
import { useStore } from "@Minecart/contexts/providers/Store";

const Goal = () => {
  const store = useStore();

  if (!store?.widgets.goal.enabled) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="bg-primary pb-3">META DO MÊS</CardHeader>

      <CardContent className="flex flex-col gap-3">
        <div className="text-center">{store.widgets.goal.description}</div>
      </CardContent>
    </Card>
  );
};

export default Goal;
