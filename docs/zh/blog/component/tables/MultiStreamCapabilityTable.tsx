import React from 'react';
import { Table } from '@arco-design/web-react';

import imgMultiStream from '../public/img_R1IBbGwgToKCIUxY7ZLcZ0QTnzg.png';

const columns = [
  { title: '能力项', dataIndex: 'item' },
  { title: '需求与标准', dataIndex: 'requirement' },
  { title: '方案', dataIndex: 'plan' },
  { title: '测试结果', dataIndex: 'result' },
  { title: 'Comments', dataIndex: 'comment' },
];

const data = [
  {
    key: 'multistream',
    item: '多流并行能力',
    requirement:
      '单机多卡场景下，并行执行 GEMM 计算、通信、H2D / D2H 三类操作，对比单独执行与并发执行的性能。标准：暂无，结果合理即可。',
    plan: (
      <div>
        <p>
          为保证统计某一算子性能时，其余两个算子仍在执行，采用多进程方式：在统计目标算子性能前，单独起两个子进程无限循环执行其余两个算子；
          统计完成后再结束子进程。
        </p>
        <p>下图为以 P2P 和 H2D 为背景流，统计 GEMM 性能的时间曲线：</p>
        <img src={imgMultiStream} alt="多流并行时间线" />
      </div>
    ),
    result:
      '通过。在多流背景下，GEMM 算力约牺牲 10%，A2A 卡间通信几乎不受影响（IPU 算子优先级更高，可通过配置优先度进一步调整）。',
    comment:
      '在 gemm.shape: M=8192, K/N=8192/1024，a2a.shape: [8192, 12288]，h2d.shape: [8192, 8192] 的负载下：GEMM 有无背景流硬件时间约 625.9 µs vs. 626.0 µs；all-to-all 在背景流下带宽约为无背景流的 92.7%；H2D 几乎不受影响，主要瓶颈来自 A2A 与 GEMM 对 NoC 带宽的竞争。',
  },
];

const MultiStreamCapabilityTable: React.FC = () => {
  return (
    <Table
      pagination={false}
      scroll={{ x: 1600 }}
      border={{ wrapper: true, cell: true }}
      hover={false}
      columns={columns}
      data={data}
    />
  );
};

export default MultiStreamCapabilityTable;
