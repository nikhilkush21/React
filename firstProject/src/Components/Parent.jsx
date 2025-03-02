import React from "react";

const Child = (props) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Age:</strong> {props.age}
      </p>
    </div>
  )
}
const Parent=()=>{
  return(
    <Child name="John" age="25"/>
  )
}

export default Parent;
