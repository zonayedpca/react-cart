import React, { Component } from 'react';
import { Grid, Image, Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Item extends Component {
  render() {
    const showItems = this.props.items.map(item => (
      <Grid.Column key={item.id}>
        <Card>
          <Image src={item.image} />
          <Card.Content>
            <Card.Header><Link to={`/item/${item.id}`}>{item.title}</Link></Card.Header>
            <Card.Meta>Price: ${item.price}</Card.Meta>
            <Card.Description>
              {item.body.substr(0, 45)}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button onClick={() => this.props.addToCart(item.id)} positive>
                <i aria-hidden="true" className="icon cart plus"></i> Add To Cart
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    ));
    return (
      <div>
        <Grid columns={4}>
          <Grid.Row>
            {showItems}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Item;
