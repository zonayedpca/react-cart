import React from 'react';
import { Grid, Image, Button, Card } from 'semantic-ui-react';

const SingleItem = (props) => {
  let item = props.item.filter(oneItem => oneItem.id === parseInt(props.match.params.id, 10) ? oneItem : null);
  item = item[0];
  return (
    <div className="single-item">
      <Grid columns={4}>
        <Grid.Row>
          <Grid.Column />
          <Grid.Column>
            <Card>
              <Image src={item.image} />
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>Price: ${item.price}</Card.Meta>
                <Card.Description>
                  {item.body}
                  {item.body}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button onClick={() => props.addToCart(item.id)} positive>
                    <i aria-hidden="true" className="icon cart plus"></i> Add To Cart
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default SingleItem;
