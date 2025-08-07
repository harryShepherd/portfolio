import { React, useState } from "react"
import { List, Modal, TitleBar } from "@react95/core"
import { Computer } from "@react95/icons";

function Popup() {
    const [isVisible, setVisible] = useState(true);

    const handleHide = () => {
        setVisible(false);
    };

    return (
        isVisible && <Modal 
        icon={<Computer variant='16x16_4' />}
        title='Work in progress'
        dragOptions={{defaultPosition: {x: 500,y: 100}}}
        titleBarOptions={<TitleBar.Close key='close' onClick={handleHide} />}
        menu={[{
            name: 'File',
            list: <List width="200px">
                        <List.Item onClick={handleHide}>Exit</List.Item>
                      </List>
          }]}>
        <Modal.Content width="300px" height="100px" boxShadow="$in" bgColor="white">
            This website is work in progress.
        </Modal.Content>
        </Modal>
    )
}

export default Popup;