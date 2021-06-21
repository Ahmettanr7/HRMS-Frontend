import React from 'react'

export default function Footer() {
    return (
            <div className="ui inverted vertical footer segment mt1bem">
    <div className="ui container">
      <div className="ui stackable inverted divided equal height stackable grid">
        <div className="three wide column">
          <h4 className="ui inverted header">About</h4>
          <div className="ui inverted link list">
            <a  className="item">Sitemap</a>
            <a  className="item">Contact Us</a>
            <a  className="item">Religious Ceremoniess</a>
            <a  className="item">Gazebo Plans</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header">Services</h4>
          <div className="ui inverted link list">
            <a  className="item">Banana Pre-Order</a>
            <a  className="item">DNA FAQ</a>
            <a  className="item">How To Access</a>
            <a  className="item">Favorite X-Men</a>
          </div>
        </div>
        <div className="seven wide column">
          <h4 className="ui inverted header">HRMS.job</h4>
          <p>Copyright © 2021 HRMS.job | Tüm Hakları Saklıdır.</p>
          <p>Engin Demiroğ CANDIR</p>
        </div>
      </div>
    </div>
  </div>
    )
}
