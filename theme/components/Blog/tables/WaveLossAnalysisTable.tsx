import React from 'react';
import { Table } from '@arco-design/web-react';
import { useLang } from 'rspress/runtime';

const imgStdVsLoss = '/blog/data/img_FPQKbhXsMoGlCxxmXROcsI5Fnyg.png';
const imgCapacityOff = '/blog/data/img_CuOAb71Lwoh090xYNHccgBzQn8g.png';

const getLocales = () => ({
  zh: {
    columns: [
      { title: '现象', width: 240, dataIndex: 'phenomenon' },
      { title: '可视化', width: 240, dataIndex: 'visual' },
      { title: 'Comments', width: 240, dataIndex: 'comment' },
    ],
    data: [
      {
        key: 'std-loss',
        phenomenon:
          '现象 1：监控 1200–1470 iter 的 expert token 分布，发现标准差与 loss 波动高度相关。',
        visual: (
          <img src={imgStdVsLoss} alt="expert token 标准差与 loss 的关系" />
        ),
        comment: '',
      },
      {
        key: 'capacity-off',
        phenomenon:
          '现象 2：关闭 capacity 后，loss 与 e2e time 波动呈相同趋势。',
        visual: (
          <img src={imgCapacityOff} alt="capacity 关闭后 loss 与 e2e time" />
        ),
        comment:
          '负载不均衡导致个别 rank 处理的 token 数量明显更多，从而 e2e time 增大，同时 loss 往往也更大。',
      },
    ],
  },
  en: {
    columns: [
      { title: 'Phenomenon', width: 240, dataIndex: 'phenomenon' },
      { title: 'Visualization', width: 240, dataIndex: 'visual' },
      { title: 'Comments', width: 240, dataIndex: 'comment' },
    ],
    data: [
      {
        key: 'std-loss',
        phenomenon:
          'Phenomenon 1: Monitoring expert token distribution during 1200–1470 iter reveals high correlation between standard deviation and loss fluctuation.',
        visual: (
          <img
            src={imgStdVsLoss}
            alt="Correlation between expert token std dev and loss"
          />
        ),
        comment: '',
      },
      {
        key: 'capacity-off',
        phenomenon:
          'Phenomenon 2: After disabling capacity, loss and e2e time fluctuations show the same trend.',
        visual: (
          <img
            src={imgCapacityOff}
            alt="Loss vs e2e time after disabling capacity"
          />
        ),
        comment:
          'Load imbalance causes some ranks to process significantly more tokens, increasing e2e time and often resulting in higher loss.',
      },
    ],
  },
});

const WaveLossAnalysisTable: React.FC = () => {
  const lang = useLang();
  const currentLang = lang === 'zh' ? 'zh' : 'en';
  const { columns, data } = getLocales()[currentLang];

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

export default WaveLossAnalysisTable;
