import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Media, Col } from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {List} from 'reactstrap';



    function RenderDish ({dish}) {
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

    function RenderComments ({dish}) {
        if (dish.comments != null) {
            const comments = dish.comments.map((eachItem) => {
                return(
                    <div>
                        <ul>
                            {eachItem.comment}
                        </ul>
                        <ul>-- {eachItem.author} ,
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(eachItem.date)))}
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

    const DishDetail = (props) => {
        if (props.dishes != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dishes} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments dish={props.dishes} />
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


export default DishDetail;