"use client";

import React from "react";
import { ShoppingCart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Product } from "@/config/products";
import ProductImageCarousel from "./ProductImageCarousel";
import { useCart } from "@/contexts/CartContext";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 左侧：产品图片 */}
          <div>
            <ProductImageCarousel images={product.images} title={product.title} />
          </div>

          {/* 右侧：产品信息 */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {product.brand}
              </span>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {product.title}
              </h1>
            </div>

            {/* 价格 */}
            <div className="mb-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {product.price}
              </div>
            </div>

            {/* UPC 和型号 - 纯文本格式，便于亚马逊爬虫抓取 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">UPC: </span>
                  <span className="text-gray-900">{product.upc}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">型番: </span>
                  <span className="text-gray-900">{product.model}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">ブランド: </span>
                  <span className="text-gray-900">{product.brand}</span>
                </div>
              </div>
            </div>

            {/* 规格参数表 */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">仕様</h3>
                <Table>
                  <TableBody>
                    {product.specifications.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-gray-600 w-1/3">
                          {spec.label}
                        </TableCell>
                        <TableCell className="text-gray-900">{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* 购买按钮 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white h-12 text-lg">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Amazonで購入
                </Button>
              </a>
              <Button
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                カートに追加
              </Button>
            </div>

            {/* 隐藏但可抓取的产品信息 */}
            <div className="sr-only">
              <p>価格: {product.price}</p>
              <p>UPC: {product.upc}</p>
              <p>型番: {product.model}</p>
              <p>ブランド: {product.brand}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
