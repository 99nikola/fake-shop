import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { requiredRule } from "../../rules";
import { ILoginForm } from "../../typescript/interfaces/LoginForm";
import Input from "../atoms/Input.styled";
import Button from "../atoms/Button.styled";
import Flex from "../atoms/Flex.styled";

const LoginForm: React.FC = () => {

    const form = useForm<ILoginForm>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            username: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<ILoginForm> = async (credentials) => {
        console.log(credentials);
        
        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            body: JSON.stringify({
                username: credentials.username,
                password: credentials.password
            })
        })
            .then(res => res.json())
            .then(token => console.log(token))
            .catch(error => console.error(error));
    }

    const onError: SubmitErrorHandler<ILoginForm> = (error) => {
        console.error(error);
    }


    return (
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
            <Flex 
                direction="column"
                alignItems="center"
                border="1px solid lightgray"
                backgroundColor="whitesmoke"
                padding="20px"
            >
                <Controller 
                    name="username"
                    control={form.control}
                    rules={requiredRule}
                    render={({ field, fieldState }) => (
                        <Input
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            ref={field.ref}
                            
                            placeholder="Username"
                            aria-invalid={Boolean(fieldState.error)}
                            errorMessage={fieldState.error?.message}
                        />
                    )}
                />

                <Controller 
                    name="password"
                    control={form.control}
                    rules={requiredRule}
                    render={({ field, fieldState }) => (
                        <Input
                            {...field}
                            type="password"
                            placeholder="Password"
                            error={Boolean(fieldState.error)}
                            errorMessage={fieldState.error?.message}
                        />
                    )}
                />

                <Button type="submit">Login</Button>
            </Flex>
        </form>
    );
}

export default LoginForm;