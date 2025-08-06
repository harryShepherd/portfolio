import { React, useState } from "react";
import { Alert, TitleBar } from "@react95/core";

function Popup() {
    const [isVisible, setVisible] = useState(true);

    const handleHide = () => {
        setVisible(false);
    };

    return (
        isVisible && <Alert 
        flexDirection='row-reverse'
        title='WIP'
        type='error'
        message='This website is currently work in progress.'
        titleBarOptions={<TitleBar.Close key='close' onClick={handleHide}/>}
        buttons={[{
            value: 'OK',
            onClick: handleHide
        }]}
        />
    );
}

export default Popup;