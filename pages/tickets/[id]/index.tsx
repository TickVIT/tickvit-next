import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

// @desc Single Ticket Page
// @route /tickets/{id}
const ViewTicket: NextPage = () => {
    const router = useRouter()
    const { id } = router.query
    return <div>Ticket id: {id}</div>
}

export default ViewTicket
