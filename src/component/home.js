import React from "react";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

class Home extends React.Component {
  render() {
    return (
      <div className="contain-all">
        <div className="contain">
          <div className="contain-item">
            <h2 onClick={() => this.props.addBasket("shirt")}>Shirt</h2>
          </div>{" "}
          <div className="contain-item">
            <h2 onClick={() => this.props.addBasket("shorts")}>Shorts</h2>
          </div>{" "}
          <div className="contain-item">
            <h2 onClick={() => this.props.addBasket("cap")}>Cap</h2>
          </div>
        </div>
      </div>
    );
  }
}

// const Home = (props) => {
//   console.log(props);
//   return (
//     <div className="contain-all">
//       <div className="contain">
//         <div className="contain-item">
//           <h2 onClick={() => props.addBasket("shirt")}>Shirt</h2>
//         </div>{" "}
//         <div className="contain-item">
//           <h2 onClick={() => props.addBasket("shorts")}>Shorts</h2>
//         </div>{" "}
//         <div className="contain-item">
//           <h2 onClick={() => props.addBasket("cap")}>Cap</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

export default connect(null, { addBasket })(Home);
