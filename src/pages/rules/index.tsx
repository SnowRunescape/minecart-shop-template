import NotFound from '../../components/NotFound';
import RuleComponent from '../../components/Rule';
import { useGetRules } from '../../services/rules';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Rules = () => {
  useDocumentTitle("Regras");

  const {data: rules, isLoading} = useGetRules();

  if (isLoading) {
    return "carregando";
  }

  if (!rules?.length) {
    return (
      <NotFound
        title="Nenhuma regra publicada"
        description="Não foi publicado nenhuma regra ate o momento!"
      />
    )
  }

  return rules.map(rule => <RuleComponent key={rule.id} rule={rule} />);
}

export default Rules;