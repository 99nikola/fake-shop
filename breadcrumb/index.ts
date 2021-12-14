import { BreadcrumbItem } from "../typescript/interfaces/Breadcrumb";

export const HomeBreadcrumb: BreadcrumbItem[] = [{
	breadcrumb: "Home", href: "/"
}];

export const UsersBreadcrumb: BreadcrumbItem[] = [
    ...HomeBreadcrumb,
    {
        breadcrumb: "Users",
        href: "/users"
    }
];

export const UserBreadcrumb = (name: string, id: number): BreadcrumbItem[] => ([
    ...UsersBreadcrumb,
    {
        breadcrumb: name,
        href: "/users/" + id
    }
]);

export const ProductsBreadcrumb: BreadcrumbItem[] = [
    ...HomeBreadcrumb,
    {
        breadcrumb: "Products",
        href: "/products"
    }
];

export const CategoriesBreadcrumb: BreadcrumbItem[] = [
    ...HomeBreadcrumb,
    {
        breadcrumb: "Categories",
        href: "/categories"
    }
];

export const CategoryBreadcrumb = (categoryName: string): BreadcrumbItem[] => ([
    ...CategoriesBreadcrumb,
    {
        breadcrumb: categoryName,
        href: "/categories/" + encodeURIComponent(categoryName)
    }
]);

export const ProductBreadcrumb = (productId: number, categoryName: string, productTitle: string) => ([
    ...CategoryBreadcrumb(categoryName),
    {
        breadcrumb: productTitle,
        href: "/categories/" + encodeURIComponent(categoryName) + "/" + productId
    }
]);