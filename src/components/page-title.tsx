import React from "react";
import {Link} from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";

type breacdrumbObject = {
    name: string,
    link: string
}

const PageTitle: React.FC<{title: string, breadcrumbs?: breacdrumbObject[]}> = ({title, breadcrumbs=[]}) => {
    return (
        <Row className="page-title">
            <Col xs="12" md="5">
                <h3 className="title">{title}</h3>
                <Breadcrumb>
                    {
                        breadcrumbs.map((item, index, arr) => {
                            if (arr.length - 1 === index) {
                                return <Breadcrumb.Item key={index} active>{item.name}</Breadcrumb.Item>
                            } else {
                                return <li className="breadcrumb-item" key={index}><Link to={item.link} role="button">{item.name}</Link></li>
                            }
                        })
                    }
                </Breadcrumb>
            </Col>
        </Row>
    )
}

export default PageTitle;