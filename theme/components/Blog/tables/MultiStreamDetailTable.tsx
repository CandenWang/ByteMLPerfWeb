import React from 'react';
import { Table } from '@arco-design/web-react';

const columns = [
  { title: 'dtype', dataIndex: 'dtype' },
  { title: 'shape', dataIndex: 'shape' },
  {
    title: '无背景流',
    children: [
      { title: 'gemm', dataIndex: 'noBgGemm' },
      { title: 'a2a', dataIndex: 'noBgA2a' },
      { title: 'h2d', dataIndex: 'noBgH2d' },
    ],
  },
  {
    title: '有背景流',
    children: [
      { title: 'gemm', dataIndex: 'bgGemm' },
      { title: 'a2a', dataIndex: 'bgA2a' },
      { title: 'h2d', dataIndex: 'bgH2d' },
    ],
  },
];

const data = [
  {
    key: 'bfloat16',
    dtype: 'bfloat16',
    shape:
      'gemm_M: 8192, gemm_N: 8192, gemm_K: 1024; a2a_batch_size: 8192, a2a_dim_size: 12288; h2d_batch_size: 8192, h2d_dim_size: 8192',
    noBgGemm: 'gemm latency: 627.4 µs; hardware time: 625.9 µs',
    noBgA2a: 'latency ≈ 537 µs；总线带宽 bus_bw_list ≈ 328 GB/s（多次测量）',
    noBgH2d: 'h2d latency: 12664.2 µs; hardware time: 5589.7 µs',
    bgGemm: 'gemm latency: 628.0 µs; hardware time: 626.0 µs',
    bgA2a:
      'latency ≈ 575–579 µs；总线带宽 bus_bw_list ≈ 304–306 GB/s（约为无背景流的 92.7%）',
    bgH2d: 'h2d latency: 11587.0 µs; hardware time: 5601.4 µs',
  },
];

const MultiStreamDetailTable: React.FC = () => {
  return (
    <Table
      pagination={false}
      scroll={{ x: 1600 }}
      className="mt-3"
      border={{ wrapper: true, cell: true }}
      hover={false}
      columns={columns}
      data={data}
    />
  );
};

export default MultiStreamDetailTable;
