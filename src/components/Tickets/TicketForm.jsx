import { Modal, Col, Form, Button, Row } from 'react-bootstrap';
import { createTicket, updateWeeklyTicket } from '../../services/Tickets';
import Swal from 'sweetalert2'

export const TicketForm = ({ showFormTicket, handleCloseFormTicket, weeklyTickets, exceuteGetWeeklyTickets, typeForm, setWeeklyTickets, initialTicket, ticket, setTicket, categories }) => {

    const { _id, requester, issue, category, response } = ticket;
    const title = {
        'add': 'Add new Ticket',
        'edit': 'Edit Ticket',
        'info': 'Ticket information'
    }
    const handleChange = ({ target: { name, value, type } }) => {

        setTicket({
            ...ticket,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ([requester, issue, category].includes('')) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
                confirmButtonColor: '#CA2525'
            })
            return;

        }

        if (_id) {
            await updateWeeklyTicket(ticket);
            const newData = weeklyTickets.map((wTicket) => wTicket._id === ticket._id ? ticket : wTicket);
            setWeeklyTickets(newData);
            setTicket(initialTicket);
            handleCloseFormTicket();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Ticket updated successfully',
                showConfirmButton: false,
                timer: 1500
            })
            exceuteGetWeeklyTickets()
            return;

        }
        await createTicket(ticket);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ticket created successfully',
            showConfirmButton: false,
            timer: 1500
        })
        exceuteGetWeeklyTickets()
        setTicket(initialTicket);
        handleCloseFormTicket();

    };

    return (
        <Modal show={showFormTicket} onHide={handleCloseFormTicket} size='lg' backdrop="static" onEscapeKeyDown='true'>
            <Modal.Header closeButton>
                <Modal.Title>{title[typeForm]}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Requester</Form.Label>
                            <Form.Control
                                name='requester'
                                type="text"
                                placeholder="Enter requester"
                                value={requester}
                                onChange={handleChange}
                                disabled={typeForm === 'info'}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                name='category'
                                onChange={handleChange}
                                value={category?._id}
                                disabled={typeForm === 'info'}

                            >
                                <option value="">-- Select a category --</option>
                                {
                                    categories?.map((item) => (
                                        <option key={item.id} value={item?._id}>{item.name}</option>

                                    ))
                                }

                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Issue</Form.Label>
                            <Form.Control
                                name='issue'
                                as="textarea" rows={3}
                                onChange={handleChange}
                                value={issue}
                                disabled={typeForm === 'info'}

                            />
                        </Form.Group>
                        {_id && <Form.Group as={Col} controlId="formGridEmail">
                            Response
                            <Form.Control
                                name='response'
                                as="textarea" rows={3}
                                onChange={handleChange}
                                value={response}
                                disabled={typeForm === 'info'}

                            />
                        </Form.Group>}
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button

                    onClick={handleCloseFormTicket}
                    variant="secondary" >
                    Close
                </Button>
                {typeForm !== 'info' && <Button
                    style={{ backgroundColor: 'rgb(34 77 119)' }}
                    variant="success"
                    onClick={handleSubmit}
                >
                    Save Changes
                </Button>}
            </Modal.Footer>
        </Modal >
    )
}
