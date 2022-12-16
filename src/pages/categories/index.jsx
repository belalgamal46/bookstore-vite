import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories';
import './styles/categoriesPage.css';

const Categories = () => {
  const title = useSelector((state) => state.categoriesReducer.status);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <section className="categories-section">
      <h1>{title}</h1>
      <button type="button" onClick={handleClick}>
        Check Status
      </button>
    </section>
  );
};

export default Categories;
