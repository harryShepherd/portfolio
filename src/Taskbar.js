import React from 'react'
import { TaskBar, List } from '@react95/core'
import styled from 'styled-components';
import { FolderFile, WindowsExplorer } from '@react95/icons';

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`

function Taskbar() {
    console.log("Loading taskbar");
    return(
        <TaskBar
            list={
                <List>
                    <List.Item className="pointer" icon={<WindowsExplorer variant='32x32_4'/>}>
                        <Link href={'https://react95.io/#g'} target="_blank">Built with React95</Link>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="pointer" icon={<FolderFile variant='32x32_4'/>}>
                        <Link href={'https://github.com/harryShepherd/portfolio'} target="_blank">Repo</Link>
                    </List.Item>
                </List>
            }
        />
    );
}

export default Taskbar;