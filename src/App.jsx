import './App.css'

function App(data) {

  const image = data.propt()
  console.log(image)

  return (
    <>
      <h2 className='heading'>Gallery Function</h2>
      <div className="Bigdiv">
        {
          image.map((obj) => {
            return (
              <img src={obj.img} />
            )
          })
        }
      </div>
    </>
  )
}

export default App;