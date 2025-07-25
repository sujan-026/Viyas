
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, ShoppingBag } from "lucide-react";

const OrderSuccessPage = () => {
  // Generate a random order ID
  const orderId = `ORD-${Math.floor(Math.random() * 900000) + 100000}`;
  
  // Get current date for order date
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  // Estimated delivery date (7 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  const estimatedDelivery = deliveryDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                    ORDER NUMBER
                  </h3>
                  <p className="font-medium">{orderId}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                    DATE PLACED
                  </h3>
                  <p className="font-medium">{orderDate}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                    TOTAL AMOUNT
                  </h3>
                  <p className="font-medium">$349.96</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                    PAYMENT METHOD
                  </h3>
                  <p className="font-medium">Credit Card (•••• 4242)</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md flex items-start gap-4">
                <Clock className="h-5 w-5 text-shop-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Estimated Delivery</h3>
                  <p className="text-muted-foreground">
                    Your order is expected to arrive by {estimatedDelivery}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md flex items-start gap-4">
                <ShoppingBag className="h-5 w-5 text-shop-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Shipping Address</h3>
                  <p className="text-muted-foreground">
                    John Doe<br />
                    123 Main St<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild variant="outline">
              <Link to="/orders">View Order Status</Link>
            </Button>
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OrderSuccessPage;
