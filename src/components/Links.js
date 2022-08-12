import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    { url: '/search', text: 'All' },
    { url: '/image', text: 'Images' },
    { url: '/news', text: 'News' },
    { url: '/videos', text: 'Videos' }
];

function Links() {
    return (
        <div className="flex gap-2 ml-10 ">
            {links.map(({ url, text }) => (
                <NavLink key={url} to={url} className="m-2 justify-center " activeclassname="text-blue-700 border-b-2    dark:text-blue-300 border-blue-700 pb-2">{text}</NavLink>
            ))}
        </div>
    )
}

export default Links