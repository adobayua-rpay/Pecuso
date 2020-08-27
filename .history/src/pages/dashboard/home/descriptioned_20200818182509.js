/* eslint-disable */

import axios from 'axios'


import React from 'react';
export default {
    // getData: () =>

    componentDidMount() {
        const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => console.log('This is your data', data));
      }
 // }
    
    // axios({
    //     'method':'GET',
    //     'url':'https://example.com/query',
    //     'headers': {
    //         'content-type':'application/octet-stream',
    //         'x-rapidapi-host':'example.com',
    //         'x-rapidapi-key': process.env.RAPIDAPI_KEY
    //     },
    //     'params': {
    //         'search':'parameter',
    //     },
    // })
}