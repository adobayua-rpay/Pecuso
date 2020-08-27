/* eslint-disable */

import axios from 'axios'


import React from 'react';
export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://cloud.iexapis.com/stable/stock/aapl/company?token=pk_6c6a49f506644c7990b08fee0710a634',
        // 'headers': {
        //     'content-type':'application/octet-stream',
        //     'x-rapidapi-host':'example.com',
        //     'x-rapidapi-key': process.env.RAPIDAPI_KEY
        // },
        // 'params': {
        //     'search':'parameter',
        // },
    })
}