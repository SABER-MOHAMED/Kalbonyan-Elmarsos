import { useState, useEffect } from "react";

import CardList from "./Components/card-list/CardList.component";
import SearchBox from "./Components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filtredMonsters, setFiltredMonsters] = useState(monsters);

  console.log(filtredMonsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFiltredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFiltredMonsters(newFiltredMonsters);

    console.log("effect is firing");
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-searchBox"
        placeholder="Search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filtredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchFiled: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users/")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(
//           () => {
//             return {
//               monsters: users,
//             };
//           },
//           () => console.log(this.state.monsters)
//         );
//       });
//   }

//   /*
//   In short, with arrow functions there are no binding of this .
//   In regular functions the this keyword represented the object that
//   called the function, which could be the window, the document,
//   a button or whatever. With arrow functions the this keyword always
//   represents the object that defined the arrow function.
//   onSearch(event) {     💥
//   */
//   onSearchChange = (event) => {
//     const searchFiled = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchFiled };
//     });
//   };

//   render() {
//     // Destructring Objects
//     const { onSearchChange } = this;
//     const { monsters, searchFiled } = this.state;

//     const filtredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchFiled);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-searchBox"
//           type="search"
//           placeholder="Search monsters"
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filtredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
