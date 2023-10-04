import React from 'react'
import styles from '../InputFields/inputFields.module.css'

export default function InputFields(props) {
  return (
    <div>
        <div className={styles.container}>
            {props.label && <label>{props.label}</label>}

            {<input type={props.label} {...props}/>}

        </div>
      
    </div>
  )
}
