import React from 'react'
import Link from 'next/link';


const sidebar_elements = [
  {
    src: '/path-12276.svg',  // Home
    className: 'cursor-pointer w-[41.44px] h-[41.44px]',
    href : '/'
  },
  {
    src: '/group-17434.svg', // Add new
    className: 'w-[45px] h-[45px]  cursor-pointer',
    href : '/addnew'
  },
  {
    src: '/group-17799.svg', // history
    className: 'w-[45.91px] h-[45.91px] cursor-pointer',
    href : '/history'
  },
  {
    src: '/group-17797.svg', // starred
    className: 'w-[49.88px] h-[47.58px] cursor-pointer',
    href : '/starred'
  },
  {
    src: '/path-12188.svg', // mentions
    className: 'max-h-full w-[33.69px] cursor-pointer',
    href : '/mentions'
  },
  {
    src: '/group-17827.svg', //drafts
    className: ' w-[46.92px] h-[43.17px] cursor-pointer',
    href : '/drafts'
  },
  {
    src: '/path-12204.svg', //notifications
    className: 'w-fit h-fit cursor-pointer',
    href : '/notifications'
  },
  {
    src: '/group-17793.svg', //settings
    className: 'w-[45.5px] h-[45.5px] cursor-pointer',
    href : '/settings'
  }
]

const SideBar = () => {
  return (
    <aside className=' bg-darkslateblue-200'>
      <div className="scale-90 flex flex-col gap-7 justify-center items-center overflow-auto scrollbar-none w-[60px] h-[88vh]" >
        {
          sidebar_elements.map((element) => {
            return (
              <Link className='opacity-50 hover:opacity-100 transition' href={element.href} key={element.src}>
                <img
                  className={element.className}
                  alt=""
                  src={element.src}
                />
              </Link>
            )
          })
        }
      </div>
    </aside>
  )
}


export default SideBar