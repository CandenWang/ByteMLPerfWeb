import React from 'react';
import { Table } from '@arco-design/web-react';

const columns = [
  {
    title: '对比项',
    dataIndex: 'category',
    width: 120,
    render: (value: string, _record: any, index: number) => {
      const currentCategory = data[index].category;
      // 如果上一行是同一分类，则隐藏当前单元格
      if (index > 0 && data[index - 1].category === currentCategory) {
        return {
          children: null,
          props: { rowSpan: 0 },
        };
      }

      // 统计向下连续相同分类的行数，作为 rowSpan
      let span = 1;
      for (let i = index + 1; i < data.length; i++) {
        if (data[i].category === currentCategory) {
          span += 1;
        } else {
          break;
        }
      }

      return {
        children: currentCategory,
        props: { rowSpan: span },
      };
    },
  },
  {
    title: '子项',
    width: 120,
    dataIndex: 'item',
  },
  {
    title: '寒武纪 590DK',
    dataIndex: 'mlu',
  },
  {
    title: 'NVIDIA A800 80GB SXM',
    dataIndex: 'a800',
  },
  {
    title: 'NVIDIA H800 80GB SXM',
    dataIndex: 'h800',
  },
];

const data = [
  {
    key: 'arch',
    category: '架构',
    item: '',
    mlu: 'MLU-v05',
    a800: 'NVIDIA Ampere',
    h800: 'NVIDIA Hopper',
  },
  {
    key: 'engine',
    category: 'Computing Engine',
    item: '',
    mlu: 'TFU',
    a800: 'Tensor Core',
    h800: 'Tensor Core',
  },
  {
    key: 'compute-tensor',
    category: '算力',
    item: 'TensorCore',
    mlu: '60 TFLOPS@FP32; 121 TFLOPS@TF32; 242 TFLOPS@FP16/BF16; 484 TOPS@INT8',
    a800: '19.5 TFLOPS@FP64; 156 TFLOPS@TF32; 312 TFLOPS@BF16/FP16; 624 TOPS@INT8',
    h800: '1 TFLOPS@FP64; 67 TFLOPS@FP32; 494.5 TFLOPS@TF32; 990 TFLOPS@BF16/FP16; 1979 TOPS@INT8',
  },
  {
    key: 'compute-vector',
    category: '算力',
    item: 'VECTOR',
    mlu: '聚合算力：3.8 TFLOPS@FP32; 3.8 TFLOPS@BF16; 15 TFLOPS@FP16',
    a800: '9.7 TFLOPS@FP64; 19.5 TFLOPS@FP32; 39 TFLOPS@FP16/BF16',
    h800: '1 TFLOPS@FP64; 66.9 TFLOPS@FP32; 133.8 TFLOPS@FP16/BF16',
  },
  {
    key: 'comm-intra',
    category: '通信（双向）',
    item: '机内',
    mlu: 'MLU-Link 371 GB/s',
    a800: 'NV-LINK 3.0 400 GB/s',
    h800: 'NV-LINK 3.0 400 GB/s',
  },
  {
    key: 'comm-inter',
    category: '通信（双向）',
    item: '机间',
    mlu: 'RoCE 4×400 Gb/s',
    a800: 'RoCE 200 Gb/s',
    h800: 'RoCE 200 Gb/s',
  },
  {
    key: 'memory-cap',
    category: '内存',
    item: '容量',
    mlu: '80 GB',
    a800: '80 GB HBM2e',
    h800: '80 GB HBM2e',
  },
  {
    key: 'memory-bw',
    category: '内存',
    item: '带宽',
    mlu: '2.3 TB/s',
    a800: '2 TB/s',
    h800: '3.352 TB/s',
  },
  {
    key: 'power',
    category: '功耗（TDP）',
    item: '',
    mlu: '470 W',
    a800: '400 W',
    h800: '700 W',
  },
  {
    key: 'process',
    category: '制程',
    item: '',
    mlu: '-',
    a800: '7 nm',
    h800: '4 nm',
  },
];

const ParamCompareTable: React.FC = () => {
  return (
    <Table
      pagination={false}
      hover={false}
      columns={columns}
      data={data}
      border={{ wrapper: true, cell: true }}
    />
  );
};

export default ParamCompareTable;
