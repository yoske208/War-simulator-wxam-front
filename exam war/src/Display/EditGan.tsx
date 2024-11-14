import React, { useContext, useState } from 'react'
import { OrganizationContext } from '../Provider/OrganozationProvider'

const EditGan = () => {
    const {organization,setOrganization} = useContext(OrganizationContext)
    const [amount ,setamount] = useState(0)
    const [budget,setbudget] = useState(0)
  return (
    <div>EditGan</div>
  )
}

export default EditGan