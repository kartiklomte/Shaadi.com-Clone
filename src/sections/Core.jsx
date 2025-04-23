import React from 'react'
import Bottomcore from '../components/Bottomcore'
import Topcore from '../components/Topcore'
import Middlecore from '../components/Middlecore'

const Core = () => {
  return (
    <div>
        <div>
            <Topcore />
        </div>
        <div>
          <Middlecore />
        </div>
        <div>
            <Bottomcore />
        </div>
    </div>
  )
}

export default Core