import React from "react";
import "./Burger.css";

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
      ingredients: null,
    };
  }

  addIngredientSalad() {
    this.setState({ salad: this.state.salad + 1 });
  }
  addIngredientBacon() {
    this.setState({ bacon: this.state.bacon + 1 });
  }
  addIngredientCheese() {
    this.setState({ cheese: this.state.cheese + 1 });
  }
  addIngredientMeat() {
    this.setState({ meat: this.state.meat + 1 });
  }

  render() {
    console.log(this.state);
    let status;
    let price = 4.0;
    let saladArray;
    let baconArray;
    let cheeseArray;
    let meatArray;
    if (
      !(
        this.state.cheese ||
        this.state.bacon ||
        this.state.meat ||
        this.state.salad
      )
    ) {
      status = "Please start adding ingredients!";
    } else {
      if (this.state.salad) {
        saladArray = Array(this.state.salad).fill(null);
        price += this.state.salad * 0.5;
      }
      if (this.state.bacon) {
        baconArray = Array(this.state.bacon).fill(null);
        price += this.state.bacon * 0.7;
      }
      if (this.state.cheese) {
        cheeseArray = Array(this.state.cheese).fill(null);
        price += this.state.cheese * 0.4;
      }
      if (this.state.meat) {
        meatArray = Array(this.state.meat).fill(null);
        price += this.state.meat * 1.3;
      }
    }

    return (
      <div className="App">
        <div className="burger-wrapper">
          <div className="Burger">
            <div className="top-Burger"></div>
            <div> {status}</div>
            {saladArray
              ? saladArray.map((element) => <div className="salad"> </div>)
              : ""}
            {baconArray
              ? baconArray.map((element) => <div className="bacon"> </div>)
              : ""}
            {cheeseArray
              ? cheeseArray.map((element) => <div className="cheese"> </div>)
              : ""}
            {meatArray
              ? meatArray.map((element) => <div className="meat"> </div>)
              : ""}

            <div className="bottom-Burger"></div>
          </div>
        </div>
        <div className="buttons">
          {" "}
          Current Price :{price}
          <div className="ing">
            {" "}
            Salad
            <button className="add" onClick={() => this.addIngredientSalad()}>
              More
            </button>
          </div>
          <div className="ing">
            {" "}
            Bacon
            <button className="add" onClick={() => this.addIngredientBacon()}>
              More
            </button>
          </div>{" "}
          <div className="ing">
            {" "}
            Cheese
            <button className="add" onClick={() => this.addIngredientCheese()}>
              More
            </button>
          </div>
          <div className="ing">
            {" "}
            Meat
            <button className="add" onClick={() => this.addIngredientMeat()}>
              More
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Burger;
