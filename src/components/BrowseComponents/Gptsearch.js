import React from 'react';
import GptMovieSuggestion from '../gpt/GptMovieSuggestion';
import GptSearchBar from '../gpt/GptSearchBar';
import { NETFLIX_LOGO } from '../../utils/constant';

const Gptsearch = () => {
    return (
        <div>
            <div className='absolute -z-10' >
                <img
                    src={NETFLIX_LOGO}
                    alt="logo"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>


    )
}

export default Gptsearch