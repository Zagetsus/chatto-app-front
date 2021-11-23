import React, {useCallback, useEffect, useState} from "react";
import {Container, MenuContainer, MessageContainer, OtherContainer, Wrapper} from "./styles";
import Menu from "./components/Menu";
import Conversation from "./components/Conversation";
import Header from "../../components/Header";
import {api} from "../../services/api";
import {IFriends} from "../../interfaces/friends";
import FriendProfile from "./components/FriendProfile";
import ModalConversation from "../../components/Modals/ModalConversation";
import useMedia from "../../hooks/useMedia";
import ModalProfile from "../../components/Modals/ModalProfile";

const Chat = () => {
    const [friends, setFriends] = useState<IFriends[]>([] as IFriends[]);
    const [usernameActive, setUsernameActive] = useState<string>("");
    const [messageModal, setMessageModal] = useState(false)
    const [profile, setProfile] = useState(false);
    const mobile = useMedia("(max-width: 1279px)");

    const handleMessage = ( username: string ) => {
        setUsernameActive(username);

        if (mobile) {
            setMessageModal(!messageModal)
        }
    }

    const getFriends = useCallback(async () => {
        try {
            const { data } = await api.get<IFriends[]>('/friends');
            setFriends(data)
        } catch (e) {
            console.log(e)
        }
    }, []);

    useEffect(() => {
        getFriends().then()
        // eslint-disable-next-line
    }, []);

    return (
        <Wrapper>
            <Header/>
            <Container>
                <MenuContainer>
                    <Menu handleMessage={handleMessage} friends={friends}/>
                </MenuContainer>
                <MessageContainer>
                    <Conversation username={usernameActive} setProfile={setProfile}/>
                </MessageContainer>
                <OtherContainer open={profile}>
                    {
                        profile &&
                        <FriendProfile username={usernameActive} close={() => setProfile(false)} />
                    }
                </OtherContainer>
            </Container>

            <ModalConversation username={usernameActive} open={messageModal} setOpen={setMessageModal} setProfile={setProfile}/>

            {
                mobile &&
                <ModalProfile username={usernameActive} open={profile} setOpen={setProfile}/>
            }
        </Wrapper>
    );
};

export default Chat;
