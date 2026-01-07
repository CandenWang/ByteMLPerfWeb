import React from 'react';
import { Table } from '@arco-design/web-react';

import imgGpuLoss from '../public/img_UR9sbU81Bo7YKIxAd3FcyiQ2n7d.png';
import imgMluLoss from '../public/img_MAJFbk1zpojc7Hxc1vHc0Dhjnad.png';
import imgLossDiff from '../public/img_AxULbhDk9oS0tYx2Vu0cGVcMnQf.png';

const columns = [
  {
    title: '测试方法',
    dataIndex: 'method',
    render: (value, _record, index) => {
      const currentMethod = data[index].method;

      if (index > 0 && data[index - 1].method === currentMethod) {
        return {
          children: null,
          props: { rowSpan: 0 },
        };
      }

      let span = 1;
      for (let i = index + 1; i < data.length; i++) {
        if (data[i].method === currentMethod) {
          span += 1;
        } else {
          break;
        }
      }

      return {
        children: currentMethod,
        props: { rowSpan: span },
      };
    },
  },
  { title: '模型', dataIndex: 'model' },
  { title: 'Device', dataIndex: 'device' },
  { title: 'Loss 曲线', dataIndex: 'lossCurve' },
  { title: '相对误差对比', dataIndex: 'relative' },
];

const methodText =
  '使用 PyTorch FSDP 并行策略，在 8 卡 GPU（A100）和 8 卡 MLU（MLU590-M9DK）环境下，固定种子与初始参数，对比每 50 step 的 loss 差别。';

const modelText =
  'GPT-3 (vocab_size=50257, d_model=512, num_heads=8, num_layers=12, dim_feedforward=2048, max_seq_len=1024)';

const data = [
  {
    key: 'gpu',
    method: methodText,
    model: modelText,
    device: 'GPU-A800',
    lossCurve: <img src={imgGpuLoss} alt="GPU Loss 曲线" />,
    relative: <img src={imgLossDiff} alt="GPU vs MLU Loss 相对误差" />,
  },
  {
    key: 'mlu',
    method: methodText,
    model: modelText,
    device: 'MLU-590D',
    lossCurve: <img src={imgMluLoss} alt="MLU Loss 曲线" />,
    relative: null,
  },
];

const FsdpAccuracyTable: React.FC = () => {
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

export default FsdpAccuracyTable;
