import React from 'react';
import * as S from './styles';

const Header: React.FC = () => {

  return (
    <S.Header>
      <S.HeaderTitle>list of piggy attributes</S.HeaderTitle>
      <S.HeaderRight>
        <S.HeaderMenu>bodies</S.HeaderMenu>
        <S.HeaderMenu>attributes</S.HeaderMenu>
        <S.HeaderMenu>backgrounds</S.HeaderMenu>
      </S.HeaderRight>
    </S.Header>
  );
};

export default Header;
