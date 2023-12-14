import Link from "next/link"

interface ButtonTypes {
    title: string
    width: string
    height: string
    press: VoidFunction
}

const Button = ({ title, width, height, press }: ButtonTypes) => {
    return (
        <button className={`${width} ${height} bg-red-fg rounded-xl`} onClick={press}>
            <p className='text-lg text-white font-bold'>{title}</p>
        </button>
    )
}

export default Button