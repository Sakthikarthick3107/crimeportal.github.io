
import React from 'react'
import CrimeForm from '../components/CrimeForm'
import Header from '../components/Header'
import PersonalDetails from '../components/PersonalDetails'

function ComplaintPage() {
  return (
    <div>
        <Header/>
        <div style={{display:'grid',gridTemplateColumns:'2fr 2fr'}}>
          <div>
          <PersonalDetails/>
          </div>
          <div>
          <CrimeForm/>
          </div>
        </div>
        
    </div>
  )
}

export default ComplaintPage