import { Dropdown, MenuProps } from "antd";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ isFullWidth = false }: { isFullWidth?: boolean }) => {
  const { pathname, asPath, query } = useRouter();
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
        <Link href="/" className="">
          <span className="flex py-3 w-[256px] pl-5 rounded-lg">
            <span className="ml-3 text-white">{"自分の記録"}</span>
          </span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <span className="flex py-3 w-[256px] pl-5 border-t-[1px] border-[#b1b0b0]">
          <span className="ml-3 text-white">{"体重グラフ"}</span>
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/">
          <span className="flex py-3 w-[256px] pl-5 border-t-[1px] border-[#b1b0b0]">
            <span className="ml-3 text-white">{"目標"}</span>
          </span>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link href="/">
          <span className="flex py-3 w-[256px] pl-5 border-t-[1px] border-[#b1b0b0]">
            <span className="ml-3 text-white">{"選択中のコース"}</span>
          </span>
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link href="/column">
          <span className="flex py-3 w-[256px] pl-5 border-t-[1px] border-[#b1b0b0]">
            <span className="ml-3 text-white">{"コラム一覧"}</span>
          </span>
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link href="/">
          <span className="flex py-3 w-[256px] pl-5 border-t-[1px] border-[#b1b0b0]">
            <span className="ml-3 text-white">{"設定"}</span>
          </span>
        </Link>
      ),
    },
  ];

  return (
    <div
      className={`flex h-[72px] w-full justify-center sticky top-0 z-10 bg-dark-500 ${
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
                <div className={pathname === path ? " text-primary-500" : ""}>
                  {title}
                </div>
              </Link>
            ))}

            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Image
                  src={"/svgs/icon_menu.svg"}
                  alt=""
                  width={32}
                  height={32}
                  className=""
                />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
