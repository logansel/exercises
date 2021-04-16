type CartLine = {
  product: string;
  price: number;
  quantity: number;
};

type CartLineWithSubtotal = {
  product: string;
  price: number;
  quantity: number;
  subtotal: number;
};

// ✕ Should add a subtotal key to every entry (3 ms)
// ✕ Should have the right amount for each subtotal and keep the previous keys (3 ms)

const multiply = (nb1, nb2) => nb1 * nb2;

const calculateSubtotal = (caddy: CartLine[]): CartLineWithSubtotal[] => {
  const caddySomme = caddy.map((product) => {
    return {
      product: product.product,
      price: product.price,
      quantity: product.quantity,
      subtotal: multiply(product.price, product.quantity),
    };
  });
  return caddySomme;
};

export { calculateSubtotal };
