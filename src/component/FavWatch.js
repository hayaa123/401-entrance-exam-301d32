import React, { Component } from "react";
import axios from "axios";
import { Col, Button, Card, Row, Container } from "react-bootstrap";
import ModalWatch from "./ModalWatch";

export class FavWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: "",
      title: "",
      description: "",
      toUSD: 0,
      image_url: "",
      showmodal: false,
    };
  }
  titleInputHaneler = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  descriptionInputHaneler = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  toUSDInputHaneler = (e) => {
    this.setState({
      toUSD: e.target.value,
    });
  };
  imgURLInputHaneler = (e) => {
    this.setState({
      image_url: e.target.value,
    });
  };

  gettingFav = () => {
    axios
      .get(`${process.env.REACT_APP_HOST}/favWatch`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  };

  DeleteOne = (id) => {
    axios
      .delete(`${process.env.REACT_APP_HOST}/deleteById/${id}`)
      .then((res) => {
        this.gettingFav();
      });
  };
  updateOne = (e) => {
    // e.preventDefault()
    console.log(this.state.id)
    console.log(this.state.title)
    let config = {
        method: "PUT",
        baseURL: `${process.env.REACT_APP_HOST}`,
        url: `/updateWatch/${this.state.id}`,
        data: {
          title: this.state.title,
          description: this.state.description,
          toUSD: this.state.toUSD,
          image_url: this.state.image_url,
        },
      };
      axios(config).then((res) => {
          this.setState({
              showmodal:false
          })
        this.gettingFav();
      });
    };
  ModalShow = (id, title, description, toUSD, image_url) => {
    this.setState({
      id: id,
      title: title,
      description: description,
      toUSD: toUSD,
      image_url: image_url,
      showmodal: true,
    });
  };
  closeModal = () => {
    this.setState({
      showmodal: false,
    });
  };
  componentDidMount() {
    this.gettingFav();
  }
  render() {
    return (
      <>
        {" "}
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
                        onClick={() => {
                          this.ModalShow(
                            item._id,
                            item.title,
                            item.description,
                            item.toUSD,
                            item.image_url
                          );
                        }}
                      >
                        Update
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          this.DeleteOne(item._id);
                        }}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <ModalWatch
          id={this.state.id}
          title={this.state.title}
          description={this.state.description}
          toUSD={this.state.toUSD}
          image_url={this.state.image_url}
          showmodal={this.state.showmodal}
          closeModal={this.closeModal}
          titleInputHaneler={this.titleInputHaneler}
          descriptionInputHaneler={this.descriptionInputHaneler}
          toUSDInputHaneler={this.toUSDInputHaneler}
          imgURLInputHaneler={this.imgURLInputHaneler}
          updateOne={this.updateOne}
        />
      </>
    );
  }
}

export default FavWatch;
