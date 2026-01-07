import React from 'react';
import { Table } from '@arco-design/web-react';

import imgMoe21 from '../public/img_PM1lb44WLocjdixafGCcM0qBnFs.png';
import imgMoe24 from '../public/img_NWpobfvJgoxSyEx1RgQcjjS8nAh.png';
import imgMoe66 from '../public/img_NEpJbVOZKoWz83xo0xzceJqxnqb.png';

const columns = [
  { title: '实验模型', width: 100, dataIndex: 'model' },
  { title: '卡数', width: 120, dataIndex: 'cards' },
  { title: 'Loss 曲线对比', width: 200, dataIndex: 'lossCurve' },
  { title: 'H800 / MLU590-M9DK 平均相对误差', dataIndex: 'avgError' },
  { title: '注释（开启确定性计算）', dataIndex: 'note' },
  { title: '结论', dataIndex: 'conclusion' },
];

const data = [
  {
    key: 'moe21',
    model: 'MOE-21B',
    cards: '2 机 16 卡',
    lossCurve: <img src={imgMoe21} alt="MOE-21B Loss 曲线" />,
    avgError: '0.0152%',
    note: '误差统计区间为后 3K steps，包含 5000–8062 iter。',
    conclusion: 'Loss 精度符合预期。',
  },
  {
    key: 'moe24',
    model: 'MOE-24B',
    cards: '4 机 32 卡',
    lossCurve: <img src={imgMoe24} alt="MOE-24B Loss 曲线" />,
    avgError: '0.084%',
    note: '误差统计区间为接近后 3K steps，约 5000–7982 iter。',
    conclusion: 'Loss 精度符合预期。',
  },
  {
    key: 'moe66',
    model: 'MOE-66B',
    cards: '30 机 240 卡',
    lossCurve: <img src={imgMoe66} alt="MOE-66B Loss 曲线" />,
    avgError: '0.307%',
    note: '统计区间为前 800 steps。',
    conclusion:
      '在 expert 负载均衡阶段 Loss 精度符合预期，后续 expert 不均衡时 Loss 对齐难度增大。',
  },
];

const GpuMluLossCompareTable: React.FC = () => {
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

export default GpuMluLossCompareTable;
