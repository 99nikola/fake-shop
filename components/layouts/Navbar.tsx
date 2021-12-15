import Link from "next/link";
import Flex from "../atoms/Flex.styled";
import HeaderLink from "../atoms/HeaderLink";

interface NavbarProps {
    id?: string | number
}

const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <div data-testid={props.id}>
            <Flex border="1px solid lightgray"
                width="60%"
                height="50px"
                margin="0 0 0 20%"
                justifyContent="space-evenly"
                alignItems="center"
            >   
                <Link  href="/">
                    <HeaderLink>Home</HeaderLink>
                </Link>
                <Link  href="/users">
                    <HeaderLink>Users</HeaderLink>
                </Link>
                <Link  href="/products">
                    <HeaderLink>Products</HeaderLink>
                </Link>
                <Link  href="/categories">
                    <HeaderLink>Categories</HeaderLink>
                </Link>
                <Link  href="/carts">
                    <HeaderLink>Carts</HeaderLink>
                </Link>
                <Link  href="/login">
                    <HeaderLink>Login</HeaderLink>
                </Link>
            </Flex>
            
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Navbar;
