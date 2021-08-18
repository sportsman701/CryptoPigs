import React from 'react';
import * as S from './styles';
import Header from './header';
import Attribute from './Attribute';

interface AttributeObject{
  attribute: string,
  minted: number,
  img: string
}

interface AttributesMap{
  [key: string]: Array<AttributeObject>
}

const Attributes: React.FC = () => {

  const attributes : AttributesMap = {
    Bodies: [
      {attribute: "Pink Body", minted: 873, img: "/images/pig.png"},
      {attribute: "Purple Body", minted: 873, img: "/images/pig.png"},
      {attribute: "Orange Body", minted: 873, img: "/images/pig.png"},
      {attribute: "Red Body", minted: 873, img: "/images/pig.png"},
      {attribute: "Silver Body", minted: 873, img: "/images/pig.png"},
      {attribute: "Gold Body", minted: 873, img: "/images/pig.png"},
      {attribute: "White Body", minted: 873, img: "/images/pig.png"},
      {attribute: "Black Body", minted: 873, img: "/images/pig.png"},
      {attribute: "Brown Body", minted: 873, img: "/images/pig.png"},
      {attribute: "Boar Pattern Body", minted: 873, img: "/images/pig.png"},
      {attribute: "Spotted Body", minted: 873, img: "/images/pig.png"},
      {attribute: "Muddy Pink Body", minted: 873, img: "/images/pig.png"},
      {attribute: "Green Body", minted: 873, img: "/images/pig.png"},
    ],
    Noses: [
      {attribute: "Hot Pink Nose", minted: 873, img: "/images/pig.png"},
      {attribute: "Burned Orange Nose", minted: 873, img: "/images/pig.png"},
      {attribute: "Crimson Red Nose", minted: 873, img: "/images/pig.png"},
      {attribute: "Dark Brown Nose", minted: 873, img: "/images/pig.png"},
      {attribute: "Golden Nose Nose", minted: 873, img: "/images/pig.png"},
      {attribute: "Nose Ring Pink Nose", minted: 873, img: "/images/pig.png"},
      {attribute: "Small Pink Nose", minted: 873, img: "/images/pig.png"},
      {attribute: "Black Pig Nose", minted: 873, img: "/images/pig.png"},
      {attribute: "Brown Boar Nose", minted: 873, img: "/images/pig.png"},
    ],
    Eyes: [
      {attribute: "Regular Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Surprised Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Money Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Sleepy Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Mad Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Wink Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Eye Patch Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Vault Lock Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Blue Eyes Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Golden Eyes Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Spider Eyes Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Sad Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Dizzy Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Crosses Eye", minted: 873, img: "/images/pig.png"},
      {attribute: "Shades Eye", minted: 873, img: "/images/pig.png"},
    ],
    Head: [
      {attribute: "Lil’ Piggy", minted: 873, img: "/images/pig.png"},
      {attribute: "Golden Lil’ Piggy", minted: 873, img: "/images/pig.png"},
      {attribute: "Punk Hair Pink", minted: 873, img: "/images/pig.png"},
      {attribute: "Punk Hair White", minted: 873, img: "/images/pig.png"},
      {attribute: "Punk Hair Yellow", minted: 873, img: "/images/pig.png"},
      {attribute: "Head Band Red", minted: 873, img: "/images/pig.png"},
      {attribute: "Head Band Blue", minted: 873, img: "/images/pig.png"},
      {attribute: "Head Band Gray", minted: 873, img: "/images/pig.png"},
      {attribute: "Coink Tokens", minted: 873, img: "/images/pig.png"},
      {attribute: "Slightly Tilted Halo", minted: 873, img: "/images/pig.png"},
      {attribute: "Bunny Ears", minted: 873, img: "/images/pig.png"},
      {attribute: "Top Hat White", minted: 873, img: "/images/pig.png"},
      {attribute: "Top Hat Brown", minted: 873, img: "/images/pig.png"},
      {attribute: "Top Hat Black", minted: 873, img: "/images/pig.png"},
      {attribute: "Chef Hat", minted: 873, img: "/images/pig.png"},
      {attribute: "Harmony Tattoo", minted: 873, img: "/images/pig.png"},
      {attribute: "Ducky", minted: 873, img: "/images/pig.png"},
      {attribute: "Wizard Hat", minted: 873, img: "/images/pig.png"},
      {attribute: "Grass Block", minted: 873, img: "/images/pig.png"},
      {attribute: "Party Hat Green", minted: 873, img: "/images/pig.png"},
      {attribute: "Party Hat Blue", minted: 873, img: "/images/pig.png"},
      {attribute: "Party Hat Red", minted: 873, img: "/images/pig.png"},
      {attribute: "Horns", minted: 873, img: "/images/pig.png"},
      {attribute: "Cleaver", minted: 873, img: "/images/pig.png"},
      {attribute: "Nurse Hat", minted: 873, img: "/images/pig.png"},
      {attribute: "Miner Hat", minted: 873, img: "/images/pig.png"},
      {attribute: "Leaves", minted: 873, img: "/images/pig.png"},
      {attribute: "Blonde Wig", minted: 873, img: "/images/pig.png"},
    ],
    Front: [
      {attribute: "Carrot", minted: 873, img: "/images/pig.png"},
      {attribute: "Turnip", minted: 873, img: "/images/pig.png"},
      {attribute: "Food Bowl Gray", minted: 873, img: "/images/pig.png"},
      {attribute: "Food Bowl Green", minted: 873, img: "/images/pig.png"},
      {attribute: "Food Bowl Red", minted: 873, img: "/images/pig.png"},
      {attribute: "Fishbones", minted: 873, img: "/images/pig.png"},
      {attribute: "Bone", minted: 873, img: "/images/pig.png"},
      {attribute: "Coink Token Stack Big", minted: 873, img: "/images/pig.png"},
      {attribute: "Coink Token Stack Small", minted: 873, img: "/images/pig.png"},
      {attribute: "Tiny Rocket Red", minted: 873, img: "/images/pig.png"},
      {attribute: "Tiny Rocket Silver", minted: 873, img: "/images/pig.png"},
      {attribute: "Lottery Ticket", minted: 873, img: "/images/pig.png"},
      {attribute: "Four-Leaf Clover", minted: 873, img: "/images/pig.png"},
      {attribute: "Mouse", minted: 873, img: "/images/pig.png"},
      {attribute: "Skull", minted: 873, img: "/images/pig.png"},
      {attribute: "Bandage", minted: 873, img: "/images/pig.png"},
      {attribute: "Mushrooms", minted: 873, img: "/images/pig.png"},
      {attribute: "Beach Ball Red", minted: 873, img: "/images/pig.png"},
      {attribute: "Beach Ball Multi", minted: 873, img: "/images/pig.png"},
      {attribute: "Blue Gemstone", minted: 873, img: "/images/pig.png"},
      {attribute: "Drink", minted: 873, img: "/images/pig.png"},
      {attribute: "Maki", minted: 873, img: "/images/pig.png"},
      {attribute: "Mochi", minted: 873, img: "/images/pig.png"},
      {attribute: "Snek", minted: 873, img: "/images/pig.png"},
    ],
    Back: [
      {attribute: "Angel Wings", minted: 873, img: "/images/pig.png"},
      {attribute: "Jet Pack", minted: 873, img: "/images/pig.png"},
      {attribute: "Farmer Spade", minted: 873, img: "/images/pig.png"},
      {attribute: "Cloud", minted: 873, img: "/images/pig.png"},
      {attribute: "Maize Plant", minted: 873, img: "/images/pig.png"},
      {attribute: "Tiny UFO", minted: 873, img: "/images/pig.png"},
      {attribute: "Dark Clouds", minted: 873, img: "/images/pig.png"},
      {attribute: "Bee Buddies", minted: 873, img: "/images/pig.png"},
      {attribute: "Mat", minted: 873, img: "/images/pig.png"},
      {attribute: "Stars", minted: 873, img: "/images/pig.png"},
      {attribute: "Sunny Day", minted: 873, img: "/images/pig.png"},
      {attribute: "Meteorite", minted: 873, img: "/images/pig.png"},
      {attribute: "Road Sign", minted: 873, img: "/images/pig.png"},
      {attribute: "Hay Bales", minted: 873, img: "/images/pig.png"},
      {attribute: "Green Candles", minted: 873, img: "/images/pig.png"},
    ],
    Background: [
      {attribute: "White", minted: 873, img: "/images/pig.png"},
      {attribute: "Gray", minted: 873, img: "/images/pig.png"},
      {attribute: "Orange", minted: 873, img: "/images/pig.png"},
      {attribute: "Green", minted: 873, img: "/images/pig.png"},
      {attribute: "Purple", minted: 873, img: "/images/pig.png"},
      {attribute: "Rainbow", minted: 873, img: "/images/pig.png"},
    ]
  }

  const renderCategory = (key : string) => {
      return (
        <S.Category key={key} id={key}>
          <S.CategoryTitle>{key}</S.CategoryTitle>
          <S.CategoryContent>
            {
              attributes[key].map(a => <Attribute key={a.attribute} id={a.attribute} minted={a.minted} img={a.img}/>)
            }
          </S.CategoryContent>
        </S.Category>
      );
  }

  return (
    <S.Container>
      <Header/>
      <S.Attributes>
        {
          Object.keys(attributes).map(key => renderCategory(key))
        }
      </S.Attributes>
    </S.Container>
  );
};

export default Attributes;
