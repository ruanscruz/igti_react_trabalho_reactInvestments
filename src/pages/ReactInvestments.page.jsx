import { useState, useEffect } from 'react';
import { investmentsData } from '../service/investments.service';
import { CardInvestment, Header, Spinner } from '../components';
import { formatToPercent, formatToReal } from '../helpers/format.helper';

export default function ReactInvestments() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    setInvestments(investmentsData);
  }, []);

  return (
    <>
      <Header>react-investiments v.1.0.1</Header>
      <main>
        {investments.length === 0 ? (
          <Spinner />
        ) : (
          investments.map(investment => {
            const { id, description, rendiment, reports } = investment;
            return (
              <CardInvestment
                key={id}
                title={description}
                subtitle={'Rendimento total: '}
                valueRendiment={formatToReal(rendiment.value)}
                percentRendiment={formatToPercent(rendiment.percent)}
              >
                {reports}
              </CardInvestment>
            );
          })
        )}
      </main>
    </>
  );
}
