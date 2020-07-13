import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/page-title";
import Container from "react-bootstrap/Container";

const SecondPage = () => (
    <Layout>
        <SEO title="Page two" />
        <PageTitle title="Home" breadcrumbs={[{name: 'Home', link: '/'}, {name: 'Item', link: '/'}]} />
        <Container fluid>
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
        </Container>
    </Layout>
);

export default SecondPage;
