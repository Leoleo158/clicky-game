import React, { Component } from 'react';
import GridMDC from "./components/GridMDC";
import PaperMDC from "./components/PaperMDC";
import CharCard from "./components/CharCard";
import Score from "./components/Score";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import BottomNavMDC from "./components/BottomNavMDC";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters: characters,
    pickedChars: [],
    topScore: 0,
    alertMessage: ""
  }