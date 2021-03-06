/*Code Challenge 1: JSX and State */
//Code is found here: https://codepen.io/Hiddenflower/pen/RwVjBNB?editors=0110

//JS
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bootcamp: "Nucamp"
        };
    }

    render() {
        const course = "React";
        return (
            <div>
                <span className="blue-box">{this.state.bootcamp}</span>
                <span className="orange-box">{course}</span>
            </div>
        )
    }
}

ReactDOM.render(<Example />, document.getElementById('root'));

//CSS
/*
.blue-box {
    border: solid blue;
    padding: 1rem;
}

.orange-box {
    border: solid orange;
    padding: 1rem;
}

body {
    font-family: "Oxygen", sans-serif;
    margin-top: 2rem;
}
*/


/*Code Challenge 2: Constructing Lists */
//Code is found here: https://codepen.io/Hiddenflower/pen/ExmbpKX?editors=0010

//JSS
class App extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        countries: [
          {
            id: 0,
            name: 'Greece',
            continent: 'Europe'
          },
          {
            id: 1,
            name: 'Laos',
            continent: 'Asia'
          },
          {
            id: 2,
            name: 'Zambia',
            continent: 'Africa'
          },
          {
            id: 3,
            name: "Brazil",
            continent: "South America"
          }
        ],
      };
    }
  
    renderCountries(countries) {
      return (
        <div>
          {countries.map(country => <div key={country.id}>{country.name} - {country.continent}</div>)}
        </div>
      );
    }
    
    render() {
      return (
        <div>
          <h1 className="title">My Travel Bucket List</h1>
            {this.renderCountries(this.state.countries)}
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));

  //CSS
  /*
body {
  margin: 1rem;
  font-family: 'Oxygen', sans-serif; 
}

.title {
  background: teal;
  color: white;
}
  */


/*Code Challenge 3: Passing Props */
//Code is found here: https://codepen.io/Hiddenflower/pen/qBmVyRx
class App extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        partyType: "birthday",
        entertainment: "clowns",
        venue: {
          name: "Polly's Party Palace",
          capacity: 120
        },
        expectedFriends: "Irina, Daniel, Quentin, Mary and Anna"
      };
    }
  
    render() {
      return (
        <div>
          {/*Passing in the state properties as props to the Party Component*/}
          <Party partyType={this.state.partyType} entertainment={this.state.entertainment} venue={this.state.venue} expectedFriends={this.state.expectedFriends}/>
        </div>
      );
    }
  };
        
    //Creating the React Component named Party
    class Party extends React.Component {
      render() {
      return (
         <div> 
           <h3>Party Time! </h3> 
           <p>This {this.props.partyType} party will be held at {this.props.venue.name} with a maximum capacity of {this.props.venue.capacity}. </p>
           <p>Featured entertainement: {this.props.entertainment}!</p>
          <p>List of friends that are expected to attend are: {this.props.expectedFriends}</p>
         </div>
       )    
      }
     }
  
  ReactDOM.render(<App />, document.getElementById('root'));