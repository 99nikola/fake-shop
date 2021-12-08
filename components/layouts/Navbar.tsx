import Link from "next/link";

const Navbar: React.FC = (props) => {
    return (
        <nav>
            <Link href="/users">Users</Link>
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/cart">Cart</Link>

            <main>
                {props.children}
            </main>
        </nav>
    )
}

export default Navbar;
