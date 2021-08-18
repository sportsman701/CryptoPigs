import styled from 'styled-components';
import {typography} from "~/styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 20px;
`;

//Header
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
  margin: 0 8px;
  cursor: pointer;
  a {
    color: #ff4e91;
  }
  `;

//Content
export const Attributes = styled.div`
  width: 100%
  `;

export const Category = styled.div`
    margin: 20px 0;
  `;

export const CategoryTitle = styled.div`
  color: ${typography.colors.menu};
  margin-left: 12px;
  text-transform: lowercase;
  font-size: 18px;
  `;

export const CategoryContent = styled.div`
    display: flex;
    margin-top: 8px;
    width: 100%;
    flex-wrap: wrap;
  `;

export const AttributeContainer = styled.div`
  width: 150px;
  height: 210px;
  margin: 8px;
  img{
    width: 150px;
    height: 150px;
    border-radius: 8px;
    cursor: pointer;
  }

  @media (min-width: 768px){
    width: 200px;
    height: 240px;

    img{
      width: 200px;
      height: 200px;
    }
  }
`;

export const AttributeContent = styled.div`
  margin: 4px 8px 0 8px;
`;

export const Attribute = styled.div`
  color: ${typography.colors.menu};
  font-size: 14px;
  text-transform: lowercase;
`;

export const AttributeMinted = styled.div`
  color: ${typography.colors.main};
  font-size: 12px;
`;
