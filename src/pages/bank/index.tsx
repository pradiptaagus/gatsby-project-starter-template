import React, {useState, useEffect, useReducer} from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageTitle from "../../components/page-title";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { BankService } from "../../services/BankService";
import { BankQueryInterface, BankInterface } from "../../interfaces/BankInterface";
import { bankReducer, SET_BANK_DATA } from "../../reducers/bank-reducer";

const Bank: React.FC<{}> = ({}) => {
    const bankService = new BankService();
    const [state, dispatch] = useReducer(bankReducer, {
        bankId: "",
        address: "",
        name: "tes",
        atasNama: "",
        coaArId: "",
        coaDebitCardId: "",
        defaultBunga: 0,
        data: []
    })

    function fetchBanks(data: BankQueryInterface) {
        bankService.banks(data).then((response: any) => {
            console.log(response);
            dispatch({type: SET_BANK_DATA, payload: response.data});
        }).catch((errors: any) => {
            console.log(errors);
        });
    }

    useEffect(() => {
        fetchBanks({size: "5", page: "1"});
    }, []);
    
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
                        <ul>
                            <li>{state.name}</li>
                            {state.data.map((item) => {
                                console.log(item)
                                return (<li>{item.name}</li>)
                            })}
                        </ul>
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default Bank;