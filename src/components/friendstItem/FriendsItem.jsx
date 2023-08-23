import { FriendCard, Image, Name } from "./FriendsItem.styled";
import { BsFillPersonFill } from "react-icons/bs";

export const FriendsItem = ({ friend }) => {
    return (
        <FriendCard $isOnline={friend.isOnline}>
            <BsFillPersonFill />
            <Image src={friend.avatar} alt="User avatar" width="48" />
            <Name>{friend.name}</Name>
        </FriendCard>
    )
}
