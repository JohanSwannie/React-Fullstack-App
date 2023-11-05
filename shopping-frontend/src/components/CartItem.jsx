import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import items from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

export function CartItem({ id, quantity }) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={4} className="d-flex align-items-center">
      <img
        src={item.imgURL}
        alt="music"
        style={{ width: "5.75rem", height: "3.5rem", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.instrumentName}
          {quantity > 1 && (
            <span className="text-muted">&nbsp; x &nbsp; {quantity}</span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        size="sm"
        variant="outline-dark"
        onClick={() => increaseCartQuantity(item.id)}
      >
        &#43;
      </Button>
      <Button
        size="sm"
        variant="outline-dark"
        onClick={() => decreaseCartQuantity(item.id)}
      >
        &#8722;
      </Button>

      <Button
        size="sm"
        variant="outline-danger"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
