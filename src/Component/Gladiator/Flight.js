function Fight(props) {
    if (props == 1){
        return (
            <div className="App">
            
            Fighting 1
            </div>
          );
    } else if (props == 2){
        return (
            <div className="App">
            
            Fighting 2
            </div>
          );
    } else {
        return (
            <div className="App">
            
            Fighting 3
            </div>
          );
    }
   
  }

  export default Fight;