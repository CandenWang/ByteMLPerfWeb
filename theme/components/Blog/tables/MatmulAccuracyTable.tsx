import React from 'react';
import { Table } from '@arco-design/web-react';

const imgMatmul = '/blog/data/img_MMgWbx0W0oYSkqxFf6acrSECnIc.png';

const columns = [
  { title: '算子', dataIndex: 'op' },
  { title: '测试数据生成逻辑', dataIndex: 'logic' },
  { title: '相对误差图（(MLU-golden) / golden）', dataIndex: 'plot' },
  { title: '合理性', dataIndex: 'comment' },
];

const data = [
  {
    key: 'matmul-bf16',
    op: 'Matmul（bfloat16 做输入）',
    logic:
      'M × K × N，M = N = 4096，K 从 2 增长到 2^15（2, 4, 8, 16 ... 2^15）',
    plot: <img src={imgMatmul} alt="Matmul 相对误差曲线" />,
    comment:
      '由于累加颗粒度不同，MLU590 在 K 轴累加时没有出现明显更大的误差，整体误差稳定。',
  },
];

const MatmulAccuracyTable: React.FC = () => {
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

export default MatmulAccuracyTable;
