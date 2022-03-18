import { ChangeEvent, useContext } from "react";
import { Context } from "../../Context";
import styled from "styled-components";
import { citie } from "../../types";
const SelectEl = styled.select`
  margin: 15px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border-color: #e3e3e3;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
`;
interface SelectElProps {
  cities?: citie[];
  sources?: string[];
  firstOption: string;
  id: string;
}
export default function Select({
  sources,
  cities,
  firstOption,
  id,
}: SelectElProps) {
  const { setChooseCitie, setChooseSource } = useContext(Context);
  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.id) {
      case "citie":
        setChooseCitie(e.target.value);
        break;
      case "source":
        setChooseSource(e.target.value);
        break;
    }
  };
  return (
    <SelectEl
      id={id}
      onChange={(e) => {
        handleChangeSelect(e);
      }}
    >
      <option>{firstOption}</option>
      {cities
        ? cities?.map((item) => {
            return <option key={item.id}>{item.name}</option>;
          })
        : sources?.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
    </SelectEl>
  );
}
