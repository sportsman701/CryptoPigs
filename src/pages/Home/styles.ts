import styled from 'styled-components';
import {ArrowRight} from '@styled-icons/bootstrap/ArrowRight';
import {File} from '@styled-icons/boxicons-regular/File';
import {FileBlank} from '@styled-icons/boxicons-regular/FileBlank';
import {Telegram} from '@styled-icons/bootstrap/Telegram';
import {Twitter} from '@styled-icons/bootstrap/Twitter';
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {ChartLine} from '@styled-icons/fa-solid/ChartLine';
import {Check2Square} from '@styled-icons/bootstrap/Check2Square';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .home{
      background-image: url(/images/bg_t.png);
      background-size: cover;
      background-repeat: no-repeat;
  }
`;

export const Content = styled.div`
    max-width: 1216px;
    float: none;
    margin: auto;
`;

export const ArrowRightIcon = styled(ArrowRight)`
  color: white;
  margin-left: 8px
`;
export const FileIcon = styled(File)`
  color: white;
`;
export const FileBlankIcon = styled(FileBlank)`
  color: white;
`;

export const TelegramIcon = styled(Telegram)`
  color: white;
`;

export const TwitterIcon = styled(Twitter)`
  color: white;
`;

export const EmailIcon = styled(EmailOutline)`
  color: white;
`;

export const ChartIcon = styled(ChartLine)`
  color: white;
`;

export const Check2SquareIcon = styled(Check2Square)`
   color: #007bff;
   margin-right: 8px;
`;
