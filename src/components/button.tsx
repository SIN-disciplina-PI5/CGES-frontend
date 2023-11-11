import Link from "next/link"

interface ButtonTypes {
    title: string
    width: string
    height: string
    nav: string
}

const Button = ({ title, width, height, nav }: ButtonTypes) => {
    return (
        <button className={`${width} ${height} bg-red-fg rounded-xl`}>
            <Link href={nav}>
                <p className='text-lg text-white font-bold'>{title}</p>
            </Link>
        </button>
    )
}

export default Button