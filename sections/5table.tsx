"use client"

import React from 'react'
import style from "@/styles/pages/5table.module.css"
import Table from "@/components/tableCard"
const fiveTable = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <Table title='Frontend' description='HTML,CSS,JavaScript, React, Angular' />
                <Table title='Backend' description='SQL, MongoDB, Node.Js, PHP, .Net, Co' />
                <Table title='Devops' description='Docker, Jenkins, Kubernets' />
                <Table title='Mobile' description='Android, Kotlin, iOS' />
                <Table title='Desktop' description='C++, C#' />
            </div>
        </div>
    )
}

export default fiveTable