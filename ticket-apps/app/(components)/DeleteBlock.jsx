import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const DeleteBlock = () => {
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`);
  };

  return <FontAwesomeIcon icon={faX} className="text-red 400 hover:cursor-pointer hover:text-red-200" />;
};

export default DeleteBlock;
