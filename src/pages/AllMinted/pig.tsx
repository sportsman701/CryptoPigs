import React from 'react';
import * as S from './styles';

interface props {
  id: string,
  img: string,
  onClickInfo: Function,
  onClickNFT: Function
}

const Pig: React.FC<props> = ({img, id, onClickInfo, onClickNFT}) => {

  return (
    <S.PigContainer>
      <img src={img} alt={"pig_image"} onClick={() => onClickNFT()}/>
      <S.PigContent>
        <S.PigId>#{id}</S.PigId>
        <S.PigInfo onClick={() => onClickInfo()}>Info</S.PigInfo>
      </S.PigContent>
    </S.PigContainer>
  );
};

export default Pig;
