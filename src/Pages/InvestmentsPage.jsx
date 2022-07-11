import Header from '../Components/Header';
import Investments from '../Components/Investments';

import { investmentFilteredArray } from '../Data/investments';

export default function InvestmentsPage() {
  console.log(investmentFilteredArray);

  return (
    <div>
      <Header>React Investments</Header>
      {investmentFilteredArray.map(typeOfInvestment => {
        return (
          <Investments
            key={typeOfInvestment.id}
            typeOfInvestment={typeOfInvestment}
          >
            {' '}
          </Investments>
        );
      })}
    </div>
  );
}
