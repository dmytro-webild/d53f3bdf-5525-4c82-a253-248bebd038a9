"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Clock, Coffee, Home, Zap, Sparkles } from "lucide-react";

const assetMap = {
  "logo-lah-cafe": "http://img.b2bpic.net/free-vector/coffee-shop-logo-template_23-2150529622.jpg",  "hero-background": "http://img.b2bpic.net/free-photo/hot-cup-cappuccino-with-cinnamon_140725-7516.jpg",  "testimonial-1-avatar": "http://img.b2bpic.net/free-photo/gorgeous-smiling-blonde-fashion-model-sits-white-suit-soft-armchair_8353-5476.jpg",  "testimonial-2-avatar": "http://img.b2bpic.net/free-photo/happy-young-elegant-man-smiling_23-2148332976.jpg",  "testimonial-3-avatar": "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-coffee-cup_23-2149005429.jpg",  "about-interior": "http://img.b2bpic.net/free-photo/machine-making-coffee_23-2148892815.jpg",  "menu-cappuccino": "http://img.b2bpic.net/free-photo/trendy-coffee-shop-city_53876-65010.jpg",  "menu-espresso": "http://img.b2bpic.net/free-photo/selective-focus-point-black-coffee-white-cup_74190-3898.jpg",  "menu-latte": "http://img.b2bpic.net/free-photo/top-view-glass-coffee-with-latte-art_140725-5204.jpg",  "menu-iced-coffee": "http://img.b2bpic.net/free-photo/glasses-with-coffee-rustic-table_23-2147693441.jpg",  "menu-milkshake": "http://img.b2bpic.net/free-photo/top-view-yummy-waffle-cookies-with-fresh-red-strawberries-macarons-light-pink-surface_140725-81116.jpg",  "menu-smoothie": "http://img.b2bpic.net/free-photo/cold-berry-cocktail-table_141793-75.jpg",  "menu-cake": "http://img.b2bpic.net/free-photo/top-view-yummy-creamy-cake-with-raisins-cup-tea-light-dark-background_140725-80174.jpg",  "menu-juice": "http://img.b2bpic.net/free-photo/orange-juice-with-oranges-squeezer-jug-white-surface_176474-6100.jpg",  "menu-african-tea": "http://img.b2bpic.net/free-photo/steam-rises-cup-espresso-coffee-glass-water-cookies-table-closeup-sunlight-selective-focus-empty-space-cafe-breakfast-advertising-banner_166373-2882.jpg",  "menu-mojito": "http://img.b2bpic.net/free-photo/summer-detox-drink-with-cucumber-lime-concept-refreshing-drinks_169016-4629.jpg",  "gallery-interior-night": "http://img.b2bpic.net/free-photo/vintage-light-lamp_1203-3090.jpg",  "gallery-barista": "http://img.b2bpic.net/free-photo/close-up-hand-holding-coffee-filter-tamper_23-2148349619.jpg",  "gallery-desserts": "http://img.b2bpic.net/free-photo/top-view-little-creamy-cake-with-chocolate-cookies-cup-tea-dark-surface-biscuit-cake-sweet-pie-sugar-cookies_140725-118176.jpg",  "gallery-coffee-prep": "http://img.b2bpic.net/free-photo/coffee-making-concept-with-machine_23-2149045704.jpg",  "gallery-cozy-corner": "http://img.b2bpic.net/free-photo/beautiful-girl-drinking-coffee-cafe_72229-1426.jpg",  "gallery-outdoor-seating": "http://img.b2bpic.net/free-photo/portrait-man-summertime-80-s-aesthetic-beach-chair_23-2150835806.jpg",  "testimonial-4-avatar": "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-front-with-clenched-fists-happy-excited-standing-pink-wall_141793-52902.jpg",  "testimonial-5-avatar": "http://img.b2bpic.net/free-photo/smiley-woman-posing-her-home_23-2148708980.jpg",  "testimonial-6-avatar": "http://img.b2bpic.net/free-photo/blond-businessman-with-glasses_1098-57.jpg",  "contact-map-uganda": "http://img.b2bpic.net/free-photo/close-up-camera-map_23-2147950737.jpg",  "footer-background-video": "http://img.b2bpic.net/free-photo/abstract-gradient-background-with-grainy-effect_84443-3122.jpg"
};

function resolveAsset(id) {
  return assetMap[id.replace('asset://', '')] || id;
}

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeLargeTitles"
      background="aurora"
      cardStyle="glass-depth"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="La'H Cafe"
          logoSrc={resolveAsset("asset://logo-lah-cafe")}
          logoAlt="La'H Cafe Logo"
          navItems={[
            { name: "Home", id: "#hero" },
            { name: "About", id: "#about" },
            { name: "Menu", id: "#menu" },
            { name: "Gallery", id: "#gallery" },
            { name: "Why Choose Us", id: "#why-us" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "Contact", id: "#contact" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Welcome to La'H Cafe"
          description="Premium Coffee \u2022 Luxury Vibes \u2022 Kampala. Indulge in an exquisite experience crafted just for you."
          background={{ variant: "glowing-orb" }}
          testimonials={[
            { name: "Sarah J.", handle: "@coffeeLover", testimonial: "La'H Cafe offers an unparalleled coffee experience. The ambiance is truly something special!", rating: 5, imageSrc: resolveAsset("asset://testimonial-1-avatar"), imageAlt: "Sarah J. testimonial avatar" },
            { name: "Michael K.", handle: "@kampalaFoodie", testimonial: "Every visit feels like a luxurious escape. The pastries are divine!", rating: 5, imageSrc: resolveAsset("asset://testimonial-2-avatar"), imageAlt: "Michael K. testimonial avatar" },
            { name: "Emily R.", handle: "@travelBug", testimonial: "A truly world-class cafe right here in Kampala. The espresso is perfect.", rating: 5, imageSrc: resolveAsset("asset://testimonial-3-avatar"), imageAlt: "Emily R. testimonial avatar" }
          ]}
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          imageSrc={resolveAsset("asset://hero-background")}
          imageAlt="Cinematic cafe interior with warm lighting"
          buttons={[
            { text: "View Menu", href: "#menu" },
            { text: "Visit Us", href: "#contact" }
          ]}
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story of Craft & Comfort"
          description="At La'H Cafe, we've meticulously crafted a luxurious sanctuary in the heart of Kampala. Our journey began with a passion for exceptional coffee, believing that every cup should be an experience. We combine traditional techniques with modern innovation to bring you handcrafted beverages and exquisite culinary delights."
          bulletPoints={[
            { title: "Handcrafted Perfection", description: "Each beverage is prepared by skilled baristas with the finest beans, ensuring a rich and authentic taste." },
            { title: "Relaxing Ambiance", description: "Immerse yourself in our serene, elegantly designed spaces, perfect for unwinding or productive moments." },
            { title: "Modern Kampala Lifestyle", description: "La'H Cafe embodies the vibrant, contemporary spirit of Kampala, offering a sophisticated social hub." },
            { title: "Premium Customer Experience", description: "Our commitment to unparalleled service ensures every visit is memorable and delightful." }
          ]}
          imageSrc={resolveAsset("asset://about-interior")}
          imageAlt="Elegant cafe interior with a barista crafting coffee"
          mediaAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Our Exquisite Menu"
          description="Savor the finest selection of handcrafted beverages and culinary delights, prepared to perfection."
          products={[
            { id: "cappuccino", name: "Cappuccino", price: "UGX 15,000", imageSrc: resolveAsset("asset://menu-cappuccino"), imageAlt: "Realistic Cappuccino with latte art" },
            { id: "espresso", name: "Espresso", price: "UGX 10,000", imageSrc: resolveAsset("asset://menu-espresso"), imageAlt: "Rich Espresso shot" },
            { id: "latte", name: "Latte", price: "UGX 16,000", imageSrc: resolveAsset("asset://menu-latte"), imageAlt: "Creamy Latte with foam art" },
            { id: "iced-coffee", name: "Iced Coffee", price: "UGX 18,000", imageSrc: resolveAsset("asset://menu-iced-coffee"), imageAlt: "Refreshing Iced Coffee" },
            { id: "milkshake", name: "Milkshakes", price: "UGX 22,000", imageSrc: resolveAsset("asset://menu-milkshake"), imageAlt: "Indulgent Chocolate Milkshake" },
            { id: "smoothies", name: "Smoothies", price: "UGX 20,000", imageSrc: resolveAsset("asset://menu-smoothie"), imageAlt: "Healthy Mixed Berry Smoothie" },
            { id: "cakes", name: "Cakes & Desserts", price: "UGX 25,000", imageSrc: resolveAsset("asset://menu-cake"), imageAlt: "Slice of elegant Chocolate Cake" },
            { id: "juices", name: "Fresh Juices", price: "UGX 17,000", imageSrc: resolveAsset("asset://menu-juice"), imageAlt: "Freshly squeezed Orange Juice" },
            { id: "african-tea", name: "African Tea", price: "UGX 12,000", imageSrc: resolveAsset("asset://menu-african-tea"), imageAlt: "Traditional African Tea" },
            { id: "mojitos", name: "Mojitos (Virgin)", price: "UGX 19,000", imageSrc: resolveAsset("asset://menu-mojito"), imageAlt: "Refreshing non-alcoholic Mojito" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="gallery" data-section="gallery">
        <FeatureBento
          title="Gallery of Moments"
          description="Immerse yourself in the visual splendor of La'H Cafe. From our cozy interiors to expertly crafted beverages, every detail is a work of art."
          features={[
            { title: "Experience Our World", description: "A curated collection of our cafe's essence, captured in cinematic detail.", bentoComponent: "media-stack", items: [
              { imageSrc: resolveAsset("asset://gallery-interior-night"), imageAlt: "Night cafe aesthetics with warm lighting" },
              { imageSrc: resolveAsset("asset://gallery-barista"), imageAlt: "Barista preparing coffee" },
              { imageSrc: resolveAsset("asset://gallery-desserts"), imageAlt: "Assortment of elegant desserts" }
            ] }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="why-us" data-section="why-us">
        <FeatureBento
          title="Why Choose La'H Cafe?"
          description="Discover what makes La'H Cafe the premier destination for coffee and luxury in Kampala."
          features={[
            { title: "24/7 Service", description: "Enjoy our premium offerings anytime, day or night.", bentoComponent: "reveal-icon", icon: Clock },
            { title: "Premium Coffee", description: "Sourced globally and expertly roasted for an unparalleled taste.", bentoComponent: "reveal-icon", icon: Coffee },
            { title: "Cozy Environment", description: "Relax in an inviting atmosphere designed for ultimate comfort.", bentoComponent: "reveal-icon", icon: Home },
            { title: "Fast Service", description: "Efficient and friendly service ensures your order is always prompt.", bentoComponent: "reveal-icon", icon: Zap },
            { title: "Luxury Experience", description: "Every detail crafted to deliver an unforgettable premium visit.", bentoComponent: "reveal-icon", icon: Sparkles }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          cardTitle="What Our Guests Say"
          cardTag="Rave Reviews"
          testimonials={[
            { id: "1", name: "Amina S.", imageSrc: resolveAsset("asset://testimonial-1-avatar"), imageAlt: "Amina S. testimonial avatar" },
            { id: "2", name: "Brian L.", imageSrc: resolveAsset("asset://testimonial-2-avatar"), imageAlt: "Brian L. testimonial avatar" },
            { id: "3", name: "Charlotte P.", imageSrc: resolveAsset("asset://testimonial-3-avatar"), imageAlt: "Charlotte P. testimonial avatar" },
            { id: "4", name: "Daniel M.", imageSrc: resolveAsset("asset://testimonial-4-avatar"), imageAlt: "Daniel M. testimonial avatar" },
            { id: "5", name: "Grace N.", imageSrc: resolveAsset("asset://testimonial-5-avatar"), imageAlt: "Grace N. testimonial avatar" },
            { id: "6", name: "Paul E.", imageSrc: resolveAsset("asset://testimonial-6-avatar"), imageAlt: "Paul E. testimonial avatar" }
          ]}
          cardAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Connect With Us"
          title="Visit La'H Cafe"
          description="Experience the luxury first-hand at our exquisite location. We are always delighted to welcome you.\n\n**Address:** 8J7P+28Q, Port Bell Rd, Kampala, Uganda\n**Phone:** +256759940525\n\nFor quick inquiries, message us on WhatsApp!"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          imageSrc={resolveAsset("asset://contact-map-uganda")}
          imageAlt="Google Map showing La'H Cafe location in Kampala"
          mediaAnimation="slide-up"
          inputPlaceholder="Enter your message"
          buttonText="Send Message"
          termsText="By clicking Send Message, you agree to our privacy policy."
          mediaPosition="left"
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterMedia
          videoSrc={resolveAsset("asset://footer-background-video")}
          videoAriaLabel="Smooth dark gradient background animation"
          logoText="La'H Cafe"
          columns={[
            { title: "Explore", items: [
              { label: "Home", href: "#hero" },
              { label: "About Us", href: "#about" },
              { label: "Our Menu", href: "#menu" },
              { label: "Gallery", href: "#gallery" }
            ] },
            { title: "Information", items: [
              { label: "Why Choose Us", href: "#why-us" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Contact", href: "#contact" },
              { label: "Privacy Policy", href: "#" }
            ] },
            { title: "Connect", items: [
              { label: "Instagram", href: "https://instagram.com/lahcafe" },
              { label: "Facebook", href: "https://facebook.com/lahcafe" },
              { label: "Twitter", href: "https://twitter.com/lahcafe" },
              { label: "WhatsApp", href: "https://wa.me/256759940525" }
            ] }
          ]}
          copyrightText="© 2024 La'H Cafe. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
