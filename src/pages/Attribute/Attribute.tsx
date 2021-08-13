import React from 'react';
import * as S from './styles';

interface props {
  id: string,
  img: string,
  minted: number
}

const Attribute: React.FC<props> = ({img, id, minted}) => {

  return (
    <S.AttributeContainer>
      <img src={img} alt={"attribute image"}/>
      <S.AttributeContent>
        <S.Attribute>{id}</S.Attribute>
        <S.AttributeMinted>{minted} total minted</S.AttributeMinted>
      </S.AttributeContent>
    </S.AttributeContainer>
  );
};

export default Attribute;
