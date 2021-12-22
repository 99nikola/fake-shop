import { NextPage } from "next";
import Flex from "../components/atoms/Flex.styled";
import LoginForm from "../components/organisms/LoginForm";

const Login: NextPage = () => {
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