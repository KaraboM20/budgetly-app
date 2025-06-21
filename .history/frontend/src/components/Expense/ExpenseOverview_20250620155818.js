import React, { useEffect } from 'react';
import { LuPlus } from 'react-icons/lu';
import { prepareExpenseBarChartData } from '../../utils/helper';

const ExpenseOverview = ({transactions, onExpenseIncome}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseBarLineData(transactions);
        setChartData(result);

        return() => {};
    }, [transactions]);
    
  return (
    <div>
      
    </div>
  )
}

export default ExpenseOverview
