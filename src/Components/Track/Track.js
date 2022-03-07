import React from "react";
import './Track.css'

export class Track extends React.Component {
  renderAction(e) {
    if (isRemoval) {
      document.getElementsByClassName('Track-action')[0].innerHTML = "-";
    } else {
      document.getElementsByClassName('Track-action')[0].innerHTML = "+";
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>
            {/* <!-- track name will go here --> */}
          </h3>
          <p>
            {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
          </p>
        </div>
        <button className="Track-action">
          {/* <!-- + or - will go here --> */}
        </button>
      </div>
    )
  }
}