import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
    <Child name="soniya" age={18} marks={[2,5,8,0,6]} person={{name:"soni",dept:["aids"]}}/>
    </div>
  )
}

export default Parent