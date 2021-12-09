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
                <HeaderLink>
                    <Link  href="/">Home</Link>
                </HeaderLink>
                <HeaderLink>
                    <Link href="/users">Users</Link>
                </HeaderLink>
                <HeaderLink>
                    <Link href="/products">Products</Link>
                </HeaderLink>
                <HeaderLink>
                    <Link href="/categories">Categories</Link>
                </HeaderLink>

                <HeaderLink>
                    <Link href="/carts">Carts</Link>
                </HeaderLink>
                <HeaderLink>
                    <Link href="/login">Login</Link>
                </HeaderLink>
            </Flex>
            <Breadcrumb />
            <main>
                {props.children}
            </main>
        </nav>
    )
}

export default Navbar;
