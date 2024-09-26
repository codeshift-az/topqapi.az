// Components
import AcoountLayout from "@/components/AccountLayout";
import ProductCard from "@/components/ProductCard";

// Types
import { ProductCardProps } from "@/types/models/product";

// Assets
import { ProductCard1, ProductCard2 } from "@/assets/images";

const Favorites = () => {
  const products: ProductCardProps[] = [
    {
      price: "16.50",
      category: "fashion",
      title: "Ribbed Tank Top",
      images: [ProductCard1, ProductCard2],
      id: 1,
      discount_end_date: "2024-09-26T00:00:00",
      brand: "brand",
      quantity: 1,
      discount: 10,
      description: "",
      updated_at: "",
      created_at: "",
    },
    {
      price: "16.50",
      category: "fashion",
      title: "Ribbed Tank Top",
      images: [ProductCard1, ProductCard2],
      id: 2,
      brand: "brand",
      quantity: 1,
      discount: 10,
      description: "",
      updated_at: "",
      created_at: "",
    },
    {
      price: "16.50",
      category: "fashion",
      title: "Ribbed Tank Top",
      images: [ProductCard1, ProductCard2],
      id: 3,
      brand: "brand",
      quantity: 1,
      discount: 10,
      description: "",
      updated_at: "",
      created_at: "",
    },
  ];
 

  return (
    <AcoountLayout title="Favorites">
      <div className="my-account-content account-wishlist">
        <div className="grid-layout wrapper-shop">
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </AcoountLayout>
  );
};

export default Favorites;
