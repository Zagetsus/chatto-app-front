import React from 'react';
import {Modal, Slide} from "@mui/material";
import Conversation from "../../../pages/Chat/components/Conversation";


interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const ModalConversation: React.FC<Props> = ({open, setOpen}) => {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Slide in={open} direction={"left"}>
                <div>
                    <Conversation close={() => setOpen(false)}/>
                </div>
            </Slide>
        </Modal>
    );
};

export default ModalConversation;
