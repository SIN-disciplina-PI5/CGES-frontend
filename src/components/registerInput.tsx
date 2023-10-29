interface InputProps {
    placeholder: string
    width?: string 
}

const RegisterInput = ({ placeholder, width }: InputProps) => {
    return (
        <div className={width ? width : 'w-3/5'}>
            <p>{placeholder}</p>
            <input className="w-full h-14 border border-red-fg"/>
        </div>
    )
}

export default RegisterInput