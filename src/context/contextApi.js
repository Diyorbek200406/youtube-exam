import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";
export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [login, setLogin] = useState(false);
  const [mode, setMode] = useState(true);
  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`)
      .then((contents) => {
        console.log(contents?.contents);
        setSearchResults(contents?.contents);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
        login,
        setLogin,
        mode,
        setMode,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
