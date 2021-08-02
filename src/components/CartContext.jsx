import { useState, useContext, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getPrice = () => {
      let total = cartItem.reduce((accumulator, currentValue) => {
        return currentValue.qty * currentValue.item.price + accumulator;
      }, 0);
      setTotalPrice(total);
    };
    getPrice();
  }, [cartItem]);

  const addItem = (item, qty) => {
    if (cartItem.some((product) => product.item.id === item.id)) {
      const copy = [...cartItem];
      const repeatedIndex = cartItem.findIndex(
        (product) => product.item.id === item.id
      );
      if (copy[repeatedIndex].ite.stock >= copy[repeatedIndex].qty + qty) {
        copy[repeatedIndex].qty = copy[repeatedIndex].qty + qty;
        setCartCount((prev) => prev + qty);
      } else {
        setCartCount(cartCount + (item.stock - copy[repeatedIndex].qty));
        copy[repeatedIndex].qty = item.stock;
      }
      setCartItem(copy);
    } else {
      setCartItem([...cartItem, { item: { ...item }, qty: qty }]);
      setCartCount((prev) => prev + qty);
    }
  };

  const removeItem = (index) => {
    setCartCount(cartCount - cartItem[index].qty);
    setCartItem(cartItem.filter((_, i) => i !== index));
  };

  const clear = () => {
    setCartCount(0);
    setCartItem([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        setCartCount,
        cartItem,
        addItem,
        clear,
        removeItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
