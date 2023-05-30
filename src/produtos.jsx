import Card from "react-bootstrap/Card";
import json from "../db.json";
function Produtos() {
  return (
    <div className="linha">
      {json.products.map((id) => (
        
          <Card key={id} className="cartao" bg="dark" text="light">
            <Card.Img variant="top" className="image " src={id.img} />
            <Card.Body>
              <Card.Title>{id.nome}</Card.Title>
              <Card.Text>{id.price}</Card.Text>
            </Card.Body>
          </Card>
        
      ))}
    </div>
  );
}
export default Produtos;
