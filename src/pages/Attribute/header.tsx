import React from 'react';
import * as S from './styles';

const Header: React.FC = () => {

  return (
    <S.Header>
      <S.HeaderTitle>list of piggy attributes</S.HeaderTitle>
      <S.HeaderRight>
        <S.HeaderMenu><a href={"#Bodies"}>bodies</a></S.HeaderMenu>
        <S.HeaderMenu><a href={"#Noses"}>attributes</a></S.HeaderMenu>
        <S.HeaderMenu><a href={"#Background"}>backgrounds</a></S.HeaderMenu>
      </S.HeaderRight>
    </S.Header>
  );
};

export default Header;
