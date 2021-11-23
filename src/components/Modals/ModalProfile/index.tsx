import { Modal } from '@mui/material';
import React  from 'react';
import FriendProfile from "../../../pages/Chat/components/FriendProfile";

interface Props {
    open: boolean;
    username: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalProfile: React.FC<Props> = ({open, setOpen, username}) => {

  return (
      <Modal
          onClose={() => setOpen(false)}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          open={open}
      >
          <>
              <FriendProfile username={username} close={() => setOpen(false)}/>
          </>
      </Modal>
  );
};

export default ModalProfile;
