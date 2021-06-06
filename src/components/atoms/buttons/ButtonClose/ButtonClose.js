import React from 'react'


const ButtonClose = ({onClick}) => {


    return (

        <svg onClick={onClick} className="button_close"  width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 14.293L25.293 4L26 4.707L15.707 15L26 25.293L25.293 26L15 15.707L4.707 26L4 25.293L14.293 15L4 4.707L4.707 4L15 14.293Z" fill="#846A61" stroke="#846A61"/>
        </svg>
        
    )
  }
  
  export default ButtonClose


