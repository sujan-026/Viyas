
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Truck, Clock, ArrowLeftRight } from "lucide-react";

const ShippingPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Shipping &amp; Returns</h1>
        <div className="prose max-w-none text-muted-foreground space-y-10">
          {/* Shipping Policy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-7 w-7 text-shop-primary" />
              <h2 className="text-2xl font-semibold mb-0">Shipping Policy</h2>
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2">Processing Time</h3>
            <p>
              All orders are delivered within 2-3 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in the shipment of your order, we will contact you via email or phone.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Shipping Time</h3>
            <p>
              <span className="font-medium">Domestic Shipping:</span> Orders will be delivered within 5-6 days from the date of order confirmation. Please note that delivery times may be affected by factors beyond our control, such as weather conditions, customs delays, and other unforeseen circumstances.
            </p>
          </section>

          {/* Return and Refund Policy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <ArrowLeftRight className="h-7 w-7 text-shop-primary" />
              <h2 className="text-2xl font-semibold mb-0">Return and Refund Policy</h2>
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2">Return</h3>
            <p>
              We have a 5-day return policy, which means you have 5 days after receiving your item to request a return.
            </p>
            <p>
              Once the return product is received it will be inspected and the return will be approved within 2 days.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Refunds</h3>
            <p>
              We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.
            </p>
            <p>
              If more than 15 business days have passed since we’ve approved your return, please contact us at <span className="font-medium">viyasconnectingindia@gmail.com</span> or <span className="font-medium">80880 60841</span>.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default ShippingPage;
