import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import PageTitle from "../components/page-title";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <PageTitle title="Home" breadcrumbs={[{name: 'Home', link: '/'}, {name: 'Item', link: '/'}]} />
        <Container fluid>
            <Card className="border-0">
                <Card.Body>
                    <h1>Hi people</h1>
                    <p>Welcome to your new Gatsby site.</p>
                    <p>Now go build something great.</p>
                    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                        <Image />
                    </div>
                    <Link to="/page-2/">Go to page 2</Link> <br />
                    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
                </Card.Body>
            </Card>
        </Container>        
    </Layout>
);

export default IndexPage;
