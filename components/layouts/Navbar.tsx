import Link from "next/link";
import Flex from "../atoms/Flex.styled";
import HeaderLink from "../atoms/HeaderLink";
import Breadcrumb from "./Breadcrumb";

const Navbar: React.FC = (props) => {
    return (
        <nav>
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

            <Breadcrumb />
            
            <main>
                {props.children}
            </main>
        </nav>
    )
}

export default Navbar;
