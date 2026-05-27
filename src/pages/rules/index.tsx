import { Card, CardContent } from "@Minecart/components/Card";
import NotFound from "@Minecart/components/NotFound";
import RuleComponent from "@Minecart/components/Rule";
import useDocumentTitle from "@Minecart/hooks/useDocumentTitle";
import { useGetRules } from "@Minecart/services/rules";

const Rules = () => {
  useDocumentTitle("Regras");

  const { data: rules, isLoading } = useGetRules();

  if (isLoading) {
    return "carregando";
  }

  if (!rules?.length) {
    return (
      <NotFound
        title="Nenhuma regra publicada"
        description="Não foi publicado nenhuma regra ate o momento!"
      />
    );
  }

  return (
    <div className="page-stack">
      <div>
        <h1 className="section-title">Regras</h1>
        <p className="mt-1 text-sm text-gray-500">
          Consulte as regras e suas penalidades.
        </p>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4">
          {rules.map((rule) => (
            <RuleComponent key={rule.id} rule={rule} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Rules;
