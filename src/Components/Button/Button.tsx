import { useContext } from "react";
import { Context } from "../../Context";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from "styled-components";
const ButtonEl = styled.button<{ disabled: boolean }>`
  width: 380px;
  height: 50px;
  border-radius: 8px;
  background: ${(props) => (props.disabled ? "#E3E3E3" : "#00657E")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 25px;
  border: none;
  cursor: pointer;
  color: #828282;
`;
export default function Button() {
  const { buttonClick, disable, isLoading } = useContext(Context);
  return (
    <ButtonEl onClick={buttonClick} disabled={disable}>
      {isLoading ? (
        <AiOutlineLoading3Quarters style={{ color: "#00657E" }} />
      ) : (
        "Отправить заявку"
      )}
    </ButtonEl>
  );
}
