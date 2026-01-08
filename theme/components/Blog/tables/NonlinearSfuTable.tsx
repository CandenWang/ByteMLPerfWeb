import React from 'react';
import { Table } from '@arco-design/web-react';

const imgCos = '/blog/data/img_FmDWbKDKVosrMMx8OroclbjunUh.png';
const imgSin = '/blog/data/img_V6o5b9jUMo8B5kxcLSAcGZjtn6f.png';
const imgExp = '/blog/data/img_GK5SbxGhRoNntcxYMmrcNy37nib.png';
const imgGelu = '/blog/data/img_FCZjb3y9UowDdrxCUvsc8dDknad.png';
const imgLog = '/blog/data/img_Hy0NbUVsTovOmBxrXzfcW6Ymnif.png';
const imgSilu = '/blog/data/img_CvDxbfvKjoq8R7xnP2acNmTEnCc.png';
const imgSqrt = '/blog/data/img_TA8pbJcqLom0gmxjCyWcWPvRngb.png';
const imgDiv = '/blog/data/img_GfIDbQ34KoLIf0xJwzSc8vh8n2c.png';

const columns = [
  { title: 'SFU 指令', dataIndex: 'op', width: 100 },
  { title: '测试范围', dataIndex: 'range', width: 150 },
  { title: '精度对比（NPU vs. fp32）', dataIndex: 'npuAccuracy', width: 200 },
  { title: '相对误差图（输入 [0,1]）', dataIndex: 'relativePlot', width: 200 },
  { title: '精度对比（GPU vs. fp32）', dataIndex: 'gpuAccuracy', width: 200 },
  { title: '合理性', dataIndex: 'comment', width: 150 },
];

const data = [
  {
    key: 'cos',
    op: 'cos',
    range: 'rand(1) * 10',
    npuAccuracy: '0.0003402884464339594',
    relativePlot: <img src={imgCos} alt="cos 相对误差" />,
    gpuAccuracy: 'max diff 2.864171583238928e-08',
    comment: '默认使用 fast 版本，等待寒武纪反馈使用高精版本',
  },
  {
    key: 'sin',
    op: 'sin',
    range: 'rand(1) * 10',
    npuAccuracy: '0.00014611006648905148',
    relativePlot: <img src={imgSin} alt="sin 相对误差" />,
    gpuAccuracy: 'max diff 5.818569104310001e-08',
    comment: '默认使用 fast 版本，等待寒武纪反馈使用高精版本',
  },
  {
    key: 'exp',
    op: 'exp',
    range: 'rand(1) * 10',
    npuAccuracy: '4.957693569885647e-07',
    relativePlot: <img src={imgExp} alt="exp 相对误差" />,
    gpuAccuracy: 'max diff 8.684908712197625e-07',
    comment: '合理，误差较小',
  },
  {
    key: 'gelu',
    op: 'gelu',
    range: 'rand(1) * 10',
    npuAccuracy: '1.3758401957124594e-06',
    relativePlot: <img src={imgGelu} alt="gelu 相对误差" />,
    gpuAccuracy: 'max diff 3.389000674536291e-08',
    comment: '合理，误差较小',
  },
  {
    key: 'log',
    op: 'log',
    range: 'rand(1) * 10',
    npuAccuracy: '6.921693532226273e-06',
    relativePlot: <img src={imgLog} alt="log 相对误差" />,
    gpuAccuracy: 'max diff 7.996324402625987e-08',
    comment: '合理，误差较小',
  },
  {
    key: 'silu',
    op: 'Silu',
    range: 'rand(1) * 10',
    npuAccuracy: '1.459209803067186e-07',
    relativePlot: <img src={imgSilu} alt="silu 相对误差" />,
    gpuAccuracy: 'max diff 3.5981361279358026e-08',
    comment: '合理，误差较小',
  },
  {
    key: 'sqrt',
    op: 'Sqrt',
    range: 'rand(1) * 10',
    npuAccuracy: '8.818209330827543e-08',
    relativePlot: <img src={imgSqrt} alt="sqrt 相对误差" />,
    gpuAccuracy: 'max diff 5.9604642999033786e-08',
    comment: '合理，误差较小',
  },
  {
    key: 'div',
    op: 'div',
    range: 'rand(1) * 10',
    npuAccuracy: '7.936597372912811e-08',
    relativePlot: <img src={imgDiv} alt="div 相对误差" />,
    gpuAccuracy: 'max diff 1.5894571925301193e-07',
    comment: '合理，误差较小',
  },
];

const NonlinearSfuTable: React.FC = () => {
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

export default NonlinearSfuTable;
