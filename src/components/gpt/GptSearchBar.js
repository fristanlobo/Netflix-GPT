import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../../utils/languageConstant';

const GptSearchBar = () => {
    const selectedLanguage= useSelector(store=>store.config.lang)
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input
                    className='p-4 m-4 col-span-9'
                    placeholder={lang[selectedLanguage].gptSeachPlaceHolder}
                    type="text"
                />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
                    {lang[selectedLanguage].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar