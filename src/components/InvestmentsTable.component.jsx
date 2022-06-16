import {
  formatToDate,
  formatToPercent,
  formatToReal,
} from '../helpers/format.helper';

function InvestmentsTable({ children: reports }) {
  return (
    <table className="w-full text-center">
      <tbody>
        {reports.map(report => {
          const { id, month, year, value, percent } = report;
          const gainOrLoss =
            percent === 0
              ? ''
              : percent < 0
              ? 'text-red-500'
              : 'text-green-500';
          return (
            <tr className="text-sm" key={id}>
              <td>{formatToDate(month, year)}</td>
              <td className={gainOrLoss}>{formatToReal(value)}</td>
              <td className={gainOrLoss}>{formatToPercent(percent)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export { InvestmentsTable };
