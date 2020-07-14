import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import PageTitle from "../components/page-title";

const NotFoundPage: React.FC<{}> = ({}) => (
    <Layout>
        <SEO title="404: Not found" />
        <PageTitle
            title="Not Found"
            breadcrumbs={[{ name: "404", link: "/404" }]}
        />
        <Container fluid>
            <Card className="border-0">
                <Card.Body>
                    <h1>NOT FOUND</h1>
                    <p>
                        You just hit a route that doesn&#39;t exist... the
                        sadness. Back to <Link to="/">main page</Link>.
                    </p>
                </Card.Body>
            </Card>
        </Container>
    </Layout>
);

export default NotFoundPage;
