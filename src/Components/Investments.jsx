import Report from './Report';
export default function Investments({ typeOfInvestment }) {
  let { description, rentability, delta, reports } = typeOfInvestment;

  let investmentClassName =
    rentability >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <>
      <div className="border flex flex-col">
        <h2 className="mx-auto mt-4 align-middle text-2xl">{description}</h2>
        <br />
        <h3 className="mx-auto align-middle text-xl">
          Rendimento Total:{' '}
          <span className={investmentClassName}>
            R${delta} ({rentability}%)
          </span>
        </h3>
      </div>
      {reports.map(report => {
        return <Report report={report} key={report.id}></Report>;
      })}
    </>
  );
}
