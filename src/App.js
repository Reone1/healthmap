import React, {useEffect} from 'react'

function App() {
  useEffect(() => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,30,30);
  },[])
  return (
    <div className="App">
      <canvas id="myCanvas" width="200" height="100"
        style={{border:"1px solid #c3c3c3"}}>
      </canvas>
    </div>
  );
}

export default App;
