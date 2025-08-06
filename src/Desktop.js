import React from 'react'
import styled from 'styled-components'
import { RecycleFull } from '@react95/icons';
import { Modal } from '@react95/core'

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