import Image from "next/image";

export default function SignBanner() {
    return (
        <div className="w-1/3 flex items-center justify-center bg-red-fg">
            <Image src={'/banner.png'} alt="banner" width={400} height={400}/>
        </div>
    )
}