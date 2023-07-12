import { ActiveCell, ActiveRow } from "@/types/my-exercise";
import { Table, TableColumnType } from "antd";
import React, { memo } from "react";
import styled from "styled-components";

const WrapTable = styled.div`
  .ant-table-thead {
    display: none;
  }
  .ant-table-tbody {
    background-color: #414141;
  }

  .ant-table-cell {
    border-bottom: 0px !important;
    background: #414141 !important;
    &:hover {
      background-color: #414141;
      background: #414141 !important;
    }
  }

  .ant-table-row {
    &:hover {
      background-color: #414141;
      background: #414141 !important;
    }
  }
  color: white;
`;
const MyExercise = memo(() => {
  const dataSource: ActiveRow[] = [
    {
      activeFirst: {
        key: "1",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
      activeSecond: {
        key: "2",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
    },
    {
      activeFirst: {
        key: "1",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
      activeSecond: {
        key: "2",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
    },

    {
      activeFirst: {
        key: "1",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
      activeSecond: {
        key: "2",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
    },

    {
      activeFirst: {
        key: "1",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
      activeSecond: {
        key: "2",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
    },

    {
      activeFirst: {
        key: "1",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
      activeSecond: {
        key: "2",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
    },

    {
      activeFirst: {
        key: "1",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
      activeSecond: {
        key: "2",
        name: "家事全般（立位・軽い）",
        amount: 26,
        time: "10 min",
      },
    },
  ];

  const renderCell = (value: ActiveCell, options: ActiveRow) => {
    return (
      <div className="border-b-[1px] border-[#777]">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="bg-white h-1 w-1 rounded mr-2"></div>
            <div className="text-white">{value.name}</div>
          </div>
          <div className="text-primary-300 text-lg">{value.time}</div>
        </div>
        <div className="text-primary-300 ml-3">{value.amount}cal</div>
      </div>
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "activeFirst",
      key: "activeFirst",
      render: renderCell,
    },
    {
      title: "Age",
      dataIndex: "activeSecond",
      key: "activeSecond",
      render: renderCell,
    },
  ];
  return (
    <WrapTable className="bg-dark-500 container py-4 px-6">
      <div className="flex items-center">
        <div className="mr-2">MY EXERCISE</div>
        <div className="text-xl">2021.05.21</div>
      </div>
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        scroll={{ y: 300 }}
      />
    </WrapTable>
  );
});

export default MyExercise;
