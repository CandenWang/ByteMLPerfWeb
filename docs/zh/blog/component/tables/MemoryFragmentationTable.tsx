import React from 'react';
import { Table } from '@arco-design/web-react';

import imgVarMaxAllocGpu from '../public/img_M7t4bcDeaoVUwGxceNZcSoWRnZb.png';
import imgVarMaxAllocMlu from '../public/img_PjnBbpPrSouN2uxw61RcnVrHnGg.png';
import imgVarMaxReserveGpu from '../public/img_Eg7obFp6QoHqFBxCKJkcL0MqnLb.png';
import imgVarMaxReserveMlu from '../public/img_KS8obOkSyoiRtExhGMCcWmeBnUc.png';
import imgVarFragmentGpu from '../public/img_ZkQ1bZkV7oaXZCxZnC5c5Qfhn1W.png';
import imgVarFragmentMlu from '../public/img_FBp0bkz2CoIsuyxO3FPcIzc2nGf.png';

const columns = [
  { title: '测试数据类型', dataIndex: 'type' },
  { title: '曲线图', dataIndex: 'charts' },
  { title: '分析', dataIndex: 'analysis' },
];

const MemoryFragmentationTable: React.FC = () => {
  const data = [
    {
      key: 'var-max-alloc',
      type: 'max_memory_allocated',
      charts: (
        <div>
          <div>GPU</div>
          <img
            src={imgVarMaxAllocGpu}
            alt="GPU variable-seq max_memory_allocated"
          />
          <div>MLU</div>
          <img
            src={imgVarMaxAllocMlu}
            alt="MLU variable-seq max_memory_allocated"
          />
        </div>
      ),
      analysis: (
        <div>
          <p>
            输入长度可变时，前期未达到最长长度，内存随 step
            上升；达到最大长度后内存值趋于稳定，MLU 与 GPU 趋势一致。 GPU 为
            69013.11 MB，MLU 为 68945.11 MB，误差率约 0.099%，MLU &lt;
            GPU，测试通过。
          </p>
          <a
            href="../public/file_variable-seq-max-allocated.csv"
            target="_blank"
            rel="noreferrer"
          >
            file_variable-seq-max-allocated.csv
          </a>
        </div>
      ),
    },
    {
      key: 'var-max-reserve',
      type: 'max_memory_reserved',
      charts: (
        <div>
          <div>GPU</div>
          <img
            src={imgVarMaxReserveGpu}
            alt="GPU variable-seq max_memory_reserved"
          />
          <div>MLU</div>
          <img
            src={imgVarMaxReserveMlu}
            alt="MLU variable-seq max_memory_reserved"
          />
        </div>
      ),
      analysis: (
        <div>
          <p>
            输入长度达到最大值后，max_memory_reserved 也趋于稳定，MLU 与 GPU
            趋势一致。 GPU 为 69898 MB，MLU 为 69856 MB，误差率约 0.06%，MLU
            &lt; GPU，测试通过。
          </p>
          <a
            href="../public/file_variable-seq-max-reserved.csv"
            target="_blank"
            rel="noreferrer"
          >
            file_variable-seq-max-reserved.csv
          </a>
        </div>
      ),
    },
    {
      key: 'var-fragment',
      type: 'max_memory_reserved - max_memory_allocated（内存碎片）',
      charts: (
        <div>
          <div>GPU</div>
          <img src={imgVarFragmentGpu} alt="GPU variable-seq 内存碎片" />
          <div>MLU</div>
          <img src={imgVarFragmentMlu} alt="MLU variable-seq 内存碎片" />
        </div>
      ),
      analysis:
        '输入长度可变时，前期碎片存在一定波动；达到最大长度后碎片值稳定，MLU 与 GPU 趋势一致。GPU 为 884.88 MB，MLU 为 910.88 MB，误差率约 2.939%，MLU 略大于 GPU，但整体稳定，测试通过。',
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

export default MemoryFragmentationTable;
