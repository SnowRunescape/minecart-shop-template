import React, { useMemo, useState } from 'react';
import NotFound from '../../components/NotFound';
import RuleComponent from '../../components/Rule';
import { Rule, minecart } from 'minecart-sdk';

const Rules = () => {
  const [rules, setRules] = useState<Rule[]>([]);

  useMemo(() => {
    const fetchTeam = async () => {
      const team = await minecart.rules.all();

      setRules(team);
    }

    fetchTeam();
  }, []);

  if (!rules.length) {
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