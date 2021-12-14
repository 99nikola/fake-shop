import { NextPage } from "next"
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../components/organisms/Pagination";
import usePagination from "../../hooks/usePagination";
import { wrapper } from "../../store";
import { fetchUsers } from "../../store/users/UsersActions";

const Users: NextPage = () => {

    const { users, isFetching } = useSelector((state: any) => state.users);
    const usersToRender = usePagination({
        items: users
    });

    const UsersToRender = useMemo(() => (
        isFetching
            ? "Loading"
            : usersToRender.map(user => (
                <Link key={user.id} href={`/users/${user.id}?${encodeURIComponent(user.name.firstname + " " + user.name.lastname)}`}>
                    <li>{user.name.firstname} {user.name.lastname}</li>
                </Link>))
    ), [usersToRender, isFetching]);

    return (
        <ul>
            {UsersToRender}
            <Pagination 
                total={users.length}
            />
        </ul>
    )
}

Users.getInitialProps = wrapper.getInitialPageProps(store => () => {
    
    const state = store.getState().users;
    if (state.isFetching || state.users.length !== 0)
        return;
    
    store.dispatch(fetchUsers() as any);
});

export default Users;
