import { Button, Dropdown, MenuProps, Modal, notification, Select } from "antd";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { useUserSelector } from "@/store/user";
import { CheckOutlined } from "@ant-design/icons";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const HeaderStyled = styled.header`
  /* .active {
    color: #43e3ff;
  }

  .menu-item:hover {
    color: #43e3ff;
  } */
`;

const StyledSelectWrapper = styled.div`
  .ant-select {
    display: block;
  }

  .ant-select:focus-visible {
    outline: unset;
  }
  .ant-select .ant-select-selector {
    background-color: transparent;
    color: #3a3a3c !important;
    border: transparent;
    font-size: 14px;
  }

  .ant-select .ant-select-arrow,
  .ant-select-single.ant-select-open {
    color: #3a3a3c;
    font-size: 14px;
    font-weight: 500;
  }

  .ant-select-single .ant-select-selector .ant-select-selection-item {
    line-height: 16px;
    font-size: 14px;
    font-weight: 500;
  }

  .ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input,
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 16px;
    box-shadow: unset !important;
  }
  .ant-select-dropdown
    .ant-select-item
    .ant-select-item-option
    .ant-select-item-option-active
    .ant-select-item-option-selected {
    background-color: transparent;
  }
`;

const Header = ({ isFullWidth = false }: { isFullWidth?: boolean }) => {
  const { pathname, asPath, query } = useRouter();
  const { userInfo, tokens } = useUserSelector();
  const router = useRouter();

  const menu = [
    { path: "/", title: "自分の記録", icon: "/svgs/icon_info.svg" },
    { path: "/my-record", title: "チャレンジ", icon: "/svgs/record.svg" },
    { path: "/column", title: "お知らせ", icon: "/svgs/icon_memo.svg" },
  ];

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/information">
          <span className="flex py-3 w-[256px] pl-5 rounded-lg">
            <Image src="/icons/building.svg" alt="" width={18} height={16} />
            <span className="ml-5">{"trans.companyInformation"}</span>
          </span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <span className="flex py-3 w-[256px] pl-5 rounded-lg">
          <Image src="/icons/key.svg" alt="" width={18} height={16} />
          <span className="ml-5">{"trans.changePasswor"}</span>
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/data-list">
          <span className="flex py-3 w-[256px] pl-5 rounded-lg">
            <Image src="/icons/chart.svg" alt="" width={18} height={16} />
            <span className="ml-5">{"trans.companyData"}</span>
          </span>
        </Link>
      ),
    },
  ];

  return (
    <HeaderStyled
      className={`flex h-[72px] w-full justify-center sticky top-0 z-10 bg-dark-600 ${
        isFullWidth && "border-b border-solid border-light-200"
      }`}
    >
      <div
        className={`flex container justify-between items-center h-18 md:h-29.5 gap-x-2`}
      >
        <div className="flex items-center justify-between w-full gap-x-16 lg:gap-x-14">
          <Link href="/">
            <div>
              <button>
                <Image src="/logo.svg" alt="" width={109} height={40} />
              </button>
            </div>
          </Link>
          <div className="flex items-center gap-x-16 lg:gap-x-14s">
            {menu.map(({ title, path, icon }, i) => (
              <Link
                key={`${path}-${i}`}
                href={path}
                className={"flex items-center"}
              >
                <Image
                  src={icon}
                  alt=""
                  width={32}
                  height={32}
                  className="mr-4"
                />
                <div
                  className={classnames("font-semibold", {
                    active: pathname === path,
                  })}
                >
                  {title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
