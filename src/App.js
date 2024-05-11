
import './App.css';

function Footer () {
  return (
      <>
          <p>Lorem ipsum dolor sit amet .</p>
          <h1>I am Footer Component</h1>
      </>
  )
}

function Content () {
  return (
      <>
          <p>Lorem ipsum dolor sit amet .</p>
          <h1>I am Content Component</h1>
      </>
  )
}

function Header () {
  return (
      <>
          <p>Lorem ipsum dolor sit amet .</p>
          <h1>I am Header Component</h1>
      </>
  )
}

function Title () {
  return (
      <>
          <p>Lorem ipsum dolor sit amet .</p>
          <h1>I am Title Component</h1>
      </>
  )
}

function App() {
  return (
      <div className="App">
           <Footer/>
           <Content/>
           <Header/>
          <div>
              <Title/>
          </div>
      </div>

  );
}

export default App;
