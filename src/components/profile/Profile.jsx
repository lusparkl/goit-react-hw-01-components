import { StatisticItem, StatisticList, UserCard, Wrapper } from './Profile.styled';

export const Profile = (props) => {
    const { username, tag, location, avatar, stats: { followers, views, likes }, } = props.user;
    return (
        <UserCard>
            <Wrapper>
                <img
                    src={avatar}
                    alt="User avatar"
                />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </Wrapper>

            <StatisticList>
                <StatisticItem>
                    <span >Followers </span>
                    <span>{followers}</span>
                </StatisticItem>
                <StatisticItem>
                    <span>Views </span>
                    <span>{views}</span>
                </StatisticItem>
                <StatisticItem>
                    <span>Likes </span>
                    <span>{likes}</span>
                </StatisticItem>
            </StatisticList>
        </UserCard>
    )
}

