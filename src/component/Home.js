import axios from "axios";
import React, { Component } from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  gettingWatch = () => {
    axios.get(`${process.env.REACT_APP_HOST}/watch`).then((res) => {
      this.setState({
        data: res.data,
      });
    });
  };

  addingToFav = (title, description, toUSD, image_url) => {
    let config = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_HOST}`,
      url: "/addWatch",
      data: {
        title: title,
        description: description,
        toUSD: toUSD,
        image_url: image_url,
      },
    };
    axios(config);
  };

  componentDidMount() {
    this.gettingWatch();
  }
  render() {
    return (
      <>
        <Container>
          <Row xs="3">
            {this.state.data.map((item) => {
              return (
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.image_url} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        <p>{item.description}</p>
                        <p>{item.toUSD} &#36;</p>
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() =>
                          this.addingToFav(
                            item.title,
                            item.description,
                            item.toUSD,
                            item.image_url
                          )
                        }
                      >
                        Add-To-list
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
