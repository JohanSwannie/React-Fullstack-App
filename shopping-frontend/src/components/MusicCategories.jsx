import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function MusicCategories({ categoryId, categoryName, imageURL }) {
  const handleButtonClick = () => {
    let idToPass = categoryId;
    localStorage.setItem("categoryId", JSON.stringify(idToPass));
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imageURL}
        height="240px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column card_body">
        <Card.Title className="d-flex m-auto mb-0">
          <NavLink to="/shoppingItems">
            <Button
              className="fs-7 shoppingList_button"
              variant="outline-light"
              onClick={handleButtonClick}
            >
              {categoryName}
            </Button>
          </NavLink>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
