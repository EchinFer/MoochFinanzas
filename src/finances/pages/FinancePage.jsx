import React from 'react'
import { MainGridContainer } from '../../components/UI/MainGridContainer'
import { ActionsBlock } from '../../home/layout/ActionsBlock'
import { ResumeBlock } from '../../home/layout/ResumeBlock'

export const FinancePage = () => {
    return (
        <>
            {/* BLOQUE DE RESUMEN */}
            <ResumeBlock />

            {/* BLOQUE DE ACCIONES */}
            <ActionsBlock />

        </>
    )
}
