import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
// Damn dude I did all this to incorporate infinite scroll just to realize I need to render all my data at once. I'm leaving it in here even though it's really not doing infinite scroll. 
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};
const positions = ["open guard", "half guard", "full guard", "side mount", "full mount", "back mount"];

class App extends React.Component {
//   const Positions = ["open guard", "half guard", "full guard", "side mount", "full mount", "back mount"];
    state = {
//items: Array.from({ length: 20 })
    items: positions
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        // items: this.state.items.concat(Array.from({ length: 20 }))

        items: this.state.items.concat(positions)
      });
    }, 1500);
  };

  render() {
    return (
      <div>
        <h1>BJJ App</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading More JiuJitsu...</h4>}
        >
{/* Creating own array in place of 'items' */}
          {this.state.items.map((positions, index) => (
            <div style={style} key={index}>
              div - {positions}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

export default InfiniteScroll