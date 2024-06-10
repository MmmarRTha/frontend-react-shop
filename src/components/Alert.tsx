import { PropsWithChildren } from 'react'

export default function Alert({children} : PropsWithChildren) {
  return (
        <div className='relative p-2 my-2 text-sm font-bold leading-normal text-center text-red-700 bg-red-200 rounded-lg'>
            {children}
        </div>
    )
}
