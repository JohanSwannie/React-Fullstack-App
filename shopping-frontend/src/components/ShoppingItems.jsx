import { Row, Col } from "react-bootstrap";
import { ShoppingList } from "./ShoppingList";
import items from "../data/items.json";

export function ShoppingItems() {
  let categoryId = JSON.parse(localStorage.getItem("categoryId"));
  let id = Number(categoryId);
  const shopItems = items.filter((item) => item.category === id);
  const instrument = shopItems[0].instrumentType;

  return (
    <>
      <h2>Shopping Items for {instrument}</h2>
      <Row lg={3} md={2} sm={1} xs={1} className="g-3">
        {shopItems.map((item) => (
          <Col key={item.id}>
            <ShoppingList {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
