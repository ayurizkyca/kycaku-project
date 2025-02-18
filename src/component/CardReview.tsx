import { Star } from 'lucide-react'
import React from 'react'

interface Props {
  description: string,
  username: string,
  star: number
}

const CardReview: React.FC<Props> = ({ description, username, star }) => {
  const totalStarts = 5;
  return (
    <div className='flex flex-col border-2 border-[#FB437A] p-[20px] gap-2 rounded-2xl bg-[#EEEEEE]'>
      <p>{description}</p>
      <p className='font-bold'>{username}</p>
      <div className='flex'>
        {Array.from({length: totalStarts}, (_, index) =>(
          <Star 
            key={index}
            fill={index < star ? '#FB437A' : 'none'}
            color='#FB437A'
          />
        ))}
      </div>
    </div>
  )
}

export default CardReview