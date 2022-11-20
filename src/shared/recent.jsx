import {AiOutlineFileMarkdown,AiFillFilePdf,AiFillFileExcel} from 'react-icons/ai'
import {CgFigma} from 'react-icons/cg'
import {HiDocumentCheck,HiSpeakerWave} from 'react-icons/hi2'
import {BsPlayBtnFill} from 'react-icons/bs';
export const order =[

    {id: 0,
    name: 'Xd File',
    icon: <AiOutlineFileMarkdown/>,
    date: '01-03-2021',
    size: '3.5mb',
    bgcolor: '#f440c6'
    },
    {id: 1,
        name: 'Figma File',
        icon: <CgFigma/>,
        date: '27-02-2021',
        size: '19mb',
        bgcolor: '#f7488b'
        },
        {id: 2,
            name: 'Documents',
            icon: <HiDocumentCheck/>,
            date: '23-02-2021',
            size: '15mb',
            bgcolor: '#fd403d'
            },
            {id: 3,
                name: 'Sound File',
                icon: <HiSpeakerWave/>,
                date: '21-02-2021',
                size: '40mb',
                bgcolor: '#f87a46'
                },
                {id: 4,
                    name: 'Media',
                    icon: <BsPlayBtnFill/>,
                    date: '23-02-2021',
                    size: '15mb',
                    bgcolor: '#eabc44'
                    },
                    {id: 5,
                        name: 'Sales PDF',
                        icon: <AiFillFilePdf/>,
                        date: '21-02-2021',
                        size: '9mb',
                        bgcolor: '#0eeeaa'
                        },
                        {id: 6,
                            name: 'Excel File',
                            icon: <BsPlayBtnFill/>,
                            date: '23-02-2021',
                            size: '11mb',
                            bgcolor: '#29afdb'
                            }
]