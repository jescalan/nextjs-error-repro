import { useState } from 'react'

export default function Page({ foo }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
      <p>{foo}</p>
    </>
  )
}
