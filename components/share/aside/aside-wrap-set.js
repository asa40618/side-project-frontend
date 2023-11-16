//https://side-project-frontend-iota.vercel.app/test-module/aside
import React from 'react'

export default function AsideWrapSet({ children }) {
  return (
    <>
      <div className="col-sm-3  bg-success d-none d-sm-block">
        <div className="ps-2 mt-4 mb-4">{children}</div>
      </div>
    </>
  )
}
