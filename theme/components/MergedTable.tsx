import React from 'react';
import { Table, TableColumnProps } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';

interface DataItem {
  key: string;
  name: string;
  salary: number;
  address: string;
  email: string;
}

const columns: TableColumnProps<DataItem>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
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
      return obj;
    },
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const data: DataItem[] = [
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
  },
  {
    key: '2',
    name: 'Jane Doe',
    salary: 25000,
    address: 'London, Park Lane no. 33',
    email: 'jane.doe@example.com',
  },
  {
    key: '3',
    name: 'Alisa Ross',
    salary: 22000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  },
  {
    key: '4',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
  {
    key: '5',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com',
  },
];

const App = () => (
  <Table
    columns={columns}
    data={data}
    border={{ wrapper: true, cell: true }}
    pagination={false}
  />
);

export default App;
