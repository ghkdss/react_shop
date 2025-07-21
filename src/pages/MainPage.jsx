import Card from "../components/Card"
import bg from "../bg.jpg"

function MainPage({ fruit }) {
  return (
    <>
      <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')', height:'300px' }}></div>

      <div className="container">
        <div className="row">
          {
            fruit.map((data, i) => {
              return (
                <Card data={data} key={i} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default MainPage