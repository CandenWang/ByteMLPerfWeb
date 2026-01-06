import React from 'react';
import { Table, TableColumnProps } from '@arco-design/web-react';

interface DataItem {
  key: string;
  category: string;
  feature: string;
  capabilities: string[];
  notes: string;
}

const data: DataItem[] = [
  {
    key: '1',
    category: '基础能力',
    feature: '自定义图结构',
    capabilities: [
      '• Backbone不依赖于torch/tensorflow库，包含自定义的图结构，可指定多种算子类型',
    ],
    notes: '默认会使用Torch',
  },
  {
    key: '2',
    category: '基础能力',
    feature: '热点理论分析(TOPS, BW)',
    capabilities: [
      '• 支持计算量分析',
      '• 支持参数量分析，可导出指定并行方案下的参数量分布情况。',
    ],
    notes: '',
  },
  {
    key: '3',
    category: '通信仿真',
    feature: '理论建模',
    capabilities: [
      '• alpha-beta的模型，指定alpha-beta的参数，利用率，带宽以及拓扑结构',
    ],
    notes: '建议使用厂商的 Benchmark 工具',
  },
  {
    key: '4',
    category: '通信仿真',
    feature: '实测查表&插值',
    capabilities: [
      '• 支持通过通信benchmark 进行建立查表数据库，数据量-通信节点个数-延迟',
      '• 支持先查表/离线插值的fast模式，牺牲部分精度换取执行速度和离线可用性',
    ],
    notes: '',
  },
  {
    key: '5',
    category: '并行方案支持',
    feature: '并行方案支持',
    capabilities: [
      '• 可绑定不同后端，以支持各类XPU的并行方案评估',
      '  ◦ DP和TP的组合方式？',
      '  ◦ EP开多大',
    ],
    notes: '准确评估需要具体算子库支持',
  },
  {
    key: '6',
    category: '并行方案支持',
    feature: '并行方案搜索',
    capabilities: [
      '• 将并行方案的指定粒度细化到各个标准算子上',
      '• 并行切分的核心心在于算子在那些维度可切，那些维度需要规约',
      '• 通过枚举标准算子的所有并行方案，使用分布式张量建模自动插入两个分布之间的通信，可完成任意并行方案建模',
      '• 通过剪枝搜索，可以在极短时间内寻找最佳并行方案',
    ],
    notes: '',
  },
  {
    key: '7',
    category: '部署方案支持',
    feature: 'PD混跑支持',
    capabilities: ['• 支持指定混跑并行前端'],
    notes: '算子库支持',
  },
  {
    key: '8',
    category: '部署方案支持',
    feature: 'PP trace generation',
    capabilities: [
      '• 于事件建模的PP仿真，可以基于真实PP均衡情况进行仿真以获取pipeline利用率等信息',
    ],
    notes: '',
  },
  {
    key: '9',
    category: '可视化',
    feature: '支持timeline导出',
    capabilities: [
      '• 使用拓扑排序，计算-通信双车道实现，支持自动通算融合overlap',
    ],
    notes: '暂不支持多流',
  },
];

const columns: TableColumnProps<DataItem>[] = [
  {
    title: '',
    dataIndex: 'category',
    width: 120,
    render: (value, row, index) => {
      const obj = {
        children: <b>{value}</b>,
        props: {} as React.TdHTMLAttributes<HTMLTableCellElement>,
      };

      if (index === 0) {
        obj.props.rowSpan = 2;
      }
      if (index === 1) {
        obj.props.rowSpan = 0;
      }
      if (index === 2) {
        obj.props.rowSpan = 2;
      }
      if (index === 3) {
        obj.props.rowSpan = 0;
      }
      if (index === 4) {
        obj.props.rowSpan = 2;
      }
      if (index === 5) {
        obj.props.rowSpan = 0;
      }
      if (index === 6) {
        obj.props.rowSpan = 2;
      }
      if (index === 7) {
        obj.props.rowSpan = 0;
      }
      if (index === 8) {
        obj.props.rowSpan = 1;
      }

      return obj;
    },
  },
  {
    title: '性能特性',
    dataIndex: 'feature',
    width: 150,
  },
  {
    title: '支持能力',
    dataIndex: 'capabilities',
    render: (col) => (
      <div>
        {col.map((item: string, index: number) => (
          <div
            key={index}
            style={{ paddingLeft: item.startsWith('  ◦') ? 20 : 0 }}
          >
            {item}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: '注释',
    dataIndex: 'notes',
    width: 150,
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {} as React.TdHTMLAttributes<HTMLTableCellElement>,
      };

      if (index === 0) {
        obj.props.rowSpan = 2;
      }
      if (index === 1) {
        obj.props.rowSpan = 0;
      }
      if (index === 2) {
        obj.props.rowSpan = 2;
      }
      if (index === 3) {
        obj.props.rowSpan = 0;
      }
      if (index === 4) {
        obj.props.rowSpan = 2;
      }
      if (index === 5) {
        obj.props.rowSpan = 0;
      }
      if (index === 6) {
        obj.props.rowSpan = 2;
      }
      if (index === 7) {
        obj.props.rowSpan = 0;
      }
      if (index === 8) {
        obj.props.rowSpan = 1;
      }

      return obj;
    },
  },
];

const MergedTable = () => (
  <Table
    columns={columns}
    data={data}
    border={{ wrapper: true, cell: true }}
    pagination={false}
    style={{ marginTop: 20, marginBottom: 20 }}
  />
);

export default MergedTable;
