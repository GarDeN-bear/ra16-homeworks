import React, { Component } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "view_list",
      products: [
        {
          name: "Nike Metcon 2",
          price: "130",
          color: "red",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
        },
        {
          name: "Nike Metcon 2",
          price: "130",
          color: "green",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
        },
        {
          name: "Nike Metcon 2",
          price: "130",
          color: "blue",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
        },
        {
          name: "Nike Metcon 2",
          price: "130",
          color: "black",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
        },
        {
          name: "Nike free run",
          price: "170",
          color: "black",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
        },
        {
          name: "Nike Metcon 3",
          price: "150",
          color: "green",
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
        },
      ],
    };
  }

  handleSwitchType = () => {
    this.setState({
      viewType:
        this.state.viewType === "view_module" ? "view_list" : "view_module",
    });
  };

  render() {
    return (
      <div>
        <IconSwitch
          icon={this.state.viewType}
          onSwitch={this.handleSwitchType}
        />
        {this.state.viewType === "view_list" ? (
          <CardsView cards={this.state.products} />
        ) : (
          <ListView items={this.state.products} />
        )}
      </div>
    );
  }
}

export default Store;
