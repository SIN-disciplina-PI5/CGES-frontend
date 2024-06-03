import Link from "next/link"


interface ButtonTypes {
    title: string
    width: string
    height: string
    press?: VoidFunction
    /* nav: string */
}

const Button = ({ title, width, height, press /* nav */ }: ButtonTypes) => {
    return (
        <button className={`${width} ${height} bg-red-fg rounded-xl`} onClick={press}>
            {/* <Link href={nav}> */}
                <p className='text-lg text-white font-bold'>{title}</p>
            {/* </Link> */}
            
        </button>
    )
}

export default Button