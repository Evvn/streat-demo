import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Section from './Section.js'
import MenuItem from './MenuItem.js'
import Footer from './Footer.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      venue: 'Cromwell STREAT',
      sections: [
        {
          name: 'All Day Menu',
          items: [
            {
              id: "0",
              name: "Puffed muesli",
              price: "13.0",
              tags: "GF",
              image: "/STREAT/0.jpg",
              description: "Puffed muesli, candied walnuts, pepitas, crimsonraisins. Served with St. David Dairy yoghurt & fresh fruit"
            },
            {
              id: "1",
              name: "Toasted STREAT Bakery bread or fruit toast",
              price: "8.0",
              tags: "GF",
              image: "/STREAT/1.jpg",
              description: "with St. David Dairy butter. GF Precinct gluten free bread (+2)"
            },
            {
              id: "2",
              name: "Simple breakfast",
              price: "12.0",
              tags: "",
              image: "/STREAT/2.jpg",
              description: "mini muesli yoghurt cup, 63°egg & STREAT Bakery toast"
            },
            {
              id: "3",
              name: "House made crispy cannoli shells",
              price: "18.0",
              tags: "",
              image: "/STREAT/3.jpg",
              description: "filled with ricotta, chocolate custard and blood orange foam"
            },
            {
              id: "4",
              name: "Madame Cromwell Croque",
              price: "21.0",
              tags: "",
              image: "/STREAT/4.jpg",
              description: "Salt Kitchen ham, country terrine, roasted pork, Dijon, béchamel in a gruyere toasted sandwich with a fried egg"
            },
            {
              id: "5",
              name: "Son in law eggs ",
              price: "17.0",
              tags: "",
              image: "/STREAT/5.jpg",
              description: "with chilli relish, coconut dressed vegetables and roti"
            },
            {
              id: "6",
              name: "Haloumi beet hash",
              price: "18.0",
              tags: "GF",
              image: "/STREAT/6.jpg",
              description: "with sorrel, witlof, roasted carrot hoummus and pomegranate dressing. Add bacon (+5), add poached egg (+2.5)"
            },
            {
              id: "7",
              name: "Fried egg brik pastry ",
              price: "19.0",
              tags: "",
              image: "/STREAT/7.jpg",
              description: "Fried egg brik pastry"
            },
            {
              id: "8",
              name: "Japanese breakfast platter",
              price: "17.0",
              tags: "VV",
              image: "/STREAT/8.jpg",
              description: "of grilled asparagus, sesame eggplant, tofu & shiitake croquette and bio-dynamic brown rice. Add miso salmon (+7), add 63° egg (+2.5)"
            },
            {
              id: "9",
              name: "Caramel pork belly",
              price: "20.0",
              tags: "",
              image: "/STREAT/9.jpg",
              description: "with twice-cooked boiled eggs, Chinese donut, lettuce, herbs and pickled vegetables"
            },
            {
              id: "10",
              name: "Eggs on toast ",
              price: "10.0",
              tags: "GFA",
              image: "/STREAT/10.jpg",
              description: "scrambled, poached, 63°. GF Precinct gluten free bread (+2)"
            },
          ]
        },
        {
          name: 'Lunch',
          items: [
            {
              id: "11",
              name: "Mexi-steak baguette",
              price: "21.0",
              tags: "",
              image: "/STREAT/11.jpg",
              description: "with tomato salsa, salted ricotta, cos and avocado"
            },
            {
              id: "12",
              name: "Indian kati roll",
              price: "18.0",
              tags: "",
              image: "/STREAT/12.jpg",
              description: "with roasted cauliflower, spiced paneer, date & tamarind chutney and tomato cucumber salad"
            },
            {
              id: "13",
              name: "Soba noodle salad ",
              price: "19.0",
              tags: "",
              image: "/STREAT/13.jpg",
              description: "with smoked duck breast, tsuyu dipping sauce, spring onion, leek and snow peas"
            },
            {
              id: "14",
              name: "Spanish rice",
              price: "18.0",
              tags: "GF, VV",
              image: "/STREAT/14.jpg",
              description: "with white asparagus, artichoke & broad bean Spanish rice with PX sherry vinegar dressed leaves. Add white truffle cream (+3.5)"
            },
            {
              id: "15",
              name: "Gnocchetti Sardo pasta",
              price: "17.0",
              tags: "VV",
              image: "/STREAT/15.jpg",
              description: "with caponata, golden raisin puree, pine nutes and basil. Add stracciatella cheese (+4)"
            },
            {
              id: "16",
              name: "Coconut roasted chicken",
              price: "20.0",
              tags: "",
              image: "/STREAT/16.jpg",
              description: "with prawn cracker, Malaysian rice and herb salad"
            },
          ]
        },
        {
          name: 'Extra',
          items: [
            {
              id: "17",
              name: "Broccoli salad",
              price: "8.0",
              tags: "VV",
              image: "/STREAT/17.jpg",
              description: "with chilli, garlic and olive oil"
            },
            {
              id: "18",
              name: "Grilled chicken wings",
              price: "10.0",
              tags: "",
              image: "/STREAT/18.jpg",
              description: "with Jamaican jerk marinade"
            },
            {
              id: "19",
              name: "Leaf salad",
              price: "9.0",
              tags: "GF, VV",
              image: "/STREAT/19.jpg",
              description: "with chardonnay mustard dressing and toasted hazelnuts"
            },
            {
              id: "20",
              name: "Fat chips",
              price: "8.0",
              tags: "GF",
              image: "/STREAT/20.jpg",
              description: "with seaweed salt and Japanese spicy mayo"
            },
          ]
        }
      ]
    }
  }

  printMenu() {
    let sections = this.state.sections
    let menu = []

    for (let s = 0; s < sections.length; s++) {
      menu.push(
        <Section
          name = { sections[s].name }
          id = {"s" + s }
          key = { s }
        />
      )
      for (let i = 0; i < sections[s].items.length; i++) {
        menu.push(
          <MenuItem
            id = { sections[s].items[i].id }
            name = { sections[s].items[i].name }
            price = { sections[s].items[i].price }
            tags = { sections[s].items[i].tags }
            image = { sections[s].items[i].image }
            description = { sections[s].items[i].description }
            key = { sections[s].items[i].id + sections.length }
          />
        )
      }
    }

    return menu
  }

  render() {

    let venue = this.state.venue
    let sections = this.state.sections

    return (
      <div className="App">

        <Header
          name = { venue }
          sections = { sections }
        />

        <div className="menu">

          { this.printMenu() }

        <Footer />

        </div>

      </div>
    );
  }
}

export default App;
