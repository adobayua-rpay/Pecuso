import React from 'react'
import style from './style.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerInner}>
        <a
          href="https://sellpixels.com"
          target="_blank"
          rel="noopener noreferrer"
          className={style.logo}
        >
          ADOBA YUA
          <span />
        </a>
        <br />
        <p className="mb-0">
          Copyright © 2020 AdoTon Technologies |{' '}
          <a href="https://www.mediatec.org/privacy" target="_blank" rel="noopener noreferrer">
            Adoton Technologies
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
