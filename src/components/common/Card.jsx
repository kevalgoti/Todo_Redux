import React from 'react'

function Card({task , desc, email}) {
  return (
 <>
 <p>{task}</p>
 <p>{desc}</p>
 <p>{email}</p>
 </>
  )
}

export default Card