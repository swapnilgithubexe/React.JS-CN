import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isLoggedIn, children }) => {
  return (
    isLoggedIn ? children : <Navigate to="/" />
  )
}

export default ProtectedRoute