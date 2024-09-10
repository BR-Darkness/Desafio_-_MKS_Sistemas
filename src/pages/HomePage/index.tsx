import { ShoppingCartProvider } from "../../context/shopping-cart-context";
import { useProductData } from "../../hooks/useProductsData";
import * as S from "./styled";

import { Header } from "../../components/header";
import { WarningModal } from "../../components/modals";
import { SkeletonProductCard } from "../../components/cards/skeleton-product-card";
import { ProductCard } from "../../components/cards/product-card";
import { Footer } from "../../components/footer";

export function HomePage() {
    const { data, isLoading } = useProductData();
    return (
      <ShoppingCartProvider>
        <S.PageContainer>
          <Header />
          <WarningModal />
          <S.Main>
            <S.ProductsGrid>
              { 
                isLoading ? <>
                  <SkeletonProductCard />
                  <SkeletonProductCard />
                  <SkeletonProductCard />
                  <SkeletonProductCard />
                  <SkeletonProductCard />
                  <SkeletonProductCard />
                  <SkeletonProductCard />
                  <SkeletonProductCard />
                </>
                : data?.products.map(product => { 
                  return ( 
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                    />)
                  }) 
              }
            </S.ProductsGrid>
          </S.Main>
          <Footer />
        </S.PageContainer>
      </ShoppingCartProvider>
    )
  }