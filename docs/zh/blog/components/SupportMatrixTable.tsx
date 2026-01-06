import React from 'react';
import { Table } from '@arco-design/web-react';

interface SupportRow {
  key: string;
  category?: string;
  feature: string;
  capability: string | string[];
  note?: string;
  categoryRowSpan?: number;
  noteRowSpan?: number;
}

const data: SupportRow[] = [
  {
    key: 'basic-graph',
    category: '基础能力',
    feature: '自定义图结构',
    capability: [
      'Backbone 不依赖于 torch/tensorflow 库，包含自定义的图结构，可指定多种算子类型',
    ],
    note: '默认会使用 Torch',
    categoryRowSpan: 2,
    noteRowSpan: 2,
  },
  {
    key: 'basic-hotspot',
    feature: '热点理论分析（TOPS, BW）',
    capability: [
      '支持计算量分析',
      '支持参数量分析，可导出指定并行方案下的参数量分布情况。',
    ],
    categoryRowSpan: 0,
    noteRowSpan: 0,
  },
  {
    key: 'comm-model',
    category: '通信仿真',
    feature: '理论建模',
    capability: [
      'alpha-beta 的模型，指定 alpha-beta 的参数、利用率、带宽以及拓扑结构',
    ],
    note: '建议使用厂商的 Benchmark 工具',
    categoryRowSpan: 2,
    noteRowSpan: 2,
  },
  {
    key: 'comm-table',
    feature: '实测查表 & 插值',
    capability: [
      '支持通过通信 benchmark 建立查表数据库，数据量-通信节点个数-延迟',
      '支持先查表 / 离线插值的 fast 模式，牺牲部分精度换取执行速度和离线可用性',
    ],
    categoryRowSpan: 0,
    noteRowSpan: 0,
  },
  {
    key: 'parallel-support',
    category: '并行方案支持',
    feature: '并行方案支持',
    capability: [
      '可绑定不同后端，以支持各类 XPU 的并行方案评估',
      'DP 和 TP 的组合方式',
      'EP 开多大',
    ],
    note: '准确评估需要具体算子库支持',
    categoryRowSpan: 2,
    noteRowSpan: 2,
  },
  {
    key: 'parallel-search',
    feature: '并行方案搜索',
    capability: [
      '将并行方案的指定粒度细化到各个标准算子上',
      '并行切分的核心在于算子在哪些维度可切，哪些维度需要规约',
      '通过枚举标准算子的所有并行方案，使用分布式张量建模自动插入两个分布之间的通信，可完成任意并行方案建模',
      '通过剪枝搜索，可以在极短时间内寻找最佳并行方案',
    ],
    categoryRowSpan: 0,
    noteRowSpan: 0,
  },
  {
    key: 'deploy-pd',
    category: '部署方案支持',
    feature: 'PD 混跑支持',
    capability: ['支持指定混跑并行前端'],
    note: '算子库支持',
    categoryRowSpan: 2,
    noteRowSpan: 2,
  },
  {
    key: 'deploy-pp-trace',
    feature: 'PP trace generation',
    capability: [
      '基于事件建模的 PP 仿真，可以基于真实 PP 均衡情况进行仿真以获取 pipeline 利用率等信息',
    ],
    categoryRowSpan: 0,
    noteRowSpan: 0,
  },
  {
    key: 'visualization',
    category: '可视化',
    feature: '支持 timeline 导出',
    capability: ['使用拓扑排序，计算-通信双车道实现，支持自动通算融合 overlap'],
    note: '暂不支持多流',
  },
];

const columns = [
  {
    title: '',
    dataIndex: 'category',
    render: (_: unknown, record: SupportRow) => {
      const { categoryRowSpan, category } = record;
      if (typeof categoryRowSpan === 'number') {
        if (categoryRowSpan === 0) {
          return {
            children: null,
            props: { rowSpan: 0 },
          };
        }
        return {
          children: category,
          props: { rowSpan: categoryRowSpan },
        };
      }
      return category || null;
    },
  },
  {
    title: '性能特性',
    dataIndex: 'feature',
  },
  {
    title: '支持能力',
    dataIndex: 'capability',
    render: (value: SupportRow['capability']) => {
      if (Array.isArray(value)) {
        return (
          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              listStyleType: 'disc',
              color: 'var(--color-text-1)',
            }}
          >
            {value.map((item) => (
              <li key={item} style={{ color: 'var(--color-text-1)' }}>
                {item}
              </li>
            ))}
          </ul>
        );
      }
      return value;
    },
  },
  {
    title: '注释',
    dataIndex: 'note',
    render: (_: unknown, record: SupportRow) => {
      const { noteRowSpan, note } = record;
      if (typeof noteRowSpan === 'number') {
        if (noteRowSpan === 0) {
          return {
            children: null,
            props: { rowSpan: 0 },
          };
        }
        return {
          children: note,
          props: { rowSpan: noteRowSpan },
        };
      }
      return note || null;
    },
  },
];

const SupportMatrixTable: React.FC = () => {
  return (
    <Table
      style={{ marginBottom: '32px' }}
      data={data}
      hover={false}
      pagination={false}
      columns={columns}
      border={{ wrapper: true, cell: true }}
    />
  );
};

export default SupportMatrixTable;
