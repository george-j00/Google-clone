import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Results from './Results'

export default function Routess() {

  return (
    <div>
      <Routes>

        <Route path="/" element={<Navigate replace to="/search" />} />

        {["/search", "/news", "/image", "/videos"].map(path =>
          <Route key="Results" path={path} element={<Results />} />
        )}

      </Routes>

    </div>
  )
}
