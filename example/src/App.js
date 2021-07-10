import React from 'react'

import { Button } from 'copyui'
import 'copyui/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        width: '1000px',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Button text='Create' type='default' onClick={() => alert('dalal')} />
      <Button text='Create' type='primary' />
      <Button text='Create' type='dashed' />
      <Button text='Create' type='text' />
      <Button text='Create' type='link' />
    </div>
  )
}

export default App
