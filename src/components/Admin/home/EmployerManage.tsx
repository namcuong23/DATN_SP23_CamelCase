import { useRef, useState } from 'react'
import { useBlockUserMutation, useUnlockUserMutation } from '../../../service/admin'
import { Button, Input, InputRef, Space, Table, TableProps } from 'antd';
import type { ColumnType, ColumnsType, FilterConfirmProps, FilterValue, SorterResult } from 'antd/es/table/interface';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Popconfirm } from 'antd';
import { useGetUsersEprQuery } from '../../../service/auth_employer';

const EmployerManage = () => {
  const { data: userEpr } = useGetUsersEprQuery<any>('');
  const [block] = useBlockUserMutation();
  const [unlock] = useUnlockUserMutation();
  
  const data = userEpr?.map((item: any, index: any) => ({
    key: String(index),
    ...item,
  }));
  
  const searchInput = useRef<InputRef>(null);

  interface DataType {
    key: string;
    _id: string;
    name: string;
    phone: string;
    level_auth: number;
    email: string;
    password: string;
    role: string;
    isBlock: boolean;

  }
  type DataIndex = keyof DataType;

  const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

  const handleBlock = async (user: any) => {
    await block(user)
  }

  const handleUnlock = async (user: any) => {
    await unlock(user)
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      filteredValue: filteredInfo.role || null,
      ...getColumnSearchProps('role'),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filteredValue: filteredInfo.name || null,
      ...getColumnSearchProps('name'),
      ellipsis: true,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      ...getColumnSearchProps('phone'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record: any) => (

        <Space size="middle">
          {
            record.isBlock ?
              <Popconfirm
                title="Are you sure to block this guy?"
                onConfirm={() => handleUnlock(record)}
                okText="Yes"
                okButtonProps={{
                  className: 'bg-red-500',
                }}
                cancelText="No"
              >
                <button className='btn btn-danger'>
                  Unlock
                </button>
              </Popconfirm> :
              <Popconfirm
                title="Unlock this guy?"
                onConfirm={() => handleBlock(record)}
                okText="Yes"
                okButtonProps={{
                  className: 'bg-blue-500',
                }}
                cancelText="No"
              >
                <button className='btn btn-success'>
                  BLock
                </button>
              </Popconfirm>
          }

        </Space>
      ),
    },
  ];

  return (
    <div className="nk-content ">
      <div className="container-fluid">
        <div className="nk-content-inner">
          <div className="nk-content-body">
            <div className="nk-block-head nk-block-head-sm">
              <div className="nk-block-between">
                <div className="nk-block-head-content">
                  <h4 className="nk-block-title page-title">Quản lý nhà tuyển dụng</h4>
                </div>{/* .nk-block-head-content */}
              </div>{/* .nk-block-between */}
            </div>{/* .nk-block-head */}
            <div className='nk-block'>
              <>
                <Space style={{ marginBottom: 16 }}>
                  <Button onClick={clearFilters}>Clear filters</Button>
                  <Button onClick={clearAll}>Clear filters and sorters</Button>
                </Space>
                <Table columns={columns} dataSource={data} onChange={handleChange} />
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerManage