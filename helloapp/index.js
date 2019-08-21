

class App extends React.Component{
  render(){
    return(
        <div id="main">
          <Header/>
          <Body/>
          <Footer/>
        </div>
    );
  }
}










const root = document.getElementById('root')

ReactDOM.render(<App/>, root);