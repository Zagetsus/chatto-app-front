import React from 'react';
import {Modal, Slide} from "@mui/material";
import Conversation from "../../../pages/Chat/components/Conversation";


interface Props {
    username: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setProfile: React.Dispatch<React.SetStateAction<boolean>>;
}


const ModalConversation: React.FC<Props> = ({username, open, setOpen, setProfile}) => {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Slide in={open} direction={"left"}>
                <div>
                    <Conversation username={username} setProfile={setProfile} close={() => setOpen(false)}/>
                </div>
            </Slide>
        </Modal>
    );
};

export default ModalConversation;
