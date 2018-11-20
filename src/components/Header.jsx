import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from './ClickOutside';
import Languages from '../platform/services/languages';


const {
  language_label,
  home,
  portfolio
} = Languages.Translations;


class Header extends Component {

  state = {
    shown: true
  }

  changeLanguage = shortCode => {
    window.localStorage.setItem('language', shortCode);
    window.location.reload();
  }

  language = () => this.setState({ shown: !this.state.shown });

  closeLanguage = () => this.setState({ shown: true })

  render() {
    return (
      <div className='Header'>
        <div className='Center-block'>
          <Link to='/home'>{home} </Link>
          <Link to='/contact-us'>{portfolio} </Link>
          <Link to='/portfolio'>Order Website </Link>
          <Link to='/order-website'>Contact Us </Link>
          <Link to='/about-us'>About Us </Link>
          <div onClick={this.language} className='language-drop-down'>{language_label}
            <ClickOutside onClickOutside={this.closeLanguage}>
              <div className={`drop-down ${this.state.shown ? 'drop-down-hide' : ''}`}>
                <span onClick={() => this.changeLanguage('en')}>en</span>
                <span onClick={() => this.changeLanguage('hy')}>հայ</span>
                <span onClick={() => this.changeLanguage('ru')}>py</span>
              </div>
            </ClickOutside>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
