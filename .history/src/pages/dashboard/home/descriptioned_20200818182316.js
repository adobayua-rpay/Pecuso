/* eslint-disable */

import axios from 'axios'


import React from 'react';
export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://example.com/query',
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        'params': {
            'search':'parameter',
        },
    })
}