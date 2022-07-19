import React from "react";
import Translator from "../i18n/translator";
import * as S from "./styled";

const NoSearch = () => {
  return (
    <S.Wrapper>
      <h1>
        <Translator path="noSearch.default" />
      </h1>
    </S.Wrapper>
  );
};

export default NoSearch;
