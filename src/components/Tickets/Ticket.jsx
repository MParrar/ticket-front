import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import { Col, Row } from 'react-bootstrap';
import './card.css'
import { deleteTicket, finishTicket } from '../../services/Tickets';
import Swal from 'sweetalert2';

export const Ticket = ({ weeklyTicket, handleOpenFormTicket, setTicket, exceuteGetWeeklyTickets }) => {

    const { _id, requester, issue, category, status, response } = weeklyTicket
    const editTicket = () => {
        setTicket(weeklyTicket);
        handleOpenFormTicket('edit');
    }

    const informationTicket = () => {
        setTicket(weeklyTicket);
        handleOpenFormTicket('info');
    }

    const handleFinishTicket = async (id) => {
        await finishTicket(id)
        exceuteGetWeeklyTickets()
    }

    const handleDeleteTicket = async (id) => {
        const resp = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'

        }).then((result) => {
            if (result.isConfirmed) {
                return true

            } else {
                return false
            }
        })
        if (resp) {
            await deleteTicket(id)
            exceuteGetWeeklyTickets()
            Swal.fire({
                title: 'Deleted!',
                text: 'Ticket has been deleted.',
                icon: 'success',
                confirmButtonColor: 'rgb(34, 77, 119)',
            }
            )
        }

    }

    return (
        <>
            <div className='card-weekly-ticket' >
                <div >
                    <h4 className='card__title mt-3'>Requester: {requester} </h4>
                    <h4 className='card__title mt-2'>Issue: {issue.length > 10 ? `${issue.substr(0, 10)}...` : issue} </h4>
                    <h4 className='card__title mt-2'>Category: {category?.name} </h4>
                    <h4 className='card__title mt-2'>status: {status?.name === 'initiated' ? <DirectionsRunIcon /> : <CheckCircleIcon />} </h4>

                    <div className='card__title mt-4'>

                        <Row>
                            <Col md='2'>
                                <div
                                    onClick={informationTicket}
                                >
                                    <VisibilityIcon />
                                </div>
                            </Col>
                            <Col md='2'>

                                <div
                                    onClick={editTicket}
                                >
                                    <ModeEditIcon />
                                </div>
                            </Col>
                            <Col md='2'>

                                <div
                                    onClick={() => handleDeleteTicket(_id)}
                                >
                                    <DeleteForeverIcon />
                                </div>
                            </Col>
                            {response && status?.name === "initiated" &&
                                <Col>
                                    <div
                                        onClick={() => handleFinishTicket(_id)}
                                    >
                                        <SdStorageIcon />
                                    </div>
                                </Col>}
                        </Row>
                    </div>
                </div>

            </div>

        </>
    )
}
