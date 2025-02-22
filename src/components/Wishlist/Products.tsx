"use client";

import { Box, Typography } from "@mui/material";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

import {
  ProductsCard,
  ProductsCardSkeleton,
} from "@/components/Common/Products";
import http from "@/utils/http";
import { EachProduct } from "@/utils/type";

import { ProductsWrapper } from "../Common/common.style";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [favProducts, setFavProducts] = useState<Array<EachProduct>>([]);

  const handleWishlist = (id: number) => {
    const filteredProducts = favProducts.filter((item) => item?.id != id);

    setFavProducts(filteredProducts);
    localStorage.setItem(
      "agetware-wishlist",
      JSON.stringify(filteredProducts.map((item) => item?.id))
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res: AxiosResponse = await http.get("/products");

        const favArray = [];

        Object.values(res.data?.products).forEach((product: EachProduct) => {
          if (
            JSON.parse(
              localStorage?.getItem("agetware-wishlist") || "[]"
            ).includes(product?.id)
          ) {
            favArray.push(product);
          }
        });

        const formattedData = favArray.map((product: EachProduct) => ({
          id: product?.id,
          title: product?.title,
          imageUrl: product?.image,
          price: product?.price,
          brand: product?.brand,
          model: product?.model,
          discount: product?.discount,
          isPopular: product?.popular,
        }));

        setFavProducts(formattedData);
        setLoading(false);
      } catch (err) {
        console.log(err as Error);
        setLoading(false);
      }
    };
    fetchData();
  }, [setLoading]);

  return (
    <Box sx={ProductsWrapper}>
      {loading ? (
        <>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <ProductsCardSkeleton key={index} />
            ))}
        </>
      ) : (
        <>
          {favProducts?.length ? (
            favProducts.map((item: EachProduct) => (
              <ProductsCard
                key={item?.id}
                product={item}
                handleWishlist={handleWishlist}
                isWishlisted={true}
              />
            ))
          ) : (
            <Typography variant="body1" color="textDisabled">
              No Items in Wishlist
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default Products;
