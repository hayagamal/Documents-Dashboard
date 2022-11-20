import {HiOutlineDocument} from 'react-icons/hi'
import {AiOutlineDropbox} from 'react-icons/ai'
import{ImGoogleDrive,ImOnedrive} from 'react-icons/im'
export const files =[

    {id: 0,
    name: 'Documents',
    total: '1,328 Files',
    GB: '1.3GB',
    icon: <HiOutlineDocument/>,
    color: '#2598fe',
    bgcolor: '#def3fd',
    weight: 60
    },
    {id: 1,
        name: 'Google Drive',
        total: '2,329 Files',
        GB: '2.9GB',
        icon: <ImGoogleDrive/>,
        color: '#fea213',
        bgcolor: '#fbeddc',
        weight: 30
        },
        {id: 2,
            name: 'OneDrive',
            total: '1,916 Files',
            GB: '1.7GB',
            icon: <ImOnedrive/>,
            color: '#223e74',
            bgcolor: '#e0ecf9',
            weight: 80
            },
            {id: 3,
                name: 'Dropbox',
                total: '328 Files',
                GB: '1.1GB',
                icon: <AiOutlineDropbox/>,
                color: '#3a84ac',
                bgcolor: '#def3fd',
                weight: 50
                }

]