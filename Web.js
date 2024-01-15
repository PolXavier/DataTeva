class TheClass extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { page: "Inici" };
    this.handleButton = this.handleButton.bind(this);
    //this.renderContent = this.renderContent.bind(this);
    this.toggleSection = this.toggleSection.bind(this);
  }

  handleButton(event){
    this.setState({
      page: event.target.value
    });
  }

  toggleSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden-section');
  }

  render() {
    switch (this.state.page) {
      case "PersProj":
        return (
          <div>
            <div className="ButHeader">
                  <button onClick={this.handleButton} value="Inici">Inici</button>
                  <button onClick={this.handleButton} value="PersProj">Projectes</button>
                  <button onClick={this.handleButton} value="AcProjects">Academic Projects</button>
            </div>
            <br />
            <div className="Mainest_main"></div>
              <div>
                <h1>Projectes</h1>
                </div>
          </div>
        );
      case "Inici":
        return (
          <div>
              <div className="ButHeader">
                <button onClick={this.handleButton} value="Inici">Inici</button>
                <button onClick={this.handleButton} value="PersProj">Projectes</button>
                <button onClick={this.handleButton} value="AcProjects">Academic Projects</button>
              </div>
              <br />
            <div className="Mainest_main">
              <h1>Inici</h1>
            <h2>Servei personalitzat d'anàlisi de dades</h2>
						
                           
            </div>
          </div>
        );
      case "AcProjects":
        return (
          <div>
            <div className="ButHeader">
                <button onClick={this.handleButton} value="Inici">Inici</button>
                <button onClick={this.handleButton} value="PersProj">Projectes</button>
                <button onClick={this.handleButton} value="AcProjects">Academic Projects</button>
            </div>
            <br />
            <div className="Mainest_main">
              <h1>Academic Projects</h1>
            </div>
          </div>
        );
      default:
        return null;
    }
  }
/*
  render() {
    gg = this.renderContent()
    return (
      <div>
        <br />
        <div className="Mainest_main">
          {gg}
        </div>
      </div>
    );
  }
*/
}
ReactDOM.render(<TheClass />, document.getElementById("root"));
