// import React from 'react'
import { Card } from 'react-bootstrap';
import Tags from './Tags';

export default function MyCard(props) {
  return (
    <div className="col-md-3">
      <Card style={{ height: '100%' }}>
        <Card.Img variant="top" src={props.imagen} />
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
          <Card.Text>
            {props.descripcion}
          </Card.Text>
        </Card.Body>
        <Tags color={props.color} texto={props.texto} />
      </Card>
    </div>
  );
}
