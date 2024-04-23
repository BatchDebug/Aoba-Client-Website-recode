import Image from 'next/image'
import Link from 'next/link'

export const TitleBar = () => {
    return (
        <div className="z-50 sticky top-0 bg-zinc-800 border-zinc-500 border-1 border-b">
            <div className="flex items-center justify-between w-full h-16 gap-0 sm:gap-3">
                <Link className='h-full m-2 hover:bg-purple-300 basis-50px' href="/">
                    <Image src="/aoba.png" width={50} height={50} alt="Aoba Logo"/>
                </Link>
                
                <div className='flex grow shrink justify-center h-full'>
                    <Link className='p-5 hover:bg-purple-300' href="/download/">Download</Link>
                    <Link className='p-5 hover:bg-purple-300' href="/wiki/">Wiki</Link>
                    <Link className='p-5 hover:bg-purple-300' href="/contact/">Contact</Link>
                    <Link className='p-5 hover:bg-purple-300' href="/">Donate</Link>
                </div>

                <a className='h-full m-2 basis-50px hover:bg-purple-300' href="https://discord.gg/HyZ3uGrwgs">
                    <Image src="/discord.svg" width={75} height={75} alt="Aoba Fan Club (Unofficial)"/>
                </a>
                <a className='h-full m-2 basis-50px hover:bg-purple-300' href="https://github.com/coltonk9043/Aoba-MC-Hacked-Client">
                    <Image src="/github.svg" width={35} height={35} alt="GitHub Logo"/>
                </a>
            </div>
        </div>
    )
}