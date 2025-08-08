import { React, useState } from "react"
import { List, Modal, TitleBar } from "@react95/core"
import { RecycleFull, Computer, Shell325, FileText, User5, Wmsui323926 } from "@react95/icons";

function DocumentsModal() {
    const [isVisible, setVisible] = useState(true);
    const [activeIcon, setActiveIcon] = useState(false);
    const handleHide = () => {
        setVisible(false);
    };
    const handleToggleActiveIcon = (iconID) => {
        setActiveIcon((prev => (prev === iconID ? null : iconID)));
    }

    return (
        isVisible && <Modal 
        icon={<Shell325 variant='16x16_4' />}
        title='Documents'
        dragOptions={{defaultPosition: {x: 500,y: 100}}}
        titleBarOptions={[<TitleBar.Minimize key='minimize' />, <TitleBar.Close key='close' onClick={handleHide} />]}
        menu={[{
            name: 'File',
            list: <List width="200px">
                        <List.Item onClick={handleHide}>Exit</List.Item>
                      </List>
          }, {
            name: 'Edit',
            list: <List width="200px">
                      </List>
          }, {
            name: 'Help',
            list: <List width="200px">
                      </List>
          }
          ]}>

        <Modal.Content width="500px" height="200px" boxShadow="$in" bgColor="white">

        <div className='documents-icons'>
        <div className={activeIcon === 0 ? 'active-icon' : 'inactive-icon'}
            onClick={() => handleToggleActiveIcon(0)}
            >
                <User5 variant="32x32_4"/>
                <p>About.txt</p>
            </div>
            <div className={activeIcon === 1 ? 'active-icon' : 'inactive-icon'}
            onClick={() => handleToggleActiveIcon(1)}
            >
                <FileText variant="32x32_4"/>
                <p>CV.txt</p>
            </div>
            <div className={activeIcon === 2 ? 'active-icon' : 'inactive-icon'}
            onClick={() => handleToggleActiveIcon(2)}
            >
                <Wmsui323926 variant="32x32_4"/>
                <p>Contact.txt</p>
            </div>

        </div>
        </Modal.Content>
        </Modal>
    )
}

export default DocumentsModal;