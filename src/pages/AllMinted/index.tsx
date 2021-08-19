import React from 'react';
import * as S from './styles';
import Header from "./header";
import Pig from "./pig";
import Modal from "react-modal";


const AllMinted: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const piggies = [
    {id: "1", img: "/images/pig.png"},
    {id: "2", img: "/images/pig.png"},
    {id: "3", img: "/images/pig.png"},
    {id: "4", img: "/images/pig.png"},
    {id: "5", img: "/images/pig.png"},
    {id: "6", img: "/images/pig.png"},
    {id: "7", img: "/images/pig.png"},
    {id: "8", img: "/images/pig.png"},
    {id: "9", img: "/images/pig.png"},
    {id: "10", img: "/images/pig.png"},
    {id: "11", img: "/images/pig.png"},
    {id: "12", img: "/images/pig.png"},
    {id: "13", img: "/images/pig.png"},
    {id: "14", img: "/images/pig.png"},
    {id: "15", img: "/images/pig.png"},
    {id: "16", img: "/images/pig.png"},
    {id: "17", img: "/images/pig.png"},
    {id: "18", img: "/images/pig.png"},
    {id: "19", img: "/images/pig.png"},
    {id: "20", img: "/images/pig.png"},
    {id: "21", img: "/images/pig.png"},
    {id: "22", img: "/images/pig.png"},
    {id: "23", img: "/images/pig.png"},
    {id: "24", img: "/images/pig.png"},
    {id: "25", img: "/images/pig.png"},
    {id: "26", img: "/images/pig.png"},
    {id: "27", img: "/images/pig.png"},
    {id: "28", img: "/images/pig.png"},
    {id: "29", img: "/images/pig.png"},
    {id: "30", img: "/images/pig.png"},
    {id: "31", img: "/images/pig.png"},
    {id: "32", img: "/images/pig.png"},
    {id: "33", img: "/images/pig.png"},
    {id: "34", img: "/images/pig.png"},
    {id: "35", img: "/images/pig.png"},
    {id: "36", img: "/images/pig.png"},
    {id: "37", img: "/images/pig.png"},
    {id: "38", img: "/images/pig.png"},
    {id: "39", img: "/images/pig.png"},
    {id: "40", img: "/images/pig.png"},
  ]

  const onClickInfo = (pig: object) =>{
    return () => {
      console.log('pig', pig);
      setIsOpen(true);
    }
  }

  const onClickNFT = (pig: object) =>{
    return () => {
      console.log('pig', pig);
    }
  }

  return (
    <S.Container>
      <Header />
      <S.Piggies>
        {
          piggies.map(pig => <Pig key={pig.id} id={pig.id} img={pig.img} onClickInfo={onClickInfo(pig)} onClickNFT={onClickNFT(pig)}/>)
        }
      </S.Piggies>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(60, 37, 53, 0.25)',
            zIndex: 99,
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '500px',
            zIndex: 9999
          },
        }}
      >
        <S.ModalBody>
          <S.ModalTitle>hooray, you now own Piggy no. x!</S.ModalTitle>
          <S.ModalContent>
            <img src={"/images/pig.png"} alt={"pig"}/>
            <S.ContentDetail>
              <S.DetailItem>
                <S.ItemTitle>Body</S.ItemTitle>
                <S.ItemContent>red body</S.ItemContent>
              </S.DetailItem>
              <S.DetailItem>
                <S.ItemTitle>Nose</S.ItemTitle>
                <S.ItemContent>hot pink nose</S.ItemContent>
              </S.DetailItem>
              <S.DetailItem>
                <S.ItemTitle>Eyes</S.ItemTitle>
                <S.ItemContent>tired eyes</S.ItemContent>
              </S.DetailItem>
              <S.DetailItem>
                <S.ItemTitle>Dome</S.ItemTitle>
                <S.ItemContent>green party hat</S.ItemContent>
              </S.DetailItem>
              <S.DetailItem>
                <S.ItemTitle>Front</S.ItemTitle>
                <S.ItemContent>drink</S.ItemContent>
              </S.DetailItem>
              <S.DetailItem>
                <S.ItemTitle>Back</S.ItemTitle>
                <S.ItemContent>dark clouds</S.ItemContent>
              </S.DetailItem>
            </S.ContentDetail>
          </S.ModalContent>
          <S.ModalAction>
            <S.ModalButton onClick={() => setIsOpen(false)}>CONFIRM</S.ModalButton>
          </S.ModalAction>
        </S.ModalBody>
      </Modal>
    </S.Container>
  );
};

export default AllMinted;
