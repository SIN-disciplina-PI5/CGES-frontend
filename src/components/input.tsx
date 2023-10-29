

interface InputTypes {
    title: string,
    children: React.ReactNode
}

const Input = ({ title, children }: InputTypes) => {
    return (
        <div className="w-1/2 h-14 flex items-center border-2 border-red-fg">
            <div className="w-1/6 h-full flex items-center justify-center border-r-2 border-red-fg  bg-beige-fg">
                {children}
            </div>
            <input className="w-5/6 h-full content-center text-center pr-6" placeholder={title} />
        </div>
    )
}

export default Input