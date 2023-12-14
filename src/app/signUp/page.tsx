"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import SignBanner from '@/components/signBanner'
import RegisterInput from '@/components/registerInput'
import Button from '@/components/button'
import { handleSignUp } from '@/services/auth'
import { ISignUp } from '@/interfaces'


const SignUp = () => {

    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ra, setRa] = useState<number>(0)
    const [course, setCourse] = useState('')

    const signUp = async () => {

        const body: ISignUp = {
            name: name,
            email: email,
            password: password,
            userType: "estudante",
            ra: ra,
            course: course
        }

        try {
            const response = await handleSignUp(body);
            if (response.status === 200) {
                router.push('/signIn')
            } else {
                alert('Cadastro falho com sucesso!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="h-screen flex justify-center">

            <SignBanner />

            <div className="w-2/3 flex flex-col items-center justify-center bg-grey-fg">
                <Image src={'/logo.png'} alt="test" width={300} height={400} />

                <div className="w-4/5 flex flex-col items-center justify-center gap-4 my-6">
                    <RegisterInput placeholder='* Informe seu Nome' onChange={setName} />

                    <RegisterInput placeholder='* Informe seu Registro Acadêmico (RA)' onChange={setRa} />

                    <RegisterInput placeholder='* Selecione seu curso' onChange={setCourse} />

                    <div className='w-3/5 flex justify-between'>
                        <RegisterInput placeholder='* Email' width='w-2/5' onChange={setEmail} />

                        <RegisterInput placeholder='* Confirme seu Email' width='w-2/5' onChange={setEmail} />
                    </div>

                    <RegisterInput placeholder='* Informe sua senha' onChange={setPassword} />

                    <RegisterInput placeholder='* Confirme sua senha' onChange={setPassword} />

                    <Button title='ENTRAR' width='w-1/6' height='h-12' press={signUp} />
                </div>

                <span className="text-red-fg">@2023 - Todos os direitos reservados.</span>
            </div>
        </main>
    )
}

export default SignUp