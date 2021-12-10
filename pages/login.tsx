import { NextPage } from "next";
import Flex from "../components/atoms/Flex.styled";
import LoginForm from "../components/organisms/LoginForm";
import { IUser } from "../typescript/interfaces/Users";

const Login: NextPage = () => {

    const onLogin= (user: IUser) => {
        console.log(user);
    }


    return (
        <Flex
            width="100%"
            height="100%"
            justifyContent="center"
        >
            <LoginForm />
        </Flex>
    );
}

export default Login;