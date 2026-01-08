import React from 'react';
import { Table } from '@arco-design/web-react';

const imgMaxAllocGpu = '/blog/data/img_MxR5b86s9oS71RxIEY6cbgXgnkb.png';
const imgMaxAllocMlu = '/blog/data/img_TsGQbFNq8oYAppxBWrrc8fR0nkg.png';
const imgMaxReserveGpu = '/blog/data/img_WqJpbhwz3olvWNxGAQxcgAzxnah.png';
const imgMaxReserveMlu = '/blog/data/img_MggPbjDFzox7aCxfnLwcGSibnXc.png';
const imgFragmentGpu = '/blog/data/img_C71ybV7Kyo1DoKxnGcLcUC9dn0d.png';
const imgFragmentMlu = '/blog/data/img_Rq4GbjJRuozG9fxJaF2ctMDFn7g.png';
const imgLossGpu = '/blog/data/img_RqV6bEwzxoneBfxSEaLccTHwn77.png';
const imgLossMlu = '/blog/data/img_XDTNb1kkToayyxxz71bcCFhFnnd.png';

const columns = [
  { title: '测试数据类型', width: 240, dataIndex: 'type' },
  { title: '曲线图', width: 240, dataIndex: 'charts' },
  { title: '结果及分析', width: 240, dataIndex: 'analysis' },
];

const MemoryStabilityTable: React.FC = () => {
  const data = [
    {
      key: 'max-alloc',
      type: 'max_memory_allocated',
      charts: (
        <div>
          <div>GPU</div>
          <img src={imgMaxAllocGpu} alt="GPU max_memory_allocated 曲线" />
          <div>MLU</div>
          <img src={imgMaxAllocMlu} alt="MLU max_memory_allocated 曲线" />
        </div>
      ),
      analysis: (
        <div>
          <p>
            内存值稳定：GPU 为 71320.64 MB，MLU 为 71252.64 MB，误差率约
            0.095%，MLU &lt; GPU，测试通过。
          </p>
          <a
            href="../public/file_gpt3-345M-max_allocated_compare.csv"
            target="_blank"
            rel="noreferrer"
          >
            file_gpt3-345M-max_allocated_compare.csv
          </a>
        </div>
      ),
    },
    {
      key: 'max-reserve',
      type: 'max_memory_reserved',
      charts: (
        <div>
          <div>GPU</div>
          <img src={imgMaxReserveGpu} alt="GPU max_memory_reserved 曲线" />
          <div>MLU</div>
          <img src={imgMaxReserveMlu} alt="MLU max_memory_reserved 曲线" />
        </div>
      ),
      analysis: (
        <div>
          <p>
            内存值稳定：GPU 为 72300 MB，MLU 为 72160 MB，误差率约 0.194%，MLU
            &lt; GPU，测试通过。
          </p>
          <a
            href="../public/file_gpt3-345M-max_reserve_compare.csv"
            target="_blank"
            rel="noreferrer"
          >
            file_gpt3-345M-max_reserve_compare.csv
          </a>
        </div>
      ),
    },
    {
      key: 'fragment',
      type: 'max_memory_reserved - max_memory_allocated（内存碎片）',
      charts: (
        <div>
          <div>GPU</div>
          <img src={imgFragmentGpu} alt="GPU 内存碎片曲线" />
          <div>MLU</div>
          <img src={imgFragmentMlu} alt="MLU 内存碎片曲线" />
        </div>
      ),
      analysis:
        '内存碎片值稳定：GPU 为 979.35 MB，MLU 为 907.35 MB，误差率约 7.31%，MLU &lt; GPU，测试通过。',
    },
    {
      key: 'loss',
      type: 'loss',
      charts: (
        <div>
          <div>GPU</div>
          <img src={imgLossGpu} alt="GPU loss 曲线" />
          <div>MLU</div>
          <img src={imgLossMlu} alt="MLU loss 曲线" />
        </div>
      ),
      analysis:
        'Loss 平均相当，误差约 0.033%，远小于 0.2%，且各 step 误差均小于 0.2%。',
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

export default MemoryStabilityTable;
