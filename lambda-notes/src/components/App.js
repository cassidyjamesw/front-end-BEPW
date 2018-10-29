import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import NotesListView from "../views/NotesListView";
import NoteFormView from "../views/NoteFormView";
import NoteView from "../views/NoteView";
import "../App.css";

const Button = styled.button`
  text-align: center;
  background-color: #24b8bd;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  width: 200px;
  height: 3rem;
  margin: 0.5rem 0;
`;

const Heading = styled.h1`
  color: #474b4c;
  text-align: left;
`;

class App extends Component {
  componentDidMount;
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <Heading>Lambda Notes</Heading>
          <NavLink to="/notes" activeClassName="activeNavButton">
            <Button>View Your Notes</Button>
          </NavLink>
          <NavLink to="/addNote" activeClassName="activeNavButton">
            <Button>+ Create New Note</Button>
          </NavLink>
        </div>
        <Route exact path="/notes" component={NotesListView} />
        <Route exact path="/addNote" component={NoteFormView} />
        <Route exact path="/notes/:noteId" component={NoteView} />
      </div>
    );
  }
}

export default withRouter(App);
