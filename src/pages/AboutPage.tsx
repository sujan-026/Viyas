import { MainLayout } from "@/components/layout/MainLayout";
import { Building2, Award, Users, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">About Viyas</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-4">
            At Viyas Connecting India, we believe that every frame deserves brilliance, every pixel deserves
            precision, and every viewing experience deserves to be extraordinary, in short we are "Transforming
            Visual Excellence".
          </p>

          <p className="text-lg text-muted-foreground mb-4">
            Our journey began with a vision to redefine entertainment, to immerse you in
            a world where images transcend screens and technology becomes art. As pioneers in LED TV
            innovation, we've meticulously blended cutting-edge engineering, artistic design, and unwavering
            passion to create a symphony of sight and sound that captivates the senses.
          </p>

          <p className="text-lg text-muted-foreground mb-4">
            We're not just in the business of selling TVs; we're in the business of creating unforgettable moments, 
            shared laughter, and immersive stories that become an integral part of your life.
            Our commitment isn't just about producing televisions; it's about crafting cinematic wonders that
            awaken emotions, ignite imagination, and set new standards for visual perfection.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            With each LED TV we bring to life, we are rewriting the rules of engagement with technology.
            Join us on this voyage where the ordinary transforms into the extraordinary, and where each LED
            TV is not just a product, but a work of art. As we push the boundaries of what's possible, we invite
            you to explore our world of technology, craftsmanship, and boundless imagination. Discover how
            we're reimagining entertainment and making every frame a masterpiece.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-shop-primary" />
                <h2 className="text-xl font-semibold">Our Story</h2>
              </div>
              <p className="text-muted-foreground">
                Founded in 2020, Viyas has grown from a small startup to a leading provider of premium television solutions, serving customers nationwide.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-shop-primary" />
                <h2 className="text-xl font-semibold">Quality Commitment</h2>
              </div>
              <p className="text-muted-foreground">
                We partner with leading manufacturers to bring you the highest quality TVs, backed by our satisfaction guarantee.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-shop-primary" />
                <h2 className="text-xl font-semibold">Expert Team</h2>
              </div>
              <p className="text-muted-foreground">
                Our team of TV experts is dedicated to helping you find the perfect television for your space and needs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-shop-primary" />
                <h2 className="text-xl font-semibold">Global Standards</h2>
              </div>
              <p className="text-muted-foreground">
                We adhere to international quality standards and bring you the latest in TV technology from around the world.
              </p>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Meet the Founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder 1" className="w-16 h-16 rounded-full border" />
                <div>
                  <h3 className="text-lg font-bold">Rajesh Kumar</h3>
                  <p className="text-muted-foreground text-sm">Co-Founder & CEO</p>
                  <p className="text-muted-foreground text-xs mt-1">Visionary entrepreneur with a passion for technology and innovation in the Indian electronics market.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Founder 2" className="w-16 h-16 rounded-full border" />
                <div>
                  <h3 className="text-lg font-bold">Priya Sharma</h3>
                  <p className="text-muted-foreground text-sm">Co-Founder & CTO</p>
                  <p className="text-muted-foreground text-xs mt-1">Tech leader driving product excellence and customer-centric innovation at Viyas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Store Location Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Store Location</h2>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="inline-block bg-shop-primary/10 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shop-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 1111.314-11.314l-4.243 4.243a4 4 0 00-5.657 5.657z" /></svg></span>
                <div>
                  <p className="font-medium">123 TV Street, Entertainment City, EC 12345</p>
                  <p className="text-muted-foreground text-sm">support@viyas.com | 1-800-VIYAS-TV</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted rounded-lg p-4 shadow-sm">
                <p className="text-muted-foreground mb-2">“Viyas TVs have transformed our family movie nights. The picture quality is stunning and the sound is immersive!”</p>
                <div className="flex items-center gap-2">
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Customer 1" className="w-8 h-8 rounded-full border" />
                  <span className="font-medium text-sm">Amit Patel</span>
                  <span className="text-xs text-yellow-500">★★★★★</span>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4 shadow-sm">
                <p className="text-muted-foreground mb-2">“Excellent service and after-sales support. Highly recommend Viyas for anyone looking for a reliable TV.”</p>
                <div className="flex items-center gap-2">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Customer 2" className="w-8 h-8 rounded-full border" />
                  <span className="font-medium text-sm">Sneha Reddy</span>
                  <span className="text-xs text-yellow-500">★★★★★</span>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4 shadow-sm">
                <p className="text-muted-foreground mb-2">“The smart features and connectivity options are top-notch. Viyas TVs are truly value for money.”</p>
                <div className="flex items-center gap-2">
                  <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="Customer 3" className="w-8 h-8 rounded-full border" />
                  <span className="font-medium text-sm">Rahul Mehra</span>
                  <span className="text-xs text-yellow-500">★★★★★</span>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4 shadow-sm">
                <p className="text-muted-foreground mb-2">“I love the sleek design and vibrant display. Viyas is my go-to brand for TVs now.”</p>
                <div className="flex items-center gap-2">
                  <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Customer 4" className="w-8 h-8 rounded-full border" />
                  <span className="font-medium text-sm">Meera Singh</span>
                  <span className="text-xs text-yellow-500">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
