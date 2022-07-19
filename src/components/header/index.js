import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import I18n from "../i18n/i18n";
import Translator from "../i18n/translator";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <I18n />
      <S.Wrapper>
        <input
          type="text"
          placeholder={Translator({ path: "header.usernameInput" })}
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>
            <Translator path="header.submitSearch" />
          </span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
