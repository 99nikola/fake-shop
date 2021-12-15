import Link from "../atoms/Link";
import Flex from "../atoms/Flex.styled";

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
                <Link href="/" color="white">
                    Home
                </Link>
                <Link href="/users" color="white">
                    Users
                </Link>
                <Link href="/products" color="white">
                    Products
                </Link>
                <Link href="/categories" color="white">
                    Categories
                </Link>
                <Link href="/carts" color="white">
                    Carts
                </Link>
                <Link href="/login" color="white">
                    Login
                </Link>
            </Flex>
            
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Navbar;
