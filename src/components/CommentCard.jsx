import React from 'react';

const CommentCard = ({ comment }) => {
  return (
    <div className="h-fit flex items-center gap-4 p-4 border-b bg-gray-100 rounded-lg shadow-md">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
        <img
          src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
          alt="User Profile"
          className="w-full h-full object-cover"
        />
      </div>
    <div className=''>
    <p className='font-bold'>name</p>
    <p className="text-gray-700 text-sm">{comment}</p>
    </div>
    </div>
  );
};

export default CommentCard;
