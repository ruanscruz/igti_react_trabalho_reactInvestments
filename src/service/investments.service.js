import { dataInvestments } from '../repositories/investments.repository';
const { investments, reports } = dataInvestments;

const investmentsData = investments.map(investments => {
  const investiment = {
    ...investments,
    reports: reports
      .filter(report => report.investmentId === investments.id)
      .sort((a, b) => a.month - b.month)
      .map((report, index, reports) => {
        if (index === 0) {
          return { ...report, percent: 0 };
        }

        const prevsValue = reports[index - 1].value;
        const currValue = report.value;
        const percent = (currValue / prevsValue - 1) * 100;

        return { ...report, percent };
      }),
  };

  const { reports: occurrence } = investiment;

  return {
    ...investiment,
    rendiment: (() => {
      const first = occurrence[0].value;
      const last = occurrence[occurrence.length - 1].value;
      return { value: last - first, percent: (last / first - 1) * 100 };
    })(),
  };
});

export { investmentsData };
