"use client";

import React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart, setIsCartOpen } = useCart();
  const [showCheckoutDialog, setShowCheckoutDialog] = React.useState(false);

  const handleCheckout = () => {
    setShowCheckoutDialog(true);
  };

  const handleCloseCheckoutDialog = () => {
    setShowCheckoutDialog(false);
    setIsCartOpen(false);
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <p className="text-gray-500 text-lg mb-4">カートは空です</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-auto py-4">
          {cart.map((item) => (
            <div key={item.product.id} className="flex items-center gap-4 py-4 border-b">
              <div className="relative h-20 w-20 flex-shrink-0">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {item.product.title}
                </h3>
                <p className="text-lg font-bold text-orange-600 mt-1">
                  {item.product.price}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium w-8 text-center">
                    {item.quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:text-red-600"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4 pb-6">
          <div className="flex items-center justify-between text-lg font-bold mb-4">
            <span>合計</span>
            <span className="text-orange-600">¥{cartTotal.toLocaleString()}</span>
          </div>
          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            onClick={handleCheckout}
          >
            レジに進む
          </Button>
        </div>
      </div>

      <Dialog open={showCheckoutDialog} onOpenChange={setShowCheckoutDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">ご確認ください</DialogTitle>
            <DialogDescription className="text-center pt-4">
              <p className="text-lg mb-4">
                ご関心をお寄せいただき、ありがとうございます！
              </p>
              <p className="text-gray-600">
                この商品はAmazonで購入できます。
              </p>
              <p className="text-gray-600 mt-2">
                Amazonの商品ページに移動して購入を完了してください。
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={handleCloseCheckoutDialog}
            >
              確認しました
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
