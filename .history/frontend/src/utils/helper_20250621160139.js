import moment from 'moment';
export const validateEmail = (email) => {
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]+$/;
    return regex.test(email);
};

export const getInitials = (name) => {
    if (!name) return "";

    const words = name.split(" ");
    let initials = "";

    for (let i = 0; i < Math.min(words.length, 2); i++) {
        initials += words[i][0];
    }

    return initials.toUpperCase();
};



export const prepareExpenseBarChartData = (data = []) => {
  const dataArray = Array.isArray(data) ? data : [];

  const chartData = dataArray.map((item) => ({
    category: item?.category || 'Unknown',
    amount: item?.amount || 0,
  }));

  return chartData;
};

export const prepareIncomeBarChartData = (data = []) => {
   const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

   const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format('Do MMM'),
    amount: item?.amount,
    source: item?.source,
   }));

   return chartData;
};

export const prepareExpenseBarLineData = (data = []) => {
   const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
   
   const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format('Do MMM'),
    amount: item?.amount,
    category: item?.category,
   }));

   return chartData;
};