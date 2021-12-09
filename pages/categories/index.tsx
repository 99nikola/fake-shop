import { GetStaticProps, NextPage } from "next"
import Link from "next/link";

interface CategoriesProps {
    categories: string[]
}


const Categories: NextPage<CategoriesProps> = (props) => {
    return (
        <ul>
            {props.categories.map((category: string) => (
                <Link href={`/categories/${category}`} key={category}>
                    <li>{category}</li>
                </Link>
            ))}      
        </ul>
    );
}

export const getStaticProps: GetStaticProps = async () => {

    const response = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await response.json();

    return ({
        props: {
            categories
        }
    });
}

export default Categories;