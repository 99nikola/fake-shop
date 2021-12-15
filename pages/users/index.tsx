import { NextPage } from "next"
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { UsersBreadcrumb } from "../../breadcrumb";
import Breadcrumb from "../../components/molecules/Breadcrumb";
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
                <Link passHref={true} key={user.id} href={"/users/" + user.id}>
                    <a><li>{user.name.firstname} {user.name.lastname}</li></a>
                </Link>))
    ), [usersToRender, isFetching]);

    return (
    <>
        <Breadcrumb 
            items={UsersBreadcrumb}
        />
        <ul>
            {UsersToRender}
            <Pagination 
                total={users.length}
            />
        </ul>
    </>
    )
}

Users.getInitialProps = wrapper.getInitialPageProps(store => () => {
    
    const state = store.getState().users;
    if (state.isFetching || state.users.length !== 0)
        return;
    
    store.dispatch(fetchUsers() as any);
});

export default Users;
