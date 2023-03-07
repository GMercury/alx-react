import React from 'react';


export default function withLogging(WrappedComponent) {
  withLogging.displayName = `WithLogging(${WrappedComponent.name})`
  return class extends React.Component {
    componentDidMount(){
      if(WrappedComponent.name == undefined){
        console.log(`Component is mounted`)
      } else {
        console.log(`Component ${WrappedComponent.name} is mounted`)
      }
    }

    componentWillUnmount(){
      if(WrappedComponent.name == undefined){
        console.log(`Component is going to unmount`)
      } else {
        console.log(`Component ${WrappedComponent.name} is going to unmount`)
      }
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}