import React from 'react'
import Loader from  'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='justify-center items-center flex '>
            <Loader type='Puff' color='#00BFFF' height={550} width={80} />
        </div>
    )
}

export default Spinner
