# Fake Shop using [FakeStoreAPI](https://fakestoreapi.com/)

## Pages:
* /
* /products
* /categories
    * /:categoryName
        * /:productId
* /users
    * /:username
* /carts

_Every page has navigation bar, breadcrumb and pagination_

## Navigation bar
Simple links to other pages

### Usage
```jsx
    <Navbar>
        <Page>
    <Navbar/>
```

## Breadcrumb

## Usage
```jsx
    <Navbar>
        <Breadcrumb />
        ...
    </Navbar>
```



## Pagination

### Usage
```jsx
    ...
    const itemsToRender = usePagination({
        items,
        page,
        perPage
    });
    ...

    return (
        ...
        <Pagination 
            currPage={currPage}
            perPage={perPage}
            total={total}
        />
        ...
    );
```

```usePagination``` returns array of items that should render for given page

```<Pagination />``` renders correct amount of button links
