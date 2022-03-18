import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";
import MoreInfo from "../MoreInfo/MoreInfo";
import Select from "../Select/Select";
import { useContext } from "react";
import { Context } from "../../Context";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  width: 440px;
  height: 611px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  padding: 40px, 30px, 40px, 30px;
`;
const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function Contact() {
  const { visible, cities, sources } = useContext(Context);
  return (
    <Wrapper>
      <WrapperInput>
        <Input
          label="Ваше имя"
          placeholder="Иван"
          necessarily={true}
          id="name"
        ></Input>
        <Input
          label="номер телефона"
          placeholder="+7 (000) 000-00-00"
          necessarily={true}
          id="phone"
        ></Input>
      </WrapperInput>
      <WrapperInput>
        <Input
          label="E-mail"
          placeholder="example@skdesign.ru"
          necessarily={true}
          id="email"
        ></Input>
        <Input
          label="Ссылка на профиль"
          placeholder="instagram.com/skde…"
          necessarily={true}
          id="link"
        ></Input>
      </WrapperInput>
      <Select cities={cities!} firstOption="Выберите город" id="citie"></Select>
      <Input
        label="Название организации/студии"
        placeholder="SK Design"
        necessarily={false}
        id="organisation"
      ></Input>
      <MoreInfo></MoreInfo>
      {visible ? (
        <div>
          <Input
            label="Получатель"
            placeholder="ФИО"
            necessarily={false}
            id="adress"
          ></Input>
          <Select
            sources={sources!}
            firstOption="Откуда про нас узнали?"
            id="source"
          ></Select>
        </div>
      ) : null}
      <Button></Button>
    </Wrapper>
  );
}
