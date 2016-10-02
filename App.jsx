import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       prop1: 1,
       name: ""
    }

    this.changeValue = this.changeValue.bind(this);
    this.incrementValue = this.incrementValue.bind(this);
  }

  incrementValue(){
    this.setState({prop1: this.state.prop1+1})
  }

  changeValue(e){
    this.setState({name: e.target.value})
  }

  render() {
      return (
         <div>
            <Header/>
            <button onClick={this.incrementValue}>Increment</button>
            <div>{this.state.prop1}</div>
            <br/>
            <input type='text' value={this.state.name} onChange={this.changeValue}/>
            <div>{this.state.name}</div>
            <Footer/>
         </div>
      );
  }
}

class Header extends React.Component {
    render() {
        return (
           <div>
              <h1>HEADER</h1>
           </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
           <div>
              <h1>FOOTER</h1>
           </div>
        );
    }
}

export default App;
