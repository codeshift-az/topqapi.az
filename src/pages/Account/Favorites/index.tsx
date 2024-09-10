// Components
import AcoountLayout from "@/components/AccountLayout";
import ProductCard from "@/components/ProductCard";

// Assets
import { ProductCard1, ProductCard2, ProductCard3 } from "@/assets/images";

const Favorites = () => {
  return (
    <AcoountLayout title="Favorites">
      <div className="my-account-content account-wishlist">
        <div className="grid-layout wrapper-shop" data-grid="grid-3">
          <ProductCard
            price="16.50"
            title="Ribbed Tank Top"
            img1={ProductCard1}
            img2={ProductCard2}
            img3={ProductCard3}
          />
          <ProductCard
            price="16.50"
            title="Ribbed Tank Top"
            img1={ProductCard1}
            img2={ProductCard2}
            img3={ProductCard3}
          />
          <ProductCard
            price="16.50"
            title="Ribbed Tank Top"
            img1={ProductCard1}
            img2={ProductCard2}
            img3={ProductCard3}
          />{" "}
        </div>
      </div>
    </AcoountLayout>
  );
};

export default Favorites;
