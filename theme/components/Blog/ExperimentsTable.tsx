import React from 'react';
import { Table } from '@arco-design/web-react';
import { useLang } from 'rspress/runtime';

interface ExperimentRow {
  key: string;
  prefill: string;
  model1Sim: string;
  model1Real: string;
  model2Sim: string;
  model2Real: string;
}

const data: ExperimentRow[] = [
  {
    key: '1024',
    prefill: '1024',
    model1Sim: '61.75ms (-5.37%)',
    model1Real: '65.26ms',
    model2Sim: '73.09ms (+4.02%)',
    model2Real: '70.27ms',
  },
  {
    key: '2048',
    prefill: '2048',
    model1Sim: '88.38ms (-0.73%)',
    model1Real: '89.03ms',
    model2Sim: '102.00ms (+3.78%)',
    model2Real: '98.28ms',
  },
  {
    key: '4096',
    prefill: '4096',
    model1Sim: '144.48ms (-4.56%)',
    model1Real: '151.39ms',
    model2Sim: '175.69ms (+3.35%)',
    model2Real: '170.00ms',
  },
  {
    key: '8192',
    prefill: '8192',
    model1Sim: '289.18ms (+2.04%)',
    model1Real: '283.39ms',
    model2Sim: '332.11ms (+1.32%)',
    model2Real: '327.77ms',
  },
  {
    key: '16384',
    prefill: '16384',
    model1Sim: '668.57ms (-0.99%)',
    model1Real: '675.26ms',
    model2Sim: '761.38ms (+0.31%)',
    model2Real: '758.31ms',
  },
  {
    key: '32768',
    prefill: '32768',
    model1Sim: '1782.72ms (-0.39%)',
    model1Real: '1789.78ms',
    model2Sim: '2005.61ms (-3.90%)',
    model2Real: '2086.07ms',
  },
];

const locales = {
  zh: {
    prefillLength: 'prefill 长度',
    model1Title: '模型 1 仿真 & 实际结果（相对误差）',
    model2Title: '模型 2 仿真 & 实际结果（相对误差）',
    simulation: '仿真',
    real: '实际',
  },
  en: {
    prefillLength: 'prefill length',
    model1Title: 'Model 1 Simulation & Real Results (Relative Error)',
    model2Title: 'Model 2 Simulation & Real Results (Relative Error)',
    simulation: 'Simulation',
    real: 'Real',
  },
};

const ExperimentsTable: React.FC = () => {
  const lang = useLang();
  const t = locales[lang === 'zh' ? 'zh' : 'en'];

  const columns = [
    {
      title: t.prefillLength,
      dataIndex: 'prefill',
      render: (col: string) => <div style={{ fontWeight: 'bold' }}>{col}</div>,
    },
    {
      title: t.model1Title,
      children: [
        {
          title: t.simulation,
          dataIndex: 'model1Sim',
          className: 'bg-pink',
        },
        {
          title: t.real,
          dataIndex: 'model1Real',
          className: 'bg-blue',
        },
      ],
    },
    {
      title: t.model2Title,
      children: [
        {
          title: t.simulation,
          dataIndex: 'model2Sim',
          className: 'bg-pink',
        },
        {
          title: t.real,
          dataIndex: 'model2Real',
          className: 'bg-blue',
        },
      ],
    },
  ];

  return (
    <>
      <style>{`
        .arco-table-td.bg-pink { background-color: #ffe4e6; }
        .arco-table-td.bg-blue { background-color: #e0f2fe; }
      `}</style>
      <Table
        columns={columns}
        data={data}
        pagination={false}
        hover={false}
        border={{ wrapper: true, cell: true }}
      />
    </>
  );
};

export default ExperimentsTable;
