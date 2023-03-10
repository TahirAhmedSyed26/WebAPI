import React, { useState , useEffect } from 'react'

const useForm = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
          ...values,
          ...fieldValue
      })
      validate(fieldValue)
  }

  const resetForm = () => {
    setValues({
        ...initialFieldValues
    })
    setErrors({})
    setCurrentId(0)
}


  return (
    <div>
      values,
      setValues,
      handleInputChange
    </div>
  )
}

export default useForm;