import './WatchedProduct.css'
import bg from '../bg.jpg'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function WatchedProduct({ fruit }) {
  const watched = useSelector(state => state.watched);
  const navigate = useNavigate();

  function clickHandler(id) {
    navigate(`/detail/${id}`)
  }

  return (
    <div className="WatchedProduct">
      <div className="cards">
        <p>최근 본 상품</p>
        {
          watched.map((id, i) => {
            return (
              <div className="card" key={i} onClick={() => clickHandler(id)}>
                <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fruit[id].title}.jpg`} alt="" />
                <p>{fruit[id].title}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WatchedProduct;