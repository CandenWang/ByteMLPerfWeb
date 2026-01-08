import React from 'react';
import { Table } from '@arco-design/web-react';

const imgMax4k = '/blog/data/img_OjtbbOfBJoQ25kx7NXrcSgB7nlh.png';
const imgMean4k = '/blog/data/img_HwknbVf5Yo3R7SxMcv1c0XbnnWf.png';
const imgMax8k = '/blog/data/img_AbRlbUO6Coj2UKxDkwjc1c7mnOb.png';
const imgMean8k = '/blog/data/img_CtnubNcXPoLkRSxckb8cjvx2nie.png';
const imgMax16k = '/blog/data/img_LElIbzqyHoboC3x9PjZcv20SnNd.png';
const imgMean16k = '/blog/data/img_TnffbaBIfo7rx5xm63jcqClon9c.png';

const columns = [
  {
    title: '输入数据生成方式',
    dataIndex: 'input',
    width: 250,
    render: (value: any, _record: any, index: number) => {
      const currentInput = data[index].input;

      if (index > 0 && data[index - 1].input === currentInput) {
        return {
          children: null,
          props: { rowSpan: 0 },
        };
      }

      let span = 1;
      for (let i = index + 1; i < data.length; i++) {
        if (data[i].input === currentInput) {
          span += 1;
        } else {
          break;
        }
      }

      return {
        children: currentInput,
        props: { rowSpan: span },
      };
    },
  },
  { title: '序列长度', dataIndex: 'seqLen', width: 100 },
  { title: '最大绝对值误差', dataIndex: 'maxError', width: 200 },
  { title: '平均绝对值误差', dataIndex: 'meanError', width: 200 },
  { title: 'Comments', dataIndex: 'comment', width: 200 },
];

const data = [
  {
    key: '4k',
    input: '真实 FA Tensor 训练数据做输入',
    seqLen: '4K',
    maxError: <img src={imgMax4k} alt="4K 最大绝对值误差" />,
    meanError: <img src={imgMean4k} alt="4K 平均绝对值误差" />,
    comment: '',
  },
  {
    key: '8k',
    input: '真实 FA Tensor 训练数据做输入',
    seqLen: '8K',
    maxError: <img src={imgMax8k} alt="8K 最大绝对值误差" />,
    meanError: <img src={imgMean8k} alt="8K 平均绝对值误差" />,
    comment: '',
  },
  {
    key: '16k',
    input: '真实 FA Tensor 训练数据做输入',
    seqLen: '16K',
    maxError: <img src={imgMax16k} alt="16K 最大绝对值误差" />,
    meanError: <img src={imgMean16k} alt="16K 平均绝对值误差" />,
    comment: '',
  },
];

const FAAccuracyTable: React.FC = () => {
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

export default FAAccuracyTable;
