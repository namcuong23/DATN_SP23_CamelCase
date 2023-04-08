import React, { useRef, useState } from 'react'
import { useGetUsersQuery } from '../../../service/admin'
import { Button, Input, InputRef, Space, Table, TableProps } from 'antd';
import type { ColumnType, ColumnsType, FilterConfirmProps, FilterValue, SorterResult } from 'antd/es/table/interface';
import { User } from '../../../interface/admin/users';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
const HomeAdmin = () => {
  const { data: Users, error, isLoading } = useGetUsersQuery();
  const searchInput = useRef<InputRef>(null);
  interface DataType {
    key: string;
    _id: String;
    name: String;
    phone: Number;
    role:Number;
    level_auth:Number;
    email:String;
    password:String
  }
  type DataIndex = keyof DataType;

  const data =Users?.map((item,index)=>({
      key:String(index),
      _id:item._id,
      name:item.name,
      phone:item.phone,
      role:item.role,
      level_auth:item.level_auth,
      email:item.email,
      password:item.password
  }))
  const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
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
  const columns: ColumnsType<DataType> = [
    {
      title: 'id',
      dataIndex: '_id',
      filteredValue: filteredInfo._id || null,
      ...getColumnSearchProps('_id'),
      onFilter: (value: string | number | boolean, record) =>
        typeof value === 'string' && record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
      width: 200,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filteredValue: filteredInfo.name || null,
      ...getColumnSearchProps('name'),
      ellipsis: true,
    },
    {title:'Phone',
    dataIndex:'phone',
    key:'phone',
    ...getColumnSearchProps('phone'),
    },
    {
      title:'Email',
      dataIndex:'email',
      key:'email',
      ...getColumnSearchProps('email'),
    }
  ];
  return (
    <div className="nk-content ">
    <div className="container-fluid">
      <div className="nk-content-inner">
        <div className="nk-content-body">
          <div className="nk-block-head nk-block-head-sm">
            <div className="nk-block-between">
              <div className="nk-block-head-content">
                <h4 className="nk-block-title page-title">Dashboard</h4>
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

export default HomeAdmin