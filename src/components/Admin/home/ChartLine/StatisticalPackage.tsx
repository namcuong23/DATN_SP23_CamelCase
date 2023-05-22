// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { Order } from '../../../../interface/admin/order';

interface ChildComponentProps {
  PackageHistory: Order[];
}
interface ChartData {
  [x: string]: any;
  Date: string;
  scales: string,
}
const StatisticalPackage: React.FC<ChildComponentProps> = ({ PackageHistory }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Lưu ý rằng tháng trong JavaScript được đánh số từ 0 đến 11
  const currentYear = currentDate.getFullYear();
  const [data, setData] = useState<Order[]>([]);
  useEffect(() => {
    setData(PackageHistory)
  },[])

  const [dataLine, setDataLine] = useState<ChartData[]>([]);
  const inMonthArray = data?.filter((item) => {
    const createdAt = new Date(item.createdAt);
    const itemMonth = createdAt.getMonth() + 1;
    return itemMonth === currentMonth;
  });
  const theMoneyinMonthArray = inMonthArray?.map((item) => item.order_price);
  const lastMonthArray = data?.filter((item) => {
    const createdAt = new Date(item.createdAt);
    const itemMonth = createdAt.getMonth();
    return itemMonth === currentMonth;
  });
  const theMoneylastMonthArray = lastMonthArray?.map((item) => item.order_price);

  const twoMonthAgo = data?.filter((item) => {
  const createdAt = new Date(item.createdAt);
  const itemMonth = createdAt.getMonth();
  return itemMonth === currentMonth - 2;
});
  const theMoneytwoMonthAgo = twoMonthAgo?.map((item) => item.order_price);
  const dataArray = [
    {
      "Date": `${currentMonth - 2} - ${currentYear}`,
      "scales": JSON.stringify(theMoneytwoMonthAgo),
    }, {
      "Date": `${currentMonth - 1} - ${currentYear}`,
      "scales": JSON.stringify(theMoneylastMonthArray),
    }, {
      "Date": `${currentMonth} - ${currentYear}`,
      "scales": JSON.stringify(theMoneyinMonthArray),
    },
  ]
  useEffect(() => {
    setDataLine(dataArray);
  }, []);
  const config = {
    data: dataLine,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
  };

  return <Line {...config} />;
};

export default StatisticalPackage