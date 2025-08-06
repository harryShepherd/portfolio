import React from 'react';
import { RecycleFull } from '@react95/icons';

function Desktop() {
    return (
        <div className='desktop-icons'>
            <div className='inactive-icon'>
                <RecycleFull variant="32x32_4"/>
                <p>Recycle Bin</p>
            </div>
        </div>
    );
}

export default Desktop;