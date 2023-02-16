import React from "react"
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const ReactWrapper = (props) => {
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <Spinner />;
      case Status.FAILURE:
        return <ErrorComponent />;
      case Status.SUCCESS:
        return <MyMapComponent />;
    }
  };

  return (
    <>
      <h1>React Wrapper</h1>
      <Wrapper apiKey={"AIzaSyBraMYwUbKzwtWbXX2s4r4ENgPHJ32f28o"} render={render}>
        <MyMapComponent />
      </Wrapper>
    </>
  )
}

export default ReactWrapper