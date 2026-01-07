import React from 'react';
import { Table } from '@arco-design/web-react';

import imgAllReduce1 from '../public/img_QZnHbYLJFoqtq1xc50ycu4rZn3Y.png';
import imgAllReduce2 from '../public/img_DX2QbPPzko3kLVx2Oc3cMToGnyh.png';

const columns = [
  { title: '通信原语', width: 120, dataIndex: 'op' },
  { title: '测试数据生成逻辑', width: 240, dataIndex: 'logic' },
  { title: '相对误差图（(MLU-golden) / golden）', dataIndex: 'plot' },
  { title: '合理性', width: 240, dataIndex: 'comment' },
];

const data = [
  {
    key: 'allreduce-1',
    op: 'All Reduce',
    logic: '[rand(1)] × 1024',
    plot: <img src={imgAllReduce1} alt="AllReduce 相对误差（rand(1)）" />,
    comment:
      '8 卡 all reduce 与 CPU 本地累加结果几乎一致，相对 FP64 结果的精度误差小于 1%。',
  },
  {
    key: 'allreduce-10',
    op: 'All Reduce',
    logic: '[rand(1) * 10] × 1024',
    plot: <img src={imgAllReduce2} alt="AllReduce 相对误差（rand(1)*10）" />,
    comment:
      '放大方差后，相对误差保持稳定，与 FP64 结果精度误差仍小于 1%，与 CPU 累加值对齐。',
  },
];

const AllReduceAccuracyTable: React.FC = () => {
  return (
    <Table
      pagination={false}
      border={{ wrapper: true, cell: true }}
      hover={false}
      columns={columns}
      data={data}
    />
  );
};

export default AllReduceAccuracyTable;
