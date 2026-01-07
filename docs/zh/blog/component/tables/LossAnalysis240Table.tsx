import React from 'react';
import { Table } from '@arco-design/web-react';

import imgStep1to800 from '../public/img_APo9bTXs1oQcbhxfVZXciOMbnLe.png';
import imgStep2311to3184 from '../public/img_Ps7jbEjtto3K1QxBA3UctGmCnWg.png';
import imgStep635to2311 from '../public/img_Fg3qbMKxco0RZIxweYqcNaHIn1y.png';
import imgH800Twice from '../public/img_QdSQbaOMGoGDAzxr8nYcijNZnrb.png';

const columns = [
  { title: '训练 step 区间', width: 240, dataIndex: 'step' },
  { title: '平均相对误差', width: 240, dataIndex: 'avgError' },
  { title: 'Loss 曲线图', dataIndex: 'lossCurve' },
  { title: 'Comments', dataIndex: 'comment' },
];

const data = [
  {
    key: '1-800',
    step: '1–800 step',
    avgError: '0.307%',
    lossCurve: <img src={imgStep1to800} alt="1-800 step Loss 曲线" />,
    comment: '初始阶段 loss 基本对齐。',
  },
  {
    key: '2311-3184',
    step: '2311–3184 step',
    avgError: '0.554%',
    lossCurve: <img src={imgStep2311to3184} alt="2311-3184 step Loss 曲线" />,
    comment: '移除 H800 在 3100 step 的 loss 凸起之后的对比。',
  },
  {
    key: '635-2311',
    step: '635–2311 step',
    avgError: '1.9%',
    lossCurve: <img src={imgStep635to2311} alt="635-2311 step Loss 曲线" />,
    comment: 'Loss 呈波浪形且难以对齐，怀疑与 expert 不均衡有关。',
  },
  {
    key: 'h800-two-runs',
    step: 'H800 两次训练',
    avgError: '2.24%',
    lossCurve: <img src={imgH800Twice} alt="H800 两次训练 Loss 对比" />,
    comment: 'GPU 上也观察到类似波动现象。',
  },
];

const LossAnalysis240Table: React.FC = () => {
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

export default LossAnalysis240Table;
