import { InputHTMLAttributes } from "react"

interface InputProps {
    placeholder: string
    width?: string,
    onChange?: any 
}

const RegisterInput = ({ placeholder, width, onChange }: InputProps) => {
    return (
        <div className={width ? width : 'w-3/5'}>
            <p>{placeholder}</p>
            <input className="w-full h-14 border border-red-fg" onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}

export default RegisterInput