import {HiDocumentMinus} from 'react-icons/hi2'
import {BsFillPlayBtnFill} from 'react-icons/bs'
import {FcOpenedFolder} from 'react-icons/fc'
import {AiFillFileUnknown} from 'react-icons/ai'
export const storagedetails = [
    {id:0,
    name: 'Documents Files',
    total: '1,328 Files',
    storage: 1.3,
    icon: <HiDocumentMinus/>,
    color: '#2a97fe'
    },
    {id:1,
        name: 'Media Files',
        total: '1,328 Files',
        storage: 15.1,
        icon: <BsFillPlayBtnFill/>,
        color: '#37dff2'
        },
        {id:2,
            name: 'Other Files',
            total: '1,328 Files',
            storage: 12.7,
            icon: <FcOpenedFolder/>
            },
            {id:3,
                name: 'Unknown',
                total: '428 Files',
                storage: 1.3,
                icon: <AiFillFileUnknown/>,
                color: '#d11e1e'
                }

]