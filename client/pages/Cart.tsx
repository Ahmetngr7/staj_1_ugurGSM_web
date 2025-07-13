import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

const Cart = () => {
  const {
    items,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price);
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-16">
            <div className="glass-card p-12">
              <ShoppingBag className="mx-auto mb-6 text-gray-400" size={80} />
              <h1 className="text-3xl font-bold text-white mb-4">
                Sepetiniz Boş
              </h1>
              <p className="text-gray-300 mb-8 text-lg">
                Henüz sepetinize ürün eklemediniz. En yeni teknoloji ürünlerini
                keşfetmeye başlayın!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/urunler" className="tech-button px-8 py-3">
                  Ürünleri İncele
                </Link>
                <Link
                  to="/kategoriler"
                  className="glass-card px-8 py-3 text-white hover:bg-white/10 transition-all"
                >
                  Kategorilere Göz At
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Sepetim</h1>
          <p className="text-gray-300">
            {totalItems} ürün • Toplam: {formatPrice(totalPrice)}₺
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <ShoppingCart className="mr-2" size={24} />
                  Sepet Öğeleri
                </h2>
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-red-400 hover:text-red-300 transition-colors text-sm"
                  >
                    Sepeti Temizle
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {item.name}
                      </h3>
                      <p className="text-tech-cyan text-sm mb-2">
                        {item.category}
                      </p>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-bold text-lg">
                          {item.price}₺
                        </span>
                        {item.originalPrice && (
                          <span className="text-gray-400 text-sm line-through">
                            {item.originalPrice}₺
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors p-1"
                      >
                        <Trash2 size={18} />
                      </button>

                      <div className="flex items-center space-x-3 mt-4">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Minus size={16} className="text-white" />
                        </button>
                        <span className="text-white font-semibold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Plus size={16} className="text-white" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right mt-2">
                        <span className="text-tech-blue font-bold">
                          {formatPrice(
                            parseFloat(item.price.replace(".", "")) *
                              item.quantity,
                          )}
                          ₺
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-white mb-6">
                Sipariş Özeti
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Ürün Toplamı ({totalItems} ürün)</span>
                  <span>{formatPrice(totalPrice)}₺</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Kargo</span>
                  <span className="text-tech-success">Ücretsiz</span>
                </div>
                <hr className="border-white/10" />
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>Toplam</span>
                  <span>{formatPrice(totalPrice)}₺</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full tech-button py-4 text-lg font-semibold mb-4 flex items-center justify-center space-x-2">
                <span>Siparişi Tamamla</span>
                <ArrowRight size={20} />
              </button>

              {/* Continue Shopping */}
              <Link
                to="/urunler"
                className="block w-full text-center glass-card py-3 text-white hover:bg-white/10 transition-all"
              >
                Alışverişe Devam Et
              </Link>

              {/* Payment Info */}
              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm mb-2">Güvenli Ödeme</p>
                <div className="flex justify-center space-x-2">
                  <div className="w-8 h-5 bg-blue-600 rounded"></div>
                  <div className="w-8 h-5 bg-red-600 rounded"></div>
                  <div className="w-8 h-5 bg-yellow-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Size Önerebileceğimiz Ürünler
          </h2>
          <div className="glass-card p-6">
            <div className="text-center text-gray-300">
              <p>Önerilen ürünler burada görüntülenecek</p>
              <Link
                to="/urunler"
                className="inline-block mt-4 text-tech-blue hover:text-tech-cyan transition-colors"
              >
                Tüm Ürünleri İncele →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
