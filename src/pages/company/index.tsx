import React, {useEffect, useReducer, useState} from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageTitle from "../../components/page-title";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { CompanyService } from "../../services/CompanyService";
import { companyReducer, SET_CURRENT_PAGE, SET_DATA, SET_ITEM_PER_PAGE, SET_TOTAL_ITEM_COUNT } from "../../reducers/company-reducer";
import { Queryinterface } from "../../interfaces/QueryInterface";
import Button from "react-bootstrap/Button";
import Pagination from "react-js-pagination";
import DeleteModal from "../../components/delete-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Company: React.FC<{}> = ({}) => {
    const companyService = new CompanyService();
    const [isShowModal, setIsShowModal] = useState(false);
    const [modalText, setModalText] = useState<string>("");
    const [paramater, setParameter] = useState<string>("");
    const [fetch, setFetch] = useState<boolean>(false);
    const [state, dispatch] = useReducer(companyReducer, {
        id: "",
        name: "",
        businessName: "",
        taxNumber: "",
        serialNumber: "",
        activationCode: "",
        address: "",
        inventoryValuationMethod: 0,
        inventoryMethod: 0,
        contactPerson: "",
        startSystem: "",
        address2: "",
        govermentVat: 0,
        email: "",
        website: "",
        phone: "",
        businessType: 0,
        packageSystemId: "",
        status: "",
        timeZone: "",
        data: [],
        currentPage: 0,
        itemPerPage: 0,
        totalItemCount: 0,
    });

    function handlePageChange(pageNumber: number) {
        if (state.currentPage !== pageNumber) {
            fetchUser({size: 5, page: pageNumber});
        }
    }

    function handleDelete(e: any) {
        setParameter(e.target.dataset.id);
        setIsShowModal(true);
        setModalText("Are you sure want to delete user?");
    }

    function fetchDelete(id: string) {
        companyService.delete(id).then((response: any) => {
            console.log(response);
            fetchUser({size: 5, page: state.currentPage});
            setIsShowModal(false);
        }).catch((errors: any) => {
            console.log(errors);
        });
    }

    function fetchUser(data: Queryinterface) {
        setFetch(true);
        companyService.index(data).then((response: any) => {
            console.log(response);
            dispatch({type: SET_DATA, payload: response.data.data});
            dispatch({type: SET_CURRENT_PAGE, payload: parseInt(response.data.current_page)});
            dispatch({type: SET_ITEM_PER_PAGE, payload: parseInt(response.data.per_page)});
            dispatch({type: SET_TOTAL_ITEM_COUNT, payload: parseInt(response.data.total)});
            setFetch(false);
        }).catch((errors: any) => {
            console.log(errors);
            setFetch(false);
        });
    }

    useEffect(() => {
        fetchUser({size: 5, page: 1});
    }, []);
    
    return (
        <Layout>
            <SEO title="Company" />
            <PageTitle
                title="Company"
                breadcrumbs={[
                    { name: "Home", link: "/" },
                    { name: "Company", link: "/" },
                ]}
            />
            <Container fluid>
                <DeleteModal 
                    title="Delete user" 
                    text={modalText} 
                    show={isShowModal} 
                    onHide={() => setIsShowModal(false)}
                    parameter={paramater}
                    callback={fetchDelete}
                />
                <Card className="border-0">
                    <Card.Body>
                        <h3 className="mb-3">List of user</h3>
                        <Link to="/user/new" className="btn btn-primary mb-3">Add user</Link>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    fetch ? <tr><td colSpan={4} className="text-center"><FontAwesomeIcon icon={faSpinner} pulse size="lg" /></td></tr> : null
                                }
                                {
                                    !fetch ? 
                                    state.data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                <Link to={`/user/edit?id=${item.id}`} className="btn btn-info mr-2">Edit</Link>
                                                <Button variant="danger" data-id={item.id} onClick={(e) => handleDelete(e)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))
                                    : null
                                }
                            </tbody>
                        </Table>
                        <Pagination
                            activePage={state.currentPage}
                            itemsCountPerPage={state.itemPerPage}
                            totalItemsCount={state.totalItemCount}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default Company;