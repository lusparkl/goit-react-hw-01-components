import { Profile } from "./profile/Profile";
import { Statistic } from "./statistic/Statistic";
import { FriendList } from "./friendsList/FriendList";
import { TransactionsTable } from "./transactionsTable/TransactionsTable";
import { GlobalStyle } from "./GlobalStyles";
import user from '../user.json';
import stats from '../data.json';
import friends from '../friends.json';
import transactionsInfo from '../transactions.json';




export const App = () => {
    return (
        <>
            <Profile user={user} />
            <Statistic stats={stats} />
            <FriendList friends={friends}></FriendList>
            <TransactionsTable transactionsInfo={transactionsInfo}></TransactionsTable>
            <GlobalStyle/>
        </>
    );
};
