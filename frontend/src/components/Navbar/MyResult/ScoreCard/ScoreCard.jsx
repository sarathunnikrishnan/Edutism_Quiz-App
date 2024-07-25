import React, { useContext } from 'react'
import './ScoreCard.css'
import { Container } from 'react-bootstrap'
import { UserDetails } from '../../../UserDetails/UserDetails'

const ScoreCard = () => {

    const {firstName, lastName, formattedDate, phoneNumber, state} = useContext(UserDetails)
    
  return (
    <div className='score-card'>
        <h1>SCORE CARD</h1>
        <br/>
        <div className='score-card-table'>
            {   <>
                <div className='score-card-table-student'>
                    <h6>Name : {firstName} {lastName}</h6>
                    <h6>DOB : {formattedDate}</h6>
                    <h6>Phone Number : {phoneNumber}</h6>
                    <h6>State : {state}</h6>

                </div >
                <div className='score-card-table mt-4 mb-4'>
                    <Container>
                 <table className='col-md-12 col-12'>
                 <thead>
                   <tr>
                     <th>No</th>
                     <th> TEST</th>
                     <th>MARK</th>
                     <th>PERCENTAGE</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>1</td>
                     <td>FREE IQ TEST</td>
                     <td>10</td>
                     <td>100%</td>
                   </tr>
                   <tr>
                     <td>2</td>
                     <td>KIDS IQ TEST</td>
                     <td>15</td>
                     <td>100%</td>
                   </tr>
                   <tr>
                     <td>3</td>
                     <td>SPATIAL IQ TEST</td>
                     <td>15</td>
                     <td>100%</td>
                   </tr>
                 </tbody>
               </table>
               </Container>
               </div>
               </>
            }
        </div>
    </div>
  )
}

export default ScoreCard