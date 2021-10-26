import React, {InputHTMLAttributes} from 'react';
import {AlertBox, AlertText, InputContainer, Message, MessageBox} from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    typeAlert?: "success" | "error" | "warning" | "info";
    description?: string;
    alertMessage?: string;
}

const Input: React.FC<Props> = (
    {
        value,
        label,
        id,
        onChange,
        onBlur,
        type,
        typeAlert,
        description,
        alertMessage
    }) => {

    return (
        <>
            <InputContainer
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                size="small"
                typeAlert={typeAlert}
                id={id ?? "input"}
                type={type}
                label={label}
                variant="outlined"
            />
            {
                alertMessage &&
                <AlertBox typeAlert={typeAlert}>
                    <AlertText typeAlert={typeAlert}>{alertMessage}</AlertText>
                </AlertBox>
            }
            <MessageBox>
                <Message>{description}</Message>
            </MessageBox>
        </>
    );
};

export default Input;
