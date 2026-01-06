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
    category: 'Basic Capability',
    feature: 'Custom Graph Structure',
    capability: [
      'Backbone does not depend on torch/tensorflow libraries, includes custom graph structure, supports various operator types',
    ],
    note: 'Defaults to using Torch',
    categoryRowSpan: 2,
    noteRowSpan: 2,
  },
  {
    key: 'basic-hotspot',
    feature: 'Hotspot Theoretical Analysis (TOPS, BW)',
    capability: [
      'Supports computational analysis',
      'Supports parameter analysis, can export parameter distribution under specified parallel schemes.',
    ],
    categoryRowSpan: 0,
    noteRowSpan: 0,
  },
  {
    key: 'comm-model',
    category: 'Communication Simulation',
    feature: 'Theoretical Modeling',
    capability: [
      'alpha-beta model, specifying alpha-beta parameters, utilization, bandwidth, and topology',
    ],
    note: 'Recommended to use vendor Benchmark tools',
    categoryRowSpan: 2,
    noteRowSpan: 2,
  },
  {
    key: 'comm-table',
    feature: 'Measured Lookup Table & Interpolation',
    capability: [
      'Supports building lookup table database via communication benchmark: data size - node count - latency',
      'Supports fast mode with table lookup / offline interpolation, sacrificing some precision for execution speed and offline availability',
    ],
    categoryRowSpan: 0,
    noteRowSpan: 0,
  },
  {
    key: 'parallel-support',
    category: 'Parallel Scheme Support',
    feature: 'Parallel Scheme Support',
    capability: [
      'Can bind different backends to support parallel scheme evaluation for various XPUs',
      'Combinations of DP and TP',
      'EP size configuration',
    ],
    note: 'Accurate evaluation requires specific operator library support',
    categoryRowSpan: 2,
    noteRowSpan: 2,
  },
  {
    key: 'parallel-search',
    feature: 'Parallel Scheme Search',
    capability: [
      'Refines parallel scheme specification granularity to individual standard operators',
      'Core of parallel splitting lies in which dimensions operators can be split and which need reduction',
      'By enumerating all parallel schemes of standard operators and using distributed tensor modeling to automatically insert communication between two distributions, any parallel scheme modeling can be completed',
      'Using pruned search to find the optimal parallel scheme in a very short time',
    ],
    categoryRowSpan: 0,
    noteRowSpan: 0,
  },
  {
    key: 'deploy-pd',
    category: 'Deployment Scheme Support',
    feature: 'PD Mixed Running Support',
    capability: ['Supports specifying mixed running parallel frontends'],
    note: 'Operator library support required',
    categoryRowSpan: 2,
    noteRowSpan: 2,
  },
  {
    key: 'deploy-pp-trace',
    feature: 'PP trace generation',
    capability: [
      'Event-based PP simulation, can simulate based on real PP balancing to obtain pipeline utilization and other information',
    ],
    categoryRowSpan: 0,
    noteRowSpan: 0,
  },
  {
    key: 'visualization',
    category: 'Visualization',
    feature: 'Supports timeline export',
    capability: [
      'Uses topological sorting, compute-communication dual-lane implementation, supports automatic compute-communication overlap',
    ],
    note: 'Multi-stream not supported yet',
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
    title: 'Performance Feature',
    dataIndex: 'feature',
  },
  {
    title: 'Supported Capabilities',
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
    title: 'Note',
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
