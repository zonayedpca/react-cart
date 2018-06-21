import React from 'react'
import { Grid, Button, Item, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const showItems = props.items.map(item => <Item.Group key={item.id} divided>
    <Item>
      <Item.Image src={item.image} />
      <Item.Content>
        <Item.Header><Link to={`/item/${item.id}`}>{item.title}</Link></Item.Header>
        <Item.Meta>
          <span className='cinema'>Quantity: {item.quantity}</span>
        </Item.Meta>
        <Item.Description>{item.body}</Item.Description>
        <Item.Extra>
          <Button onClick={() => props.removeFromCart(item.id)} color='red'>
            Remove
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>);
  if(props.items.length === 0) {
    return (
      <Message color='yellow'>No Item Found! Please Add some item to see them in your cart</Message>
    )
  }

  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column />
          <Grid.Column>
            {showItems}
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Cart;
