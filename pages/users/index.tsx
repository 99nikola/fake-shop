import { GetStaticProps, NextPage } from "next"
import { IUser } from "../../typescript/interfaces/Users";

interface UsersProps {
    users: IUser[]
}

const Users: NextPage<UsersProps> = (props) => {
    return (
        <div>
            
        </div>
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
