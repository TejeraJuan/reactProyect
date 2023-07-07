import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


const Item = ({product}) => {
    return (
        <Row xs={1} md={1} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
             <Card style={{ width: '18rem' }}
                key={product.id}
                className=''>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>
                        {product.title}
                    </Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                    <Link to={`/product/${product.id}`}>
                        <Button variant="primary">Ver Detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )
};

export default Item;



