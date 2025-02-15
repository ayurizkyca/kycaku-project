import React from 'react'

interface Props {
  image: string,
  description: string,
  title: string
}

const CardBenefit: React.FC<Props> = ({image, description, title}) => {
  return (
    <div className='flex items-center gap-2 py-1'>
      <img src={image} alt="img-card" />
      <div>
        <h2 className='font-bold text-[#5C5461]'>{title}</h2>
        <p className='text-[#9D9DBC]'>{description}</p>
      </div>
    </div>
  )
}

export default CardBenefit