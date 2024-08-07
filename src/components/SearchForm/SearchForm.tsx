import { ChangeEvent, FormEvent } from "react";
import { FormWrapper, InputStyle, ButtonStyle } from "./styles";

type SearchFormType = {
  searchTermValue: string;
  searchTermHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: (event: FormEvent<HTMLFormElement>) => void;
};

const SearchForm = ({
  searchTermValue,
  searchTermHandler,
  onSubmitHandler,
}: SearchFormType) => {
  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <InputStyle
        placeholder="Type a username..."
        value={searchTermValue}
        onChange={searchTermHandler}
      />
      <ButtonStyle type="submit">Search</ButtonStyle>
    </FormWrapper>
  );
};

export default SearchForm;
