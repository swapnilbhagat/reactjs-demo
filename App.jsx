import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       prop1: "Property 1",
       prop2: "Property 2"
    }
  }

  render() {
      return (
         <div>
            <Header/>
            <h1>{this.state.prop1}</h1>
            <h1>{this.state.prop2}</h1>
            <h1>{this.state.prop3}</h1>
            <Footer/>
         </div>
      );
  }
}

class Header extends React.Component {
   render() {
     var h1Style = {
        color: 'darkgreen'
     }
     return (
         <div>
            <h1 style={h1Style}>Header</h1>
         </div>
      );
   }
}

class Footer extends React.Component {
   render() {
     var footerMargin = {
        margin-top: 20px;
     }
      return (
         <div>
            <p style={footerMargin}>This is a footer. All rights reserved to Umbrella corporation.</p>
         </div>
      );
   }
}

App.defaultProps = {
   prop3: "Default Property 3",
}

export default App;
