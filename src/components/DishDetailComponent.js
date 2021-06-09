import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';

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

    function RenderComments ({comment}) {
        
            const comments = comment.map((eachItem) => {
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
    }

    const DishDetail = (props) => {
        if (props.dishes != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dishes.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dishes.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dishes} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comment={props.comments} />
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