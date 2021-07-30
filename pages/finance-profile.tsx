import React, { useState } from "react";
import { FinanceProfileChart } from "../components/finance/FinanceProfileChart";
import IncomeTable from "../components/finance/IncomeTable";

const FinanceProfile = () => {
  const [yourMonthlyIncome, setYourMonthlyIncome] = useState("");

  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <FinanceProfileChart
        individualOccupation="Fireman"
        individualSalary="3000"
        maritalStatus="Single"
        numberOfChildren="3"
        spouseOccupation="Mailman"
        spouseSalary="3500"
      />

      <div className={"mt-8"}>
        <IncomeTable
          value={yourMonthlyIncome}
          setValue={setYourMonthlyIncome}
        />
      </div>
      {yourMonthlyIncome}
      {yourMonthlyIncome === "2" ? "TRUE" : "FALSE"}
    </div>
  );
};

export default FinanceProfile;
