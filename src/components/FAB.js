import './componentcss/fab.css'
import { Link } from 'react-router-dom';

const FAB = () => {
  return (
    <button type="button" class="fab">
      <Link to="/book">
        {" "}
        Book <span>Kevin</span> Now{" "}
      </Link>
    </button>
  );
};

export default FAB;
