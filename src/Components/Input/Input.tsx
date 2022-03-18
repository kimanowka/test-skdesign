import styled from "styled-components";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Context } from "../../Context";

export default function Input({
  label,
  placeholder,
  necessarily,
  id,
}: InputProps) {
  const {
    setName,
    setPhone,
    setAdress,
    setOrganisation,
    setEmail,
    setLink,
    user,
  } = useContext(Context);
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [user]);
  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        setValue(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        setValue(e.target.value);
        break;
      case "adress":
        setAdress(e.target.value);
        setValue(e.target.value);
        break;
      case "organisation":
        setOrganisation(e.target.value);
        setValue(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        setValue(e.target.value);
        break;
      case "link":
        setLink(e.target.value);
        setValue(e.target.value);
        break;
    }
  };

  return (
    <Wrapper>
      <Label>
        {label} {necessarily ? "*" : ""}
      </Label>
      <InputEl
        id={id}
        placeholder={placeholder}
        onChange={(e) => {
          handleChangeUser(e);
        }}
        type={id === "phone" ? "number" : "text"}
        value={value}
      ></InputEl>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  aling-intems: center;
  justify-content: center;
  margin: 15px;
  width: 100%;
`;
const Label = styled.label``;
const InputEl = styled.input`
  height: 50px;
  border-radius: 8px;
  border-color: #e3e3e3;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  outline: none;
`;

interface InputProps {
  label: string;
  placeholder: string;
  necessarily: boolean;
  id: string;
}
