import React, {useState, useEffect, useReducer} from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageTitle from "../../components/page-title";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Bank: React.FC<{}> = ({}) => {
    return (
        <Layout>
            <SEO title="Bank" />
            <PageTitle
                title="Bank"
                breadcrumbs={[
                    { name: "Home", link: "/" },
                    { name: "Bank", link: "/" },
                ]}
            />
            <Container fluid>
                <Card className="border-0">
                    <Card.Body>
                        
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default Bank;