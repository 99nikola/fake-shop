import { GetServerSideProps, NextPage } from "next";
import { IUser } from "../../../typescript/interfaces/Users";

interface UserProps {
    user: IUser
}

const User: NextPage<UserProps> = (props) => {
    return (
        <div>
            {props.user.username}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const userId = context.params?.userId;
    const res = await fetch(`https://fakestoreapi.com/users/${userId}`);
    const user = await res.json();

    return ({
        props: {
            user
        }
    });
}

export default User;