import React from 'react';
import { Table } from '@arco-design/web-react';

const columns = [
  { title: '分类', width: 240, dataIndex: 'category' },
  { title: 'argument', dataIndex: 'arg' },
  { title: 'value', dataIndex: 'value' },
];

const TrainingConfigTable: React.FC = () => {
  const data = [
    {
      key: 'model-size',
      category: '模型大小',
      arg: 'num-layers',
      value:
        '14（2 机 16 卡），模型大小约 21B；16（4 机 32 卡），模型大小约 24B；30（30 机 240 卡），模型大小约 66B。',
    },
    {
      key: 'gbz',
      category: 'Megatron-LM 超参设定',
      arg: 'global-batch-size',
      value:
        '512（2 机 16 卡）；1536（4 机 32 卡，pp bubble: 1/96/3 ≈ 0.0035）；9216（30 机 240 卡，pp bubble: 14/576/3 ≈ 0.0081）。',
    },
    {
      key: 'parallel',
      category: 'Megatron-LM 超参设定',
      arg: '并行策略',
      value:
        '2 机 16 卡：ep16；4 机 32 卡：ep16pp2vpp1；30 机 240 卡：ep16pp15vpp1。',
    },
    {
      key: 'seq-len',
      category: 'Megatron-LM 超参设定',
      arg: 'seq-len',
      value: '4096',
    },
    {
      key: 'hidden-size',
      category: 'Megatron-LM 超参设定',
      arg: 'hidden-size',
      value: '5120',
    },
    {
      key: 'hidden-dropout',
      category: 'Megatron-LM 超参设定',
      arg: 'hidden-dropout',
      value: '0.1',
    },
    {
      key: 'micro-batch-size',
      category: 'Megatron-LM 超参设定',
      arg: 'micro-batch-size',
      value: '1',
    },
    {
      key: 'seed',
      category: 'Megatron-LM 超参设定',
      arg: 'seed',
      value: '1234',
    },
    {
      key: 'act-fn',
      category: 'Megatron-LM 超参设定',
      arg: '激活函数',
      value: 'swiglu',
    },
    {
      key: 'dtype',
      category: 'Megatron-LM 超参设定',
      arg: 'dtype',
      value: 'bf16',
    },
    {
      key: 'lr',
      category: 'Megatron-LM 超参设定',
      arg: 'lr',
      value: '1e-5',
    },
    {
      key: 'min-lr',
      category: 'Megatron-LM 超参设定',
      arg: 'min lr',
      value: '1e-8',
    },
    {
      key: 'wd',
      category: 'Megatron-LM 超参设定',
      arg: 'weight decay',
      value: '0.1',
    },
    {
      key: 'grad-clip',
      category: 'Megatron-LM 超参设定',
      arg: 'grad clip',
      value: '1',
    },
    {
      key: 'warmup',
      category: 'Megatron-LM 超参设定',
      arg: 'lr warmup step (5% * steps)',
      value: '2000',
    },
    {
      key: 'steps',
      category: 'Megatron-LM 超参设定',
      arg: 'steps',
      value: '10000（16/32 卡）；40000（30 机 240 卡）。',
    },
    {
      key: 'ckpt',
      category: 'Megatron-LM 超参设定',
      arg: 'ckpt_save_interval',
      value: '2000',
    },
    {
      key: 'cpu-init',
      category: 'Megatron-LM 超参设定',
      arg: 'use-cpu-initialization',
      value: 'False',
    },
    {
      key: 'att-dropout',
      category: 'attention',
      arg: 'attention-dropout',
      value: '0.1',
    },
    {
      key: 'num-heads',
      category: 'attention',
      arg: 'num-attention-heads',
      value: '40',
    },
    {
      key: 'num-query-heads',
      category: 'attention',
      arg: 'num-query-attention',
      value: '8',
    },
    {
      key: 'pos-emb',
      category: 'attention',
      arg: 'position-embedding-type',
      value: 'rope',
    },
    {
      key: 'moe-router',
      category: 'moe',
      arg: 'router',
      value: 'aux_loss',
    },
    {
      key: 'moe-aux',
      category: 'moe',
      arg: 'moe-aux-loss-coeff',
      value:
        '1e-3；参考 DeepSeek V2 配置 aux_loss_alpha = 0.001（见官方 config.json）。',
    },
    {
      key: 'moe-num-experts',
      category: 'moe',
      arg: 'num-experts',
      value: '128',
    },
    {
      key: 'moe-topk',
      category: 'moe',
      arg: 'moe-router-topk',
      value: '6',
    },
    {
      key: 'moe-group-topk',
      category: 'moe',
      arg: 'moe-router-group-topk',
      value: '4',
    },
    {
      key: 'moe-dispatch',
      category: 'moe',
      arg: 'moe-token-dispatch-type',
      value: 'alltoall',
    },
    {
      key: 'moe-ffn',
      category: 'moe',
      arg: 'moe-ffn-hidden-size',
      value: '1024 → 1536 / 1280（不同 expert 配置）。',
    },
    {
      key: 'moe-shared',
      category: 'moe',
      arg: 'moe-shared-expert-intermediate-size',
      value: '2048（2 个 shared experts）→ 3072 / 2560。',
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

export default TrainingConfigTable;
