import React, { Component } from "react";
import Hero from "../components/Hero";
// import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Recipe from "../components/Recipe";
// import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import "./style.css";

class Home extends Component {
  state = {
    recipes: [],
    q: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  getRecipes = () => {
    console.log(this.state);
    API.getRecipes(this.state.q)
      .then(res => {
        let r = res.data.length ? res.data : [];
        this.setState({
          recipes: r,
          q: ""
        });
      })
      .catch(() =>
        this.setState({
          recipes: [],
          q: "",
          message: `No Recipes Found for ${this.state.q} Try a Different Query`
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getRecipes();
  };

  handleRecipeSave = recipe => {
    // debugger;
    API.saveRecipe({
      mealdbId: recipe.idMeal,
      title: recipe.strMeal,
      imageURL: recipe.strMealThumb,
      itemURL: recipe.strYoutube,
      instr: recipe.strInstructions
    }).then(() => this.getRecipes());
  };

  render() {
    console.log("recipes", this.state.recipes);
    return (
      <Container>
        {/* row 1 */}
        <Row>
          <Col size="md-12">
            <Hero>
              <h1>Search Great Recipes</h1>
              <h2>Cook More at Home!</h2>
            </Hero>
          </Col>
          <Col size="md-12">
            <div className="beginsearch">
              <Card title="Recipe Search">
                <Form
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  q={this.state.q}
                />
              </Card>
            </div>
          </Col>{" "}
        </Row>

        {/* row 2 */}
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.recipes.length ? (
                <List>
                  {this.state.recipes.map(recipe => (
                    <Recipe
                      key={recipe.idMeal}
                      title={recipe.strMeal}
                      imageURL={recipe.strMealThumb}
                      itemURL={recipe.strYoutube}
                      instr={recipe.strInstructions}
                      Button={() => (
                        <button
                          type="button"
                          onClick={() => this.handleRecipeSave(recipe)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />

                    // console.log(recipe)
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
