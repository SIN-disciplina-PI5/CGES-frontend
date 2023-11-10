import Table from '@/components/Dashboard'
import HeaderComponent from '@/components/header'
import React from 'react'
import data from '../../utils/fakeData'
import Title from '@/components/pageTitle'

type Props = {}

const RegisteredStudends = (props: Props) => {
    return (
        <main>
            <HeaderComponent/>
            <Title text= "Estágios"></Title>
            <Table data={data}></Table>
        </main>
    )
}

export default RegisteredStudends