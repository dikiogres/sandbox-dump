import React from 'react';
import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';

import NextImage from '@/components/NextImage';

import PosterImage from '~/images/card-overlay/poster.jpg';

const CardOverlay = () => {
  return (
    <div className='card shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl'>
      <div className='poster'>
        <NextImage src={PosterImage} alt='Poster' className='poster-img' />
      </div>
      <div className='details'>
        <h1 className='title'>Avatar</h1>
        <h3 className='subtitle'>Directed by James Cameron</h3>
        <div className='rating flex text-2xl text-white'>
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStarHalf />
          <MdStarOutline />
        </div>
        <div className='tags'>
          <span>Sci-fi </span>
          <span>Action</span>
        </div>
        <div className='info'>
          <p className='text-justify '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            vero tempora culpa incidunt, adipisci nesciunt impedit eligendi
            odio.
          </p>
        </div>
        <div className='cast'>
          <h4>Cast</h4>
          <ul>
            <li>
              <div className='flex items-center justify-center pt-1 text-white'>
                1
              </div>
            </li>
            <li>
              <div className='flex items-center justify-center pt-1 text-white'>
                2
              </div>
            </li>
            <li>
              <div className='flex items-center justify-center pt-1 text-white'>
                3
              </div>
            </li>
            <li>
              <div className='flex items-center justify-center pt-1 text-white'>
                4
              </div>
            </li>
            <li>
              <div className='flex items-center justify-center pt-1 text-white'>
                5
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardOverlay;
