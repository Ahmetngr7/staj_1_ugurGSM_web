import { useState } from "react";
import { Search, Filter, Star, ShoppingCart, Check } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const { addToCart, isInCart } = useCart();

  const categories = [
    { id: "all", name: "Tüm Ürünler" },
    { id: "phones", name: "Akıllı Telefon" },
    { id: "laptops", name: "Laptop" },
    { id: "headphones", name: "Kulaklık" },
    { id: "watches", name: "Akıllı Saat" },
  ];

  const sortOptions = [
    { id: "popular", name: "En Popüler" },
    { id: "price-low", name: "Fiyat (Düşük → Yüksek)" },
    { id: "price-high", name: "Fiyat (Yüksek → Düşük)" },
    { id: "newest", name: "En Yeni" },
    { id: "rating", name: "En Yüksek Puan" },
  ];

  const products = [
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
      category: "Laptop",
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
    {
      id: 5,
      name: "Samsung Galaxy S24 Ultra",
      category: "Akıllı Telefon",
      price: "49.999",
      originalPrice: "54.999",
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 198,
      description: "512GB Siyah - S Pen ile birlikte",
      badge: "İndirim",
    },
    {
      id: 6,
      name: "Sony WH-1000XM5",
      category: "Kulaklık",
      price: "12.999",
      originalPrice: null,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 156,
      description: "Kablosuz Gürültü Engelleyici Kulaklık",
      badge: "Popüler",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Ürünler</h1>
          <p className="text-gray-300">
            En kaliteli teknoloji ürünlerini keşfedin
          </p>
        </div>

        {/* Filters */}
        <div className="glass-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Ürün ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tech-blue"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-tech-blue"
            >
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                  className="bg-background"
                >
                  {category.name}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-tech-blue"
            >
              {sortOptions.map((option) => (
                <option
                  key={option.id}
                  value={option.id}
                  className="bg-background"
                >
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
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

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="tech-button px-8 py-3">Daha Fazla Yükle</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
