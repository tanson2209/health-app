import { Select } from "antd";
import styled from "styled-components";

const StyledFooter = styled.footer``;

const Footer = () => {
  const list = [
    {
      title: "会員登録",
      href: "https://www.facebook.com/",
    },
    {
      title: "運営会社",
      href: "https://www.facebook.com/",
    },
    {
      title: "利用規約",
      href: "https://www.facebook.com/",
    },
    {
      title: "個人情報の取扱について",
      href: "https://www.facebook.com/",
    },
    {
      title: "特定商取引法に基づく表記",
      href: "https://www.facebook.com/",
    },
    {
      title: "お問い合わせ",
      href: "https://www.facebook.com/",
    },
  ];
  return (
    <div className=" flex justify-center py-14 w-full bg-dark-600 ">
      <div className=" container w-full ">
        <div className="flex items-center w-full gap-x-12 lg:gap-x-14">
          {list.map((item, key) => (
            <a
              target={"_blank"}
              rel="noreferrer"
              href={item.href}
              className=" text-sm text-center"
              key={`${"footer"}-${key}`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
