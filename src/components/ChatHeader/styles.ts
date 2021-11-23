import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  @media (min-width: 1279px) {
    padding: 2.89px 71.29px 2.89px 5.79px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05),
    inset 1px 2px 2px rgba(0, 0, 0, 0.01);
    border-radius: 4px;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderName = styled.h3`
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  color: #09101d;
  opacity: 0.8;
`;

export const HeaderStatus = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #09101d;
  opacity: 0.8;
`;

export const Avatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #e9e9e9;
  margin-right: 12px;

  @media (min-width: 1279px) {
    width: 75.21px;
    height: 75.21px;
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 10px;
  line-height: 20px;

  color: #09101d;
  opacity: 0.8;
  
  cursor: pointer;
`;
