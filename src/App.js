import { useState, useEffect } from 'react';
import { investmentsData } from './service/investments.service';

import Header from './components/Header';
import Section from './components/Section';
import Table from './components/Table';

export default function App() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    setInvestments(investmentsData);
  }, []);

  return (
    <div>
      <Header>react-investiments v.1.0.1</Header>
      <div className="m-4">
        <Section titulo="Fundo de Ações" subtitulo="Rendimento total: " />
        <Table />
      </div>
      <div className="m-4">
        <Section
          titulo="Fundo de Criptomoedas"
          subtitulo="Rendimento total: "
        />
      </div>
    </div>
  );
}
