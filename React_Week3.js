/*Code Challenge 1: React Components and Object Destructuring */
// This array is used for the Example.
const GAMES = [
    { id: 0, name: "Chess" },
    { id: 1, name: "Go" },
    { id: 2, name: "Risk" },
    { id: 3, name: "Cribbage"}, 
    { id: 4, name: "Spit" }
  ];
  
  // This array is used for the Challenge.
  const RESOURCES = [
    { 
      id: 0, 
      title: "WesBos.com - Destructuring Objects",
      url: "https://wesbos.com/destructuring-objects/"
    },
    { 
      id: 1, 
      title: "FreeCodeCamp - The Basics of Destructuring Props in React",
      url: "https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477" 
    },  
    { 
      id: 2, 
      title: "MDN - Destructuring assignment",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
    },
    {
      id: 3,
      title: "W3Schools - a target",
      url: "https://www.w3schools.com/tags/att_a_target.asp"
    }
  ];
  
  //This App Functional Component is going to display the Results display in the large white panel
  function App() { 
    return ( 
      <div> 
        <PageTitle /> 
        <Games /> 
        <hr /> 
        <Challenge /> 
        <Resources /> {/*Causes the Resources component to be displayed in the console.*/}
      </div> 
    ); 
  }
          
  function PageTitle() {
    return (
      <h1>Code Challenge: React Components and Object Destructuring</h1>
    );
  }
  
  //Creating a Class Component named Resources
  class Resources extends React.Component {
    constructor(props) {
      super(props);
      
      this.state= {
        resources: RESOURCES
      };
    }
    
    render() {
      //resourcesList is a variable that will go through the entire Resources array and contain the ID and display the resource information. How the data will be displayed is based on the code in the RenderResource Functional Component 
      const resourcesList= this.state.resources.map(resource => {
        return(
        <li key={resource.id}>
            <RenderResource resource={resource} /> {/*Determines how the Resources will be displayed on the webpage*/}
         </li>
        );
      });
      
      //return will display the Available Resources
      return(
      <div>
          <h2>Available Resources</h2>
          <ul>{resourcesList}</ul> {/*resourcesList will be displayed on the webpage*/}
       </div>
      );
    }
  }
  
  //Functional Component named RenderResource. It will setup how the Resources will be displayed in the web page. 
  //Using object destructuring in its parameter list ot pass in props.resource as simply resource
  function RenderResource({resource}) {
    //Making each resource a clickable link and have them open in a new tab (this is done with target="_blank"). Link for anchor target attribute: https://www.w3schools.com/tags/att_a_target.asp
    return(
      <a href={resource.url} target="_blank">{resource.title}</a>
     )
  }
  
  class Games extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        games: GAMES
      };
    }
    
    render() {
      const gamesList = this.state.games.map(game => {
        return (
          <li key={game.id}>
            <RenderGame game={game} />
          </li>
        );
      });    
      
      return (
        <div>
          <h2>Available Games</h2>
          <ul>{gamesList}</ul>
        </div>
      );
    }
  }
  
  function RenderGame(props) {
    return (
      <strong>Game ID {props.game.id}: {props.game.name}</strong>
    );
  }
  
  function Challenge() {
    return (
      <React.Fragment>
        <p>For your Code Challenge, you will use the RESOURCES array (line 11).</p>
        <ul>
          <li><strong>Challenge 1:</strong> Create a class component named <strong>Resources</strong>. Model this component on the Games component. Cause it to be displayed in the Results display (the large white panel) by rendering it inside the <strong>App component</strong>, beneath where the Challenge component is rendered.</li>
          <li><strong>Challenge 2:</strong> Create a functional component named <strong>RenderResource</strong>. Use object destructuring in its parameter list to pass in <strong>props.resource</strong> as simply <strong>resource</strong>.</li>
          <li><strong>Challenge 3:</strong> List the URL titles to the view in the render() function of Resources, similar to how the games are listed in the render() function of Games, using the destructured <strong>resource</strong> argument. Title the list <strong>"Additional Resources".</strong></li>
        <li><strong>Challenge 4</strong>: Use JSX elements to make each URL into clickable links. Have them open in a new tab, not the current one. Two hints: 1) You will NOT need to use React Router for this challenge. 2) Look up the "anchor target attribute".</li>
        </ul>
      </React.Fragment>
    );
  }
  
  ReactDOM.render( <App />, document.getElementById("root"));



  /*Code Challenge 2: Lifting State Up and Function Components*/
  //Welcome Functional Component will show what will be displayed on the webpage
function Welcome({bootcampName}) { //Destructuring the bootcampName, that way we can just type bootcampName instead of props.bootcampName
    //Functional Components don't have a render() method, only a return() method.
      return (
        <h1>Welcome to {bootcampName}!</h1>
      );
  }
  
  //Creating the App Class Component
  class App extends React.Component {
    //Lifting the state, so that the state is initialized inside of the App's constructor
      constructor(props) {
        super(props);
        this.state = {
          bootcampName: "Nucamp"
        };
      }
    
    render() {  
      return(
        <div>
          {/*Returning the Welcome component*/}
          <Welcome bootcampName={this.state.bootcampName}/> {/*Passing in the bootcampName property into the Welcome Functional Component*/}
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));