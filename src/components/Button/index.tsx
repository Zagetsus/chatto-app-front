import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    scale?: string;
    color?: string;
    expand?: boolean;
    outline?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<Props> = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

export default Button;
