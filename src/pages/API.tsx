import { useEffect, useState } from "react";
import supabase  from "../lib/supabaseClient";

function API() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            // console.log(supabase);
            const { data, error } = await supabase.from("product").select();
            console.log(data);

            if (error) {
                setError(error.message);
                setProducts([]);
            } else if (data) {
                setProducts(data);
            } else {
                setProducts([]);
            }
            setLoading(false);
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!products || products.length === 0) {
        return <div>No products found.</div>;
    }

    return (
        <ul>
            {products.map((product: any) => (
                <li key={product.id ?? product.name ?? Math.random()}>
                    {product.name ?? "Unnamed Product"}
                </li>
            ))}
        </ul>
    );
}

export default API;