import { GetStaticProps, NextPage, NextPageContext } from "next"
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../components/organisms/Pagination";
import usePagination from "../../hooks/usePagination";
import { wrapper } from "../../store";
import { setUsers } from "../../store/users/UsersActions";

const Users: NextPage = () => {

    const users = useSelector((state: any) => state.users);

    const usersToRender = usePagination({
        items: users
    });

    const UsersToRender = useMemo(() => (
        usersToRender.map(user => (
            <Link key={user.id} href={`/users/${user.id}?${encodeURIComponent(user.name.firstname + " " + user.name.lastname)}`}>
                <li>{user.name.firstname} {user.name.lastname}</li>
            </Link>
        ))
    ), [usersToRender]);

    return (
        <ul>
            {UsersToRender}
            <Pagination 
                total={users.length}
            />
        </ul>
    )
}

Users.getInitialProps = wrapper.getInitialPageProps(store => async (context) => {
    
    if (store.getState().users.length !== 0)
        return;

    const res = await fetch("https://fakestoreapi.com/users");
    const users = await res.json();
    
    store.dispatch(setUsers(users));
});

export default Users;
