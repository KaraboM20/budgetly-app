import React, { useEffect, useState } from 'react'
import CustomPieChart from '../Charts/CustomPieChart'

const RecentIncomeWithChart = ({data, totalIncome}) => {

    const [chartData, setChartData] = useState([]);
    const prepareChartData = () => {
        const dataArr = data?.map((item) => ({
            name: item?.source,
            amount: item?.amount,
    }));

    setChartData(dataArr);
    };

    useEffect(() => {
        prepareChartData();

        return() => {};
    }, [data]);


  return (
    <div>
      <div>
        <h5>Last 60 Days Income</h5>
      </div>

      <CustomPieChart data={chartData}
      label="Total Income" totalAmount={`$${totalIncome}`}
      showTextAnchor
      colors={COLORS}
      />
    </div>
  )
}

export default RecentIncomeWithChart
