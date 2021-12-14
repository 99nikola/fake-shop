import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { UserBreadcrumb } from "../../../breadcrumb";
import Breadcrumb from "../../../components/molecules/Breadcrumb";
import { IUser } from "../../../typescript/interfaces/Users";

interface UserProps {
    user: IUser
}

const User: NextPage<UserProps> = (props) => {
    return (
        <div>
            <Breadcrumb 
                items={UserBreadcrumb(props.user.name.firstname + " " + props.user.name.lastname, props.user.id)}
            />
            {props.user.username}
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const res = await fetch("https://fakestoreapi.com/users");
    const users: IUser[] = await res.json();

    const paths = users.map(user => ({
        params: {
            userId: user.id.toString()
        }
    }));

    return ({
        paths,
        fallback: false
    });
}

export const getStaticProps: GetStaticProps = async (context) => {

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