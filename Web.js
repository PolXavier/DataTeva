import React, { Component } from 'react';

class TheClass extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { page: "Inici" };
  }

  handleButton = (event) => {
    this.setState({
      page: event.target.value
    });
  }

  toggleSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden-section');
  }

  renderContent() {
    switch (this.state.page) {
      case "PersProj":
        return (
          <div>
            <h1>Projectes</h1>
          </div>
        );
      case "Inici":
        return (
          <div>
            <h1>Inici</h1>
            <h2>Servei personalitzat d'anàlisi de dades</h2>
            <h3 onClick={() => this.toggleSection('bioinformatics')}>Bioinformàtica</h3>
            <div id="bioinformatics" className="hidden-section">
            </div>
            <h3 onClick={() => this.toggleSection('data-collection')}>Recollida de dades</h3>
            <div id="data-collection" className="hidden-section">
            </div>
          </div>
        );
      case "AcProjects":
        return (
          <div>
            <h1>Academic Projects</h1>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <div className="ButHeader">
          <button onClick={this.handleButton} value="Inici">Inici</button>
          <button onClick={this.handleButton} value="PersProj">Projectes</button>
          <button onClick={this.handleButton} value="AcProjects">Academic Projects</button>
        </div>
        <br />
        <div className="Mainest_main">
          <renderContent />
        </div>
      </div>
    );
  }
}

export default TheClass;
