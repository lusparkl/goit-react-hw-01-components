import { FriendsItem } from "components/friendstItem/FriendsItem"
import { List } from "./FriendsList.styled"

export const FriendList = ({ friends }) => {
    return (
            <List>
                {friends.map((friend) => <FriendsItem friend={friend} key={friend.id}></FriendsItem>)}
            </List>
    )
}
