import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 3000)
  }, [navigate])
  return (
    <>
      <h2>Oops! Something went wrong.</h2>

    </>
  )
}

export default ErrorPage