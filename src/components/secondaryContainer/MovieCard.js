import React from 'react';
import { IMAGE_CDN } from '../../utils/constant';

const movieCard = ({ posterPath }) => {
  return (
    <div className='w-44 pr-2'>
      <img
        alt='Movie Card'
        src={IMAGE_CDN + posterPath} />
    </div>
  )
}

export default movieCard