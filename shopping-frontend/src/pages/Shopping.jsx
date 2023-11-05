import { Row, Col } from "react-bootstrap";
import { MusicCategories } from "../components/MusicCategories";
import itemCategories from "../data/itemCategories.json";

function Shopping() {
  window.scrollTo(0, 0);

  return (
    <>
      <h2>Swannie's Shopping Categories</h2>
      <Row lg={3} md={2} sm={1} xs={1} className="g-3">
        {itemCategories.map((item) => (
          <Col key={item.categoryId}>
            <MusicCategories {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Shopping;
