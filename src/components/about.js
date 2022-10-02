import React from "react";

class About extends Component {
    state = {
      checked: true,
      heading: "About Brazilian Jiu Jitsu",
    };
  
    toggleSwitch = () => {
      const newVal = !this.state.checked;
      if (newVal) {
        return this.setState({
          heading: "About Brazilian Jiu Jitsu",
          checked: newVal,
        });
      }
      return this.setState({
        heading: "About BJJ",
        checked: newVal,
      });
    };
  
    render() {
      return (
        <div className="text-gray">
          <Container maxWidth="sm">
            <h1 style={{ textAlign: "center" }}>{this.state.heading}</h1>
            <p>
              FakeCars.com was created to solve a specific problem. That problem
              is quick and reliable access to details about many different models,
              all in one place. We had to use the word "Fake" in our name so that
              we don't get sued by the real guys but we won't worry too much about that. We've provided a link
              to the actual cars.com above and we did not receive any money from
              them to do so. Although, there's an argument that maybe we should
              since we are a top-notch coding bootcamp and anyone would want to be
              associated with us :)
            </p>
            
          </Container>
        </div>
      );
    }
  }
  
  export default About;
  