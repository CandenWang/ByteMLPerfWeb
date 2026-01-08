import React from 'react';
import { Table } from '@arco-design/web-react';

const columns = [
  { title: '确定性项', width: 140, dataIndex: 'item' },
  { title: '评判标准 / 测试配置', width: 240, dataIndex: 'criterion' },
  { title: '结论', width: 70, dataIndex: 'result' },
  { title: '测试 case / 数据', width: 240, dataIndex: 'cases' },
];

const DeterminismTable: React.FC = () => {
  const data = [
    {
      key: 'rand',
      item: '随机数 Rand',
      criterion: '单卡测试，对比多种规模，多次运行结果需 bit 级对齐。',
      result: '通过',
      cases: '',
    },
    {
      key: 'dropout',
      item: 'Dropout',
      criterion: '单卡测试，对比多种规模，多次运行结果需 bit 级对齐。',
      result: '通过',
      cases: '',
    },
    {
      key: 'comm',
      item: '多机通信一致性',
      criterion:
        '在指定拓扑和算法（当前为默认算法）下，多机场景中相同输入规模多次运行结果需 bit 级一致。测试配置：world_size ∈ {2,4,8,16}；dtype ∈ {float32, float16, bfloat16}；batch_size ∈ {8,16,...,1048576,2097152}；dim_size = 1024。',
      result: '通过',
      cases: (
        <a
          href="../public/file_allreduce-float32-group16.json"
          target="_blank"
          rel="noreferrer"
        >
          file_allreduce-float32-group16.json
        </a>
      ),
    },
    {
      key: 'fa',
      item: 'Flash Attention 前向/后向确定性',
      criterion:
        '在不同 shape 和 dropout 概率下，FA 前向/后向计算结果需 bit 级对齐。测试配置：dropout ∈ {0.0, 0.17}；dtype = bfloat16；test_mode = consistency；q_head_num/kv_head_num 组合多组；head_dim = 128；batch_size = 1；q_seq_len/kv_seq_len ∈ {(1024,1024),(2048,2048),(4096,4096),(8192,8192),(16384,16384)}。',
      result: '通过',
      cases: (
        <div>
          <div>
            <a
              href="../public/file_fa_fwd_bf16_consistency.csv"
              target="_blank"
              rel="noreferrer"
            >
              file_fa_fwd_bf16_consistency.csv
            </a>
          </div>
          <div>
            <a
              href="../public/file_fa_fwd_bf16_consistency.jsonl"
              target="_blank"
              rel="noreferrer"
            >
              file_fa_fwd_bf16_consistency.jsonl
            </a>
          </div>
          <div>
            <a
              href="../public/file_fa_fwd_fp16_consistency.csv"
              target="_blank"
              rel="noreferrer"
            >
              file_fa_fwd_fp16_consistency.csv
            </a>
          </div>
          <div>
            <a
              href="../public/file_fa_fwd_fp16_consistency.jsonl"
              target="_blank"
              rel="noreferrer"
            >
              file_fa_fwd_fp16_consistency.jsonl
            </a>
          </div>
          <div>
            <a
              href="../public/file_fa_bwd_consistency.csv"
              target="_blank"
              rel="noreferrer"
            >
              file_fa_bwd_consistency.csv
            </a>
          </div>
          <div>
            <a
              href="../public/file_fa_bwd_consistency.jsonl"
              target="_blank"
              rel="noreferrer"
            >
              file_fa_bwd_consistency.jsonl
            </a>
          </div>
        </div>
      ),
    },
  ];

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

export default DeterminismTable;
