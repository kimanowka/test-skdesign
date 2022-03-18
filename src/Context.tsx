import React, { useState, useCallback, useEffect } from "react";
import { citie, CardUser } from "./types";
interface ContextProps {
  cities: citie[] | undefined;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  sources: string[] | undefined;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  user: any;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  organisation: string;
  setOrganisation: React.Dispatch<React.SetStateAction<string>>;
  adress: string;
  setAdress: React.Dispatch<React.SetStateAction<string>>;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  сhooseCitie: string;
  setChooseCitie: React.Dispatch<React.SetStateAction<string>>;
  chooseSource: string;
  setChooseSource: React.Dispatch<React.SetStateAction<string>>;
  buttonClick: () => void;
  disable: boolean;
  setDisable: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const Context = React.createContext<ContextProps>({
  cities: [],
  visible: false,
  setVisible: () => {},
  sources: [],
  setUser: () => {},
  user: {},
  name: "",
  setName: () => {},
  phone: "",
  setPhone: () => {},
  email: "",
  setEmail: () => {},
  organisation: "",
  setOrganisation: () => {},
  adress: "",
  setAdress: () => {},
  link: "",
  setLink: () => {},
  сhooseCitie: "",
  setChooseCitie: () => {},
  chooseSource: "",
  setChooseSource: () => {},
  buttonClick: () => {},
  disable: true,
  setDisable: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [cities, setCities] = useState<citie[]>();
  const [sources, setSources] = useState<string[]>();
  const [visible, setVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [organisation, setOrganisation] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [сhooseCitie, setChooseCitie] = useState<string>("");
  const [chooseSource, setChooseSource] = useState<string>("");
  const [user, setUser] = useState<CardUser>();
  const [disable, setDisable] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    let cities = require("./cities.json");
    setCities(cities);
    let sources = require("./sources.json");
    setSources(sources);
  }, []);
  useEffect(() => {
    if (
      email.length <= 2 ||
      name.length <= 2 ||
      phone.length <= 10 ||
      link.length <= 3
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [email, link, name, phone]);

  const buttonClick = () => {
    setDisable(true);
    setIsLoading(true);
    setTimeout(() => {
      const user = {
        name: name,
        email: email,
        phone: phone,
        link: link,
        citie: сhooseCitie,
        organisation: organisation,
        adress: adress,
        from: chooseSource,
      };
      setUser(user);
      setDisable(false);
      setIsLoading(false);
      setName("");
      setPhone("");
      setLink("");
      setAdress("");
      setChooseCitie("");
      setChooseSource("");
      setOrganisation("");
      setEmail("");
      console.log(user);
    }, 2000);
  };
  return (
    <Context.Provider
      value={{
        cities,
        visible,
        setVisible,
        sources,
        setUser,
        user,
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail,
        organisation,
        setOrganisation,
        adress,
        setAdress,
        link,
        setLink,
        chooseSource,
        сhooseCitie,
        setChooseSource,
        setChooseCitie,
        buttonClick,
        disable,
        setDisable,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
