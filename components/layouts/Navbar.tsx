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
                <Link href="/" passHref={true}>
                    <HeaderLink>Home</HeaderLink>
                </Link>
                <Link href="/users" passHref={true}>
                    <HeaderLink>Users</HeaderLink>
                </Link>
                <Link href="/products" passHref={true}>
                    <HeaderLink>Products</HeaderLink>
                </Link>
                <Link href="/categories" passHref={true}>
                    <HeaderLink>Categories</HeaderLink>
                </Link>
                <Link  href="/carts" passHref={true}>
                    <HeaderLink>Carts</HeaderLink>
                </Link>
                <Link href="/login" passHref={true}>
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
