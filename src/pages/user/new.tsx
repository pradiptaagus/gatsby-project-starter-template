import React, {useState, useReducer} from "react";
import { navigate } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageTitle from "../../components/page-title";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserService } from "../../services/UserService";
import { userReducer, SET_USERNAME, SET_EMAIL } from "../../reducers/user-reducer";

const NewUser: React.FC<{}> = ({}) => {
    const userService = new UserService();
    const [isFetched, setIsFetched] = useState(true);
    const [errors, setErrors] = useState<{username: string[], email: string[]}>({username: [], email: []});
    const [state, dispatch] = useReducer(userReducer, {
        id: "",
        username: "",
        email: "",
        data: [],
        currentPage: 1,
        itemPerPage: 10,
        totalItemCount: 0
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        setIsFetched(false);
        userService.storeUser({
            username: state.username,
            email: state.email
        }).then(response => {
            console.log(response);
            setErrors({
                username: [],
                email: []
            });
            setIsFetched(true);
            navigate("/user");
        }).catch(errors => {
            console.log(errors);
            setErrors(errors.errors);
            setIsFetched(true);
        });
    }

    return (
        <Layout>
            <SEO title="New User" />
            <PageTitle
                title="New User"
                breadcrumbs={[
                    { name: "Home", link: "/" },
                    { name: "New User", link: "/" },
                ]}
            />
            <Container fluid>
                <Card className="border-0">
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={state.username} isInvalid={errors.username?.length > 0 ? true : false} onChange={(e) => dispatch({type: SET_USERNAME, payload: e.target.value})} />
                                <Form.Text className="text-danger">{errors.username}</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={state.email} isInvalid={errors.email?.length > 0 ? true : false} onChange={(e) => dispatch({type: SET_EMAIL, payload: e.target.value})} />
                                <Form.Text className="text-danger">{errors.email}</Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={!isFetched}>{isFetched ? 'Save' : 'Storing...'}</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default NewUser;