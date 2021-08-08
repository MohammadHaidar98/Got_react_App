import React from 'react'

const Character_item = ({item}) => {
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.imageUrl} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.fullName}</h1>
          <ul>
            <li>
              <strong>First Name:</strong> {item.firstName}
            </li>
            <li>
              <strong>Last Name:</strong> {item.lastName}
            </li>
            <li>
              <strong>Title:</strong> {item.title}
            </li>
            <li>
              <strong>Family:</strong> {item.family}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Character_item
