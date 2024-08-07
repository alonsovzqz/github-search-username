import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

import { getOne } from "./services/user";

import SearchForm from "./components/SearchForm/SearchForm";
import UserCard from "./components/UserCard/UserCard";

import { IGithubUser } from "./interfaces/IGithubUser";
import NotFound from "./components/NotFound/NotFound";

import { ContentWrapper, Title } from "./App.styles";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const [user, setUser] = useState<IGithubUser>();

  const searchUserRequest = async () => {
    try {
      const response = await getOne(searchTerm);
      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          setNotFound(true);
        }
      } else {
        console.error("Error fetching user: ", err);
      }
    } finally {
      setSearchTerm("");
    }
  };

  const searchTermHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (notFound) {
      setNotFound(false);
    }
    searchUserRequest();
  };

  return (
    <ContentWrapper>
      <Title>Github Search Finder</Title>
      <SearchForm
        searchTermValue={searchTerm}
        searchTermHandler={searchTermHandler}
        onSubmitHandler={onSubmitHandler}
      />
      {notFound && (<NotFound />)}
      {user && <UserCard user={user} />}
    </ContentWrapper>
  );
}

export default App;
