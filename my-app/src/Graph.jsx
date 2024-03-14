import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Graph() {
  const nav=useNavigate()
  const weatherPage=()=>{
    nav('/main')
  }
  const {name}=useParams()
  console.log(name);
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary Graph-Nav">
        <div className='graph-heading'>
          <h2>Graph Chart</h2>
        </div>
        <div className='graph-btn' style={{paddingRight:'50px'}}>
        <button onClick={weatherPage} type="button" class="btn btn-success">
          Weather
        </button>
        </div>
      </nav>
    </div>
  )
}

export default Graph