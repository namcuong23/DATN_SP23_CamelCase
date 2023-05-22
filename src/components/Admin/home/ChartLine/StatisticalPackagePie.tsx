// @ts-nocheck
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import { Order } from '../../../../interface/admin/order';
interface ChildComponentProps {
  PackageHistory: Order[];
}
interface ChartData {
  [x: string]: any;
  Date: string;
  scales: string,
}
const StatisticalPackagePie : React.FC<ChildComponentProps> = ({ PackageHistory }) =>{

  const Dangky = PackageHistory?.filter((data)=>{
    return data.order_status == true;
  })
  const DangCho =PackageHistory?.filter((data)=>{
    return data.order_status == false;
  })
  const data = [
    {
      type: 'Đăng ký',
      value: Dangky?.length,
    },
    {
      type: 'Đang chờ',
      value: DangCho?.length,

    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
  };
  return <Pie {...config} />;
};

export default StatisticalPackagePie
