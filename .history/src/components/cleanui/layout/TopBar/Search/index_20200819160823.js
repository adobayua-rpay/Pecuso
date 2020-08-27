/* eslint-disable */

import React, { useState, useEffect, Redirect } from 'react'
import { useHistory } from 'react-router-dom';
var request = require('request');
var axios = require('axios');

import { injectIntl } from 'react-intl'
import { SearchOutlined } from '@ant-design/icons'
import { Input, Checkbox,  } from 'antd'
import style from './style.module.scss'
import Page from '/Users/adobayua/Downloads/themeforest-pvJvUnAs-clean-ui-react-admin-template/cleanui-admin-template-react-cra/src/pages/dashboard/alpha/index.js'
import { symbol } from 'd3-shape';

let searchInput = null

const {Search} = Input;

const {history} = useHistory


// const onSearch = e => {
//    //<Redirect to="/Users/adobayua/Downloads/themeforest-pvJvUnAs-clean-ui-react-admin-template/cleanui-admin-template-react-cra/src/pages/dashboard/alpha/index.js" />
//    history.push("pages/dashboard/home");
//   console.log(e)

//    }

//    const onBearch = e => {
//     //<Redirect to="/Users/adobayua/Downloads/themeforest-pvJvUnAs-clean-ui-react-admin-template/cleanui-admin-template-react-cra/src/pages/dashboard/alpha/index.js" />
//     history.push("pages/dashboard/home");
//    console.log("mule"+e)
 
//     }

//    const onWait = e => {
//      console.log("Yeah yeah yeah we paid")
//    }

const OSearch = ({ intl: { formatMessage } }) => {

  const history = useHistory();


   const handleClick = e => {
    localStorage.setItem('stocksearch', e);

    var options = {
      'method': 'GET',
      'Access-Control-Allow-Origin': 'https://localhost:3000',
      'url': 'https://ticker-2e1ica8b9.now.sh//keyword/'+e,
      'headers': {
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(error)
      console.log(response.body);
      localStorage.setItem('stockname', response.body.symbol);
      console.log('symbol is' + response.body.symbol)
    });
    


     history.push("/dashboard/home");



    console.log(e)
  };

  const [showSearch, setShowSearch] = useState(false)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  const showLiveSearch = () => {
    setShowSearch(true)
    setTimeout(() => {
      searchInput.focus()
    }, 100)
  }

  const changeSearchText = e => {
    setSearchText(e.target.value)
  }

  const hideLiveSearch = () => {
    searchInput.blur()
    setShowSearch('')
    setSearchText('')
  }

  const handleKeyDown = event => {
    if (showSearch) {
      const key = event.keyCode.toString()
      if (key === '27') {
        hideLiveSearch()
      }
    }
  }

  const handleNode = node => {
    searchInput = node
  }

  const onChange = e => {
 console.log(e)


  }


  return (
    <div className="d-inline-block mr-4">
      (<Search 
      placeholder="Find Stock" 
      allowClear  
      onChange={onChange}
      onSearch={handleClick}
        />

       <Input
        className={style.extInput}
        placeholder={formatMessage({ id: 'topBar.typeToSearch' })}
        prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,0)' }} />}
        style={{ width: 0}}
        onFocus={showLiveSearch}
      />
      {/*<div
        className={`${
          showSearch ? `${style.livesearch} ${style.livesearchVisible}` : style.livesearch
        }`}
        id="livesearch"
      >
        <button className={style.close} type="button" onClick={hideLiveSearch}>
          <i className="icmn-cross" />
        </button>
        <div className="container-fluid">
          <div className={style.wrapper}>
            <input
              type="search"
              className={style.searchInput}
              value={searchText}
              onChange={changeSearchText}
              id="livesearchInput"
              placeholder={formatMessage({ id: 'topBar.typeToSearch' })}
              ref={handleNode}
            />
            <ul className={style.options}>
              <li className={style.option}>
                <Checkbox checked>Search within app</Checkbox>
              </li>
              <li className={style.option}>Press enter to search</li>
            </ul>
            {!searchText && (
              <div className={style.results}>
                <div className={style.resultsTitle}>
                  <span>No Results Found</span>
                </div>
              </div>
            )}
            {searchText && (
              <div className={style.results}>
                <div className={style.resultsTitle}>
                  <span>Pages Search Results</span>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className={style.resultContent}>
                      <div
                        className={style.resultThumb}
                        style={{ backgroundImage: 'url(resources/images/content/photos/1.jpeg)' }}
                      >
                        #1
                      </div>
                      <div className={style.result}>
                        <div className={style.resultText}> Samsung Galaxy A50 4GB/64GB</div>
                        <div className={style.resultSource}>In some partition</div>
                      </div>
                    </div>
                    <div className={style.resultContent}>
                      <div
                        className={style.resultThumb}
                        style={{ backgroundImage: 'url(resources/images/content/photos/2.jpeg)' }}
                      >
                        KF
                      </div>
                      <div className={style.result}>
                        <div className={style.resultText}>Apple iPhone 11 64GB</div>
                        <div className={style.resultSource}>In some partition</div>
                      </div>
                    </div>
                    <div className={style.resultContent}>
                      <div
                        className={style.resultThumb}
                        style={{ backgroundImage: 'url(resources/images/content/photos/3.jpeg)' }}
                      >
                        GF
                      </div>
                      <div className={style.result}>
                        <div className={style.resultText}>
                          Samsung Galaxy A51 SM-A515F/DS 4GB/64GB
                        </div>
                        <div className={style.resultSource}>In some partition</div>
                      </div>
                    </div>
                    <div className={style.resultContent}>
                      <div
                        className={style.resultThumb}
                        style={{ backgroundImage: 'url(resources/images/content/photos/4.jpeg)' }}
                      >
                        QT
                      </div>
                      <div className={style.result}>
                        <div className={style.resultText}>Xiaomi Redmi 8 4GB/64GB</div>
                        <div className={style.resultSource}>In some partition</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className={style.resultContent}>
                      <div className={style.resultThumb}>01</div>
                      <div className={style.result}>
                        <div className={style.resultText}>White Case</div>
                        <div className={style.resultSource}>In some partition</div>
                      </div>
                    </div>
                    <div className={style.resultContent}>
                      <div className={style.resultThumb}>02</div>
                      <div className={style.result}>
                        <div className={style.resultText}>Blue Case</div>
                        <div className={style.resultSource}>In some partition</div>
                      </div>
                    </div>
                    <div className={style.resultContent}>
                      <div className={style.resultThumb}>03</div>
                      <div className={style.result}>
                        <div className={style.resultText}>Green Case</div>
                        <div className={style.resultSource}>In some partition</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default injectIntl(OSearch)
