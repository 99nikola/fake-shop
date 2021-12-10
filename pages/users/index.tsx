import { GetStaticProps, NextPage } from "next"
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Pagination from "../../components/molecules/Pagination";
import usePagination from "../../hooks/usePagination";
import { IUser } from "../../typescript/interfaces/Users";
import getPage from "../../utils/getPage";

interface UsersProps {
    users: IUser[]
}

const Users: NextPage<UsersProps> = (props) => {
    const page = getPage();

    const usersToRender = usePagination({
        items: props.users,
        page,
        perPage: 3
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
                currPage={page}
                total={props.users.length}
                perPage={3}
            />
        </ul>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const res = await fetch("https://fakestoreapi.com/users");
    const users = await res.json();

    return ({
        props: {
            users
        }
    })
}

export default Users;
