import React, { memo } from "react";
import { Button as ButtonAntd, Space, ButtonProps } from "antd";
import styled from "styled-components";

interface Props extends ButtonProps {}

const HeaderStyled = styled.header``;

const Button = memo((props: Props) => {
  return (
    <ButtonAntd
      className="bg-button min-w-[296px] min-h-[56px] px-1 py-4"
      type="primary"
      {...props}
    >
      {props.title}
    </ButtonAntd>
  );
});

export default Button;
