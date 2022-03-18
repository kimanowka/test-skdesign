import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../../Context";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const Wrapper = styled.div``;
export default function MoreInfo() {
  const { visible, setVisible } = useContext(Context);

  return (
    <Wrapper
      onClick={() => {
        setVisible((prev) => !prev);
      }}
    >
      {visible ? "Скрыть" : "Показать"} дополнительные поля
      {visible ? (
        <AiOutlineArrowUp style={{ color: "#353238", height: "9px" }} />
      ) : (
        <AiOutlineArrowDown style={{ color: "#353238", height: "9px" }} />
      )}
    </Wrapper>
  );
}
