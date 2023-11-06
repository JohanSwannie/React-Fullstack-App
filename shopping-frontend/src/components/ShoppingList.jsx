import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

export function ShoppingList({ id, instrumentName, price, imgURL }) {
  const navigate = useNavigate();
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    user,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  const checkUserToAddItem = () => {
    if (user) {
      increaseCartQuantity(id);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={imgURL}
          height="205px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column card_body">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
            <span className="fs-7">{instrumentName}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100 addCart_button"
                onClick={checkUserToAddItem}
              >
                + Add To Cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".75rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    className="addCart_button"
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </Button>
                  <div>
                    <span className="fs-5">{quantity}</span> in cart
                  </div>
                  <Button
                    className="addCart_button"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => removeFromCart(id)}
                    variant="danger"
                    size="sm"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
