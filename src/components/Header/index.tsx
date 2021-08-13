import React  from 'react';
import * as S from './styles';

interface Props {

}


const Header: React.FC<Props> = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo className="float-none">

        </S.Logo>
      </S.Content>
    </S.Container>
  );
};

export default Header;
