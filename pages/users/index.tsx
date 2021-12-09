import { GetStaticProps, NextPage } from "next"
import Link from "next/link";
import { IUser } from "../../typescript/interfaces/Users";

interface UsersProps {
    users: IUser[]
}

const Users: NextPage<UsersProps> = (props) => {
    return (
        <ul>
            {props.users.map(user => (
                <Link key={user.id} href={`/users/${user.id}?${encodeURIComponent(user.name.firstname + " " + user.name.lastname)}`}>
                    <li>{user.name.firstname} {user.name.lastname}</li>
                </Link>
            ))}
        </ul>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const response = await fetch("https://fakestoreapi.com/users");
    const users = await response.json();

    return ({
        props: {
            users
        }
    })
}

export default Users;
