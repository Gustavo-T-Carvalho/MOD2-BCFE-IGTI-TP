import { getFormatedData } from '../Helpers/getFormatedData';

export default function Report({ report }) {
  let { month, year, rentability } = report;
  let rentabilityClassName =
    rentability >= 0 ? 'text-green-500' : 'text-red-500';
  let date = getFormatedData(month, year);
  return (
    <div className="border flex justify-between">
      <div className="flex space-x-7">
        <div className="ml-6 mr-2 w-11">{date}</div>
        <div className={rentabilityClassName}>R$ {report.value}</div>
      </div>

      <div className={`mr-6 ${rentabilityClassName}`}>
        {report.rentability}%
      </div>
    </div>
  );
}
