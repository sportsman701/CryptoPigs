import styled from 'styled-components';
import {typography} from "~/styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 20px;
`;

// Header
export const Header = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  alight-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px){
    flex-direction: row;
  }
`;

export const HeaderTitle = styled.div`
  color: ${typography.colors.text};
  margin-top: 20px;
  @media (min-width: 768px){
    margin-top: unset;
  }
  `;

export const HeaderRight = styled.div`
  display: flex;
  alight-items: center;
  color: ${typography.colors.main};
  font-size: 14px;
  text-decoration-line: underline;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (min-width: 768px){
    margin-top: unset;
  }
  `;

export const HeaderMenu = styled.div`
  margin: 0 4px;
  cursor: pointer;
  `;


export const Piggies = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    flex-wrap: wrap;
  `;

export const PigContainer = styled.div`
  width: 140px;
  height: 162px;
  margin: 8px;
  img{
    width: 140px;
    height: 140px;
    border-radius: 8px;
    cursor: pointer;
  }

  @media (min-width: 768px){
    width: 200px;
    height: 232px;

    img{
      width: 200px;
      height: 200px;
    }
  }
`;

export const PigContent = styled.div`
  display: flex;
  alight-items: center;
  justify-content: space-between;
  margin: 4px 8px 0 8px;
`;

export const PigId = styled.div`
  color: ${typography.colors.menu};
`;

export const PigInfo = styled.div`
  color: ${typography.colors.main};
  cursor: pointer;
`;

// Modal
export const ModalBody = styled.div`
  padding: 8px 12px;
`;

export const ModalTitle = styled.div`
  color: ${typography.colors.text};
  margin-bottom: 24px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  img{
    width: 240px;
    height: 240px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContentDetail = styled.div`
  margin: 20px 0 0 0;

   @media (min-width: 768px) {
    margin: 0 0 0 20px;
   }
`;

export const DetailItem = styled.div`
  margin-bottom: 8px;
`;

export const ItemTitle = styled.div`
  color: ${typography.colors.menu};
  font-size: 14px;
`;

export const ItemContent = styled.div`
  color: ${typography.colors.main};
  font-size: 14px;
`;

export const ModalAction = styled.div`
  width: 100%;
  text-align: right;
`;

export const ModalButton = styled.div`
  display: inline-block;
  background-color: ${typography.colors.main};
  color: white;
  border-radius: 8px;
  padding: 8px 24px;
  margin-top: 20px;
  cursor: pointer;
`;
