import styles from '../styles/products.module.scss';
import Product from '../components/product';
import Router from 'next/router';
import Link from 'next/link';

const Products = ({ currentUser, products }) => {
    //console.log('products in page ', products)
    const renderProducts = (products) => {

        if (products && products.length > 0) {
            return (
                products.map(product => (
                    <Product productDetails={product} key={product.id}/>
                ))
            )
        }
    } 

    return (
        <div className={styles.wrapper}>
            <div className={styles.contain}>
                <nav className={styles.sidebar}>
                    <ul className={styles.side_nav}>
                        <li className={styles.side_nav_menu_item}>
                            <Link href="/products"><a  className={styles.side_nav_menu_item_link}>Shop All</a></Link>
                            {/* <a href='/products' className={styles.side_nav_menu_item_link}>Shop All</a> */}
                            {/* <ul className={styles.side_nav_sub_menu}>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <a href='#' className={styles.side_nav_link}>Polo</a>
                                </li>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <a href='#' className={styles.side_nav_link}>Shirt</a>
                                </li>
                            </ul> */}
                        </li>
                        <li className={styles.side_nav_menu_item}>
                            <Link href="/products/men"><a  className={styles.side_nav_menu_item_link}>Men</a></Link>
                            {/* <a href='/products/men' className={styles.side_nav_menu_item_link}>Men</a> */}
                            <ul className={styles.side_nav_sub_menu}>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <Link href="/products/men/top"><a className={styles.side_nav_sub_menu_item_link}>Top</a></Link>

                                    {/* <a onClick={() => Router.push('/products/men/top')} className={styles.side_nav_sub_menu_item_link}>Top</a> */}
                                    {/* <a href='/products/men/top' className={styles.side_nav_sub_menu_item_link}>Top</a> */}
                                </li>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <Link href="/products/men/bottom"><a className={styles.side_nav_sub_menu_item_link}>Bottom</a></Link>
                                    {/* <a href='/products/men/bottom' className={styles.side_nav_sub_menu_item_link}>Bottom</a> */}
                                </li>
                            </ul>
                        </li>
                        <li className={styles.side_nav_item}>
                            <Link href="/products/women"><a className={styles.side_nav_menu_item_link}>Women</a></Link>
                            {/* <a href='/products/women' className={styles.side_nav_menu_item_link}>Women</a> */}
                            <ul className={styles.side_nav_sub_menu}>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <Link href="/products/women/top"><a className={styles.side_nav_sub_menu_item_link}>Top</a></Link>
                                    {/* <a href='/products/women/top' className={styles.side_nav_sub_menu_item_link}>Top</a> */}
                                </li>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <Link href="/products/women/bottom"><a className={styles.side_nav_sub_menu_item_link}>Bottom</a></Link>
                                    {/* <a href='/products/women/bottom' className={styles.side_nav_sub_menu_item_link}>Bottom</a> */}
                                </li>
                            </ul>
                        </li>
                        <li className={styles.side_nav_item}>
                            <Link href="/products/kids"><a className={styles.side_nav_menu_item_link}>Kids</a></Link>
                            {/* <a href='/products/kids' className={styles.side_nav_menu_item_link}>Kids</a> */}
                            <ul className={styles.side_nav_sub_menu}>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <Link href="/products/kids/boys"><a className={styles.side_nav_sub_menu_item_link}>Boys</a></Link>
                                    {/* <a href='/products/kids/boys' className={styles.side_nav_sub_menu_item_link}>Boys</a> */}
                                </li>
                                <li className={styles.side_nav_sub_menu_item}>
                                    <Link href="/products/kids/girls"><a className={styles.side_nav_sub_menu_item_link}>Girls</a></Link>
                                    {/* <a href='/products/kids/girls' className={styles.side_nav_sub_menu_item_link}>Girls</a> */}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <main className={styles.product_view}>
                    {renderProducts(products)}
                </main>
            </div>

        </div>
    )
};

Products.getInitialProps = async (context, client, currentUser) => {

    try {
        const { data } = await client.get('https://product-acd3hddtua-uc.a.run.app/api/products');
        // const productRes = await fetch('https://product-acd3hddtua-uc.a.run.app/api/products');
        // const productRes = await fetch('http://host.docker.internal:8001/api/products');
        // const data = await productRes.clone().json();
        //console.log('data in products ', data)
        return { products: data };
    } catch (err) {
        return {};
    }
}

export default Products;