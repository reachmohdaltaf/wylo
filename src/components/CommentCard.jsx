import React from 'react'

const CommentCard = ({comment}) => {
  return (
    <div className='h-40 mt-3 bg-base-300'>
        <p>{comment}</p>
    </div>
  )
}

export default CommentCard
