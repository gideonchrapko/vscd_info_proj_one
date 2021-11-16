import React, { useEffect, useState } from 'react';
import sample from '../Assets/BG_Vid.mp4';

const Background = () => {
    return (
            <div>
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
    )
}

export default Background