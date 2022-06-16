import { InvestmentsTable } from './InvestmentsTable.component';
import { Item } from './Item.component';

function CardInvestment({
  title = 'Nome do Fundo',
  subtitle = 'Rendimento',
  valueRendiment = 0,
  percentRendiment = 0,
  children: reports = [],
}) {
  return (
    <section className="flex flex-col justify-center md:w-2/4 mx-auto my-4 border-2 border-gray-300">
      <div className="flex-col text-center font-semibold m-3">
        <div className="pb-4">
          <h2>{title}</h2>
          <h3 className="text-xs">
            {subtitle}
            <Item valueRendiment={valueRendiment} /> (
            <Item percentRendiment={percentRendiment} />)
          </h3>
        </div>
        <div>
          <InvestmentsTable>{reports}</InvestmentsTable>
        </div>
      </div>
    </section>
  );
}

export { CardInvestment };
