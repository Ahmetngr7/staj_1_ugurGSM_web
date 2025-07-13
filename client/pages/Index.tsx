import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Star,
  ShoppingCart,
  Zap,
  Shield,
  Truck,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { useCart } from "../contexts/CartContext";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart, isInCart } = useCart();

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "Akıllı Telefon",
      price: "54.999",
      originalPrice: "59.999",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 247,
      description: "256GB Titanyum Mavi - Apple'ın en gelişmiş telefonu",
      badge: "Yeni",
    },
    {
      id: 2,
      name: "MacBook Air M3",
      category: "Dizüstü Bilgisayar",
      price: "42.999",
      originalPrice: null,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 156,
      description: "15-inç Gece Yarısı - Güçlü M3 çip ile",
      badge: "Popüler",
    },
    {
      id: 3,
      name: "AirPods Pro 2",
      category: "Kulaklık",
      price: "8.499",
      originalPrice: "9.999",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 312,
      description: "USB-C Şarj Kutulu - Aktif Gürültü Engelleme",
      badge: "İndirim",
    },
    {
      id: 4,
      name: "Apple Watch Ultra 2",
      category: "Akıllı Saat",
      price: "32.999",
      originalPrice: null,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 89,
      description: "49mm Titanyum Gövde - GPS + Cellular",
      badge: "Premium",
    },
  ];

  const categories = [
    { name: "Akıllı Telefon", icon: Smartphone, count: "150+ Ürün" },
    { name: "Laptop", icon: Laptop, count: "80+ Ürün" },
    { name: "Kulaklık", icon: Headphones, count: "120+ Ürün" },
    { name: "Akıllı Saat", icon: Watch, count: "45+ Ürün" },
  ];

  const heroSlides = [
    {
      title: "En Yeni Teknolojiler Burada!",
      subtitle: "Apple'ın en son ürünlerini keşfedin",
      cta: "Şimdi Alışveriş Yap",
      image: "/placeholder.svg",
    },
    {
      title: "Özel Kampanyalar",
      subtitle: "%30'a varan indirimler",
      cta: "Kampanyaları Gör",
      image: "/placeholder.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 tech-gradient opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {heroSlides[currentSlide].subtitle}
          </p>
          <Link
            to="/urunler"
            className="tech-button text-lg py-4 px-8 inline-block"
          >
            {heroSlides[currentSlide].cta}
          </Link>
        </div>

        {/* Slide Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card p-3 hover:scale-110 transition-transform"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card p-3 hover:scale-110 transition-transform"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-tech-blue" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <Zap className="text-tech-blue mx-auto mb-4" size={48} />
              <h3 className="text-white font-semibold text-lg mb-2">
                Hızlı Teslimat
              </h3>
              <p className="text-gray-300 text-sm">
                Aynı gün kargo ile siparişiniz kapınızda
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <Shield className="text-tech-blue mx-auto mb-4" size={48} />
              <h3 className="text-white font-semibold text-lg mb-2">
                Güvenli Alışveriş
              </h3>
              <p className="text-gray-300 text-sm">
                256-bit SSL ile korumalı ödeme sistemi
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <Truck className="text-tech-blue mx-auto mb-4" size={48} />
              <h3 className="text-white font-semibold text-lg mb-2">
                Ücretsiz Kargo
              </h3>
              <p className="text-gray-300 text-sm">
                500₺ üzeri alışverişlerde kargo bedava
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Kategoriler
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/kategoriler"
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <category.icon
                  className="text-tech-blue mx-auto mb-4 group-hover:text-tech-cyan transition-colors"
                  size={48}
                />
                <h3 className="text-white font-semibold mb-1">
                  {category.name}
                </h3>
                <p className="text-gray-300 text-sm">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Öne Çıkan Ürünler</h2>
            <Link
              to="/urunler"
              className="text-tech-blue hover:text-tech-cyan transition-colors"
            >
              Tümünü Gör →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="glass-card p-4 group">
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full ${
                      product.badge === "Yeni"
                        ? "bg-tech-success text-white"
                        : product.badge === "İndirim"
                          ? "bg-red-500 text-white"
                          : product.badge === "Popüler"
                            ? "bg-tech-blue text-white"
                            : "bg-tech-purple text-white"
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-tech-cyan text-sm">{product.category}</p>
                  <h3 className="text-white font-semibold">{product.name}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-white text-sm">{product.rating}</span>
                    <span className="text-gray-300 text-sm">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-lg">
                        {product.price}₺
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-400 text-sm line-through">
                          {product.originalPrice}₺
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        isInCart(product.id)
                          ? "bg-tech-success text-white"
                          : "bg-tech-blue hover:bg-tech-cyan text-white hover:scale-110"
                      }`}
                    >
                      {isInCart(product.id) ? (
                        <Check size={18} />
                      ) : (
                        <ShoppingCart size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Kampanyalardan Haberdar Olun
            </h2>
            <p className="text-gray-300 mb-6">
              Yeni ürünler ve özel indirimlerden ilk siz haberdar olun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-tech-blue"
              />
              <button className="tech-button px-6 py-3">Abone Ol</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
