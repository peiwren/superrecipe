import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Recipe from "../components/Recipe";
// import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import "./style.css";

class Saved extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    this.getSavedRecipes();
  }

  getSavedRecipes = () => {
    API.getSavedRecipes()
      .then(res =>
        this.setState({
          recipes: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleRecipeDelete = id => {
    API.deleteRecipe(id).then(res => this.getSavedRecipes());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h1 className="savedrecipes">
              <strong>Saved Recipes</strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Recipes">
              {this.state.recipes.length ? (
                <List>
                  {this.state.recipes.map(recipe => (
                    <Recipe
                      key={recipe.idMeal}
                      title={recipe.title}
                      imageURL={recipe.imageURL}
                      itemURL={recipe.itemURL}
                      instr={recipe.instr}
                      Button={() => (
                        <button
                          onClick={() => this.handleRecipeDelete(recipe._id)}
                          className="btn btn-danger ml-2 extra"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Recipes</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
