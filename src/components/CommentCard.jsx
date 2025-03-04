import React from 'react'

const CommentCard = ({comment}) => {
  return (
    <div className='h-fit flex items-center justify-between px-4 border-b-1 bg-base-300'>
      <div className="userprofile bg-red-200 h-10 rounded-full w-10"><img src="https://via.placeholder.com/150" alt="" /></div> <p className='p-4'>{comment}</p>
    </div>
  )
}

export default CommentCard
