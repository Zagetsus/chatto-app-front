import React from 'react';
import {Bubble, BubbleRow, BubbleText, Container, Hours} from "./styles";

interface Props {
    message: string;
    hours: string;
    owner?: boolean;
}

const Message: React.FC<Props> = ({owner, message, hours}) => {
    return (
        <Container owner={owner}>
            <BubbleRow owner={owner}>
                <Bubble owner={owner}>
                    <BubbleText owner={owner}>{message}</BubbleText>
                </Bubble>
            </BubbleRow>
            <Hours>{hours}</Hours>
        </Container>
    );
};

export default Message;
