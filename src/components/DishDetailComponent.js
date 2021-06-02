import React, { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Media, Col } from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {List} from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);
    }

    renderDish (dish) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments (dish) {
        if (dish.comments != null) {
            const comments = dish.comments.map((eachItem) => {
                return(
                    <div>
                        <ul>
                            {eachItem.comment}
                        </ul>
                        <ul>-- {eachItem.author} ,
                                 {new Date(eachItem.date).toLocaleDateString('en-US',
                                 {year: 'numeric', month: 'long', day: 'numeric' })}
                        </ul>
                    </div>
                )
            })
            return(
                <ListGroup>
                    <ul>
                        <h3>Comments</h3>
                    </ul>
                    {comments}
                </ListGroup>
            )
        } else {
            return(
                <div></div>
            )
        }
    }

    render() {
        if (this.props.dishes != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dishes)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dishes)}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
        
    }
}

export default DishDetail;