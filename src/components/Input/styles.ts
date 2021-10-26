import styled from "styled-components";
import {TextField} from "@mui/material";

interface Props {
    success?: boolean;
    error?: boolean;
    typeAlert?: "success" | "error" | "warning" | "info";
}

export const InputContainer = styled(TextField)<Props>`
  width: 100%;

  & label {
    color: ${({typeAlert}) => typeAlert === "success" ? "var(--success)" : typeAlert === "error" ? "var(--error)" : typeAlert === "warning" ? "var(--warning)" : typeAlert === "info" ? "var(--info)" : '#5F5F5F'};
    font-weight: 400;

    &.Mui-focused {
      color: ${({typeAlert}) => typeAlert === "success" ? "var(--success)" : typeAlert === "error" ? "var(--error)" : typeAlert === "warning" ? "var(--warning)" : typeAlert === "info" ? "var(--info)" : 'var(--primary)'};
    }
  }

  .MuiInput-underline:after {
    border-bottom-color: ${({typeAlert}) => typeAlert === "success" ? "var(--success)" : typeAlert === "error" ? "var(--error)" : typeAlert === "warning" ? "var(--warning)" : typeAlert === "info" ? "var(--info)" : 'var(--primary)'};
  }

  .MuiFilledInput-underline:after {
    border-bottom-color: ${({typeAlert}) => typeAlert === "success" ? "var(--success)" : typeAlert === "error" ? "var(--error)" : typeAlert === "warning" ? "var(--warning)" : typeAlert === "info" ? "var(--info)" : 'var(--primary)'};
  }

  .MuiOutlinedInput-root {
    fieldset {
      border-color: ${({typeAlert}) => typeAlert === "success" ? "var(--success)" : typeAlert === "error" ? "var(--error)" : typeAlert === "warning" ? "var(--warning)" : typeAlert === "info" ? "var(--info)" : '#B6B7BD'} !important;
    }

    &.Mui-focused fieldset {
      border-color: ${({typeAlert}) => typeAlert === "success" ? "var(--success)" : typeAlert === "error" ? "var(--error)" : typeAlert === "warning" ? "var(--warning)" : typeAlert === "info" ? "var(--info)" : 'var(--primary)'} !important;
    }
  }
`

export const MessageBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  height: 20px;
`;

export const Message = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: #09101D;
  opacity: 0.6;
`;

export const AlertBox = styled.div<Props>`
  padding: 6px 16px;

  min-height: 32px;
  width: 100%;

  background: ${({typeAlert}) => typeAlert === "success" ? "var(--success-light)" : typeAlert === "error" ? "var(--error-light)" : typeAlert === "warning" ? "var(--warning-light)" : typeAlert === "info" ? "var(--info-light)" : "#e9e9e9"};
  margin-bottom: 4px;
  border-radius: 8px;
`;

export const AlertText = styled.p<Props>`
  font-size: 13px;
  line-height: 20px;
  color: ${({typeAlert}) => typeAlert === "success" ? "var(--success)" : typeAlert === "error" ? "var(--error)" : typeAlert === "warning" ? "var(--warning)" : typeAlert === "info" ? "var(--info)" : 'var(--grey-dark)'};
`
