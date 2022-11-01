import React from 'react'
import {SocialMedia,NavigationDots} from '../components'
const AppWrap = (Component,idName,className) => function HOC() {
  return (
    <div id={idName} className={`app__container ${className}`}>
      <SocialMedia/>
      <div className='app__wrapper app__flex'>
        <Component/>
        <div className="copyright">
          <p className="p-text">@2020 MICHAEL</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots/>
    </div>
  )
}

export default AppWrap