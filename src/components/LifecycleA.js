import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
   constructor(props) {
      super(props);

      this.state = {
         name: "hassan",
      };
      console.log("LifecycleA constructor");
   }

   static getDerivedStateFromProps(props, state) {
      console.log("LifecycleA getDerivedStateFromProps");
      return null;
   }
   componentDidMount() {
      console.log("LifecycleA componentDidMount");
   }

   shouldComponentUpdate() {
      console.log("LifecycleA  shouldComponentUpdate");
   }

   getSnapshotBeforeUpdate(){
    console.log("LifecycleA  getSnapshotBeforeUpdate");
   }

   componentDidUpdate(){
    console.log("LifecycleA  componentDidUpdate");
   }
   render() {
      console.log("LifecycleA render");
      return (
         <div>
            <div>LifecycleA </div>
            <LifecycleB />
         </div>
      );
   }
}

export default LifecycleA;
