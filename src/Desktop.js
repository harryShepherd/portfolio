import React, { useState } from 'react';
import { RecycleFull, Shell325 } from '@react95/icons';

function Desktop() {
    const [activeIcon, setActiveIcon] = useState(false);
    const handleToggleActiveIcon = (iconID) => {
        setActiveIcon((prev => (prev === iconID ? null : iconID)));
    }

    return (
        <div className='desktop-icons'>
            <div className={activeIcon === 0 ? 'active-icon' : 'inactive-icon'}
            onClick={() => handleToggleActiveIcon(0)}
            >
                <RecycleFull variant="32x32_4"/>
                <p>Recycle Bin</p>
            </div>
            <div className={activeIcon === 1 ? 'active-icon' : 'inactive-icon'}
            onClick={() => handleToggleActiveIcon(1)}
            >
                <Shell325 variant="32x32_4"/>
                <p>Documents</p>
            </div>

        </div>
    );
}

export default Desktop;