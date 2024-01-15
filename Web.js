import React, { Component } from 'react';

class TheClass extends Component {
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
            {/* Contenido para la página "Projectes" */}
            <h1>Projectes</h1>
            {/* ... Otro contenido ... */}
            <h2>Servei personalitzat d'anàlisi de dades</h2>
            {/* ... Otro contenido ... */}
            <h3 onClick={() => this.toggleSection('bioinformatics')}>Bioinformàtica</h3>
            <div id="bioinformatics" className="hidden-section">
              {/* Contenido de la sección */}
            </div>
            {/* ... Otro contenido ... */}
            <h3 onClick={() => this.toggleSection('data-collection')}>Recollida de dades</h3>
            <div id="data-collection" className="hidden-section">
              {/* Contenido de la sección */}
            </div>
            {/* ... Otro contenido ... */}
          </div>
        );
      case "Inici":
        return (
          <div>
            {/* Contenido para la página "Inici" */}
            <h1>Inici</h1>
            {/* ... Otro contenido ... */}
          </div>
        );
      case "AcProjects":
        return (
          <div>
            {/* Contenido para la página "Academic Projects" */}
            <h1>Academic Projects</h1>
            {/* ... Otro contenido ... */}
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
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default TheClass;
