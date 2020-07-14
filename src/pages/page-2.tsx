import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/page-title";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const SecondPage = () => (
    <Layout>
        <SEO title="Page two" />
        <PageTitle
            title="Page 2"
            breadcrumbs={[
                { name: "Home", link: "/" },
                { name: "Page 2", link: "/page-2" },
            ]}
        />
        <Container fluid>
            <Card className="border-0">
                <Card.Body>
                    <h1>Hi from the second page</h1>
                    <p>Welcome to page 2</p>
                    <Link to="/">Go back to the homepage</Link>
                </Card.Body>
            </Card>
        </Container>
    </Layout>
);

export default SecondPage;
