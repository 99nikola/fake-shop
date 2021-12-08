import { GetStaticProps, NextPage } from "next"

interface CategoriesProps {
    categories: string[]
}


const Categories: NextPage<CategoriesProps> = (props) => {
    return (
        <div>
            Categories      
        </div>
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