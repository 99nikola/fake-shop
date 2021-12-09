import Link from "next/link";
import Breadcrumb from "./Breadcrumb";

const Navbar: React.FC = (props) => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/carts">Carts</Link>

            <Breadcrumb />

            <main>
                {props.children}
            </main>
        </nav>
    )
}

export default Navbar;
