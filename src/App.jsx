import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PopBrowse } from "./components/PopBrowse";
import { PopNewCard } from "./components/PopNewCard";
import { PopUser } from "./components/PopUser";
import './App.css'
import { useEffect, useState } from "react";
import { tasks } from "./data";
import { GlobalStyle, Wrapper, Loader } from "./globalStyle.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme.js";
function App() {
  const [cards, setCards] = useState(tasks);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState("light");

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      date: "30.1.2023",
      topic: "Web Design",
      title: "Новая задача",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme === "light" ? light : dark}>
      <GlobalStyle />
      <Wrapper>
        <Header addCard={addCard} setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
        {isLoading ? (
          <Loader>Данные загружаются...</Loader>
        ) : (
          <Main cards={cards} />
        )}
        <PopBrowse />
        <PopNewCard />
        <PopUser />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;