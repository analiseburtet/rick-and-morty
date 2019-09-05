import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.component"
class App extends Component {
  constructor (){
    super();

    this.state = {
      characters: [],
      searchField: ""
    };
  }
  async componentDidMount(){
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({characters: data.results});
  }

  handleChange = (e) =>{
    this.setState({
      searchField: e.target.value
   })
  }
  render(){
    const { characters, searchField } = this.state;
    const filteredcharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className="App">
        <h1>Rick and Morty</h1>
        <SearchBox 
          placeholder={"Search character"}
          handleChange={ this.handleChange } 
        />
        <CardList characters={filteredcharacters}></CardList>
      </div>
    );
  }
};

export default App;