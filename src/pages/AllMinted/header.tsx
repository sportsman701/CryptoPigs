import React from 'react';
import * as S from './styles';

const Header: React.FC = () => {

  return (
    <S.Header>
      <S.HeaderTitle>list of minted piggies</S.HeaderTitle>
      <S.HeaderRight>
        <S.HeaderMenu>first page</S.HeaderMenu>-
        <S.HeaderMenu>previous 250</S.HeaderMenu>-
        <S.HeaderMenu>next 250</S.HeaderMenu>-
        <S.HeaderMenu>last page</S.HeaderMenu>
      </S.HeaderRight>
    </S.Header>
  );
};

export default Header;
