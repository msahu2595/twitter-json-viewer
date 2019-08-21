import React from "react";

var axios = require("axios");

class Database extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: []
    };
  }

  componentWillMount() {
    axios
      .get("http://13.232.242.50:33138/tweets")
      .then(response => {
        console.log(response);
        console.log(response.data);

        this.setState({
          userList: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const usersList = this.state.userList;
    let usersListBlock = "";

    if (usersList.length > 0) {
      usersListBlock = usersList.map(obj => {
        return (
          <div className="card" style={{
          "marginTop": 20,
          "marginBottom": 20,
          "marginLeft": 20,
          "marginRight": 20
      }}>
            <header className="card-header">
              <p className="card-header-title">{obj.user.name}</p>
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true" />
              </span>
            </header>
            <div className="card-content">
              <div className="content">
                {obj.source}
                <br />
                <time dateTime="2016-1-1">{obj.created_at}</time>
              </div>
            </div>
          </div>
        );
      });
    }
    return <div>{usersListBlock}</div>;
  }
}

export default Database;
