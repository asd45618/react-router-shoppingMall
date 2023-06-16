import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  DropdownButton,
  Dropdown,
  Row,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col className="productImg">
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="detailTitle">{product?.title}</div>
          <div className="detailPrice">\{product?.price}</div>
          <div>{product?.choice === true ? "Conscious Choice" : ""}</div>
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
          <Button className="detailBtn" variant="dark">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
