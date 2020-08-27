/* eslint-disable */

import React, {Component} from "react";
import { Helmet } from "react-helmet";
import { Card, Button,Modal,InputNumber,Checkbox,Input } from "antd";
import Cars from "./card";
import Chart3002 from "components/kit/widgets/Charts/3002";
import Chart3003 from "components/kit/widgets/Charts/3003";
import Chart3005 from "components/kit/widgets/Charts/3005";
import firebase from 'firebase/app'
import 'firebase/firestore';
import DrawerForm from "components/kit/widgets/General/Note";
import Trigger from "components/kit/widgets/General/Trigger";
import { ExclamationCircleOutlined, UpCircleTwoTone } from "@ant-design/icons";
import Pod from './pod'
import Fit from './fit'
import Compare from './compare'


if (!firebase.apps.length) {
  firebase.initializeApp({});
}

const { TextArea } = Input;


let sam = ""
let stockID = ""

const DashboardAlpha = () => {
  let values = 0
let pricepredicted = 0

  const db = firebase.firestore();

  let uid = ""
  var user = firebase.auth().currentUser;

  if (user){
   uid = user.uid
  } else {
    console.log("No user")
  }



  // firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       console.log('user signed in')
  //     } else {
  //       console.log("Nope")
  //     }
  //   });

React.state = {
state:[
  {visible:false, balue: 'a', },  
  
]

}



function conChange(e) {
  console.log(`checked = ${e.target.checked}`);
}




function bonChange  ({ target: { balue } }) {
  this.setState({ balue });
};

function stock(value) {
  console.log('changed', value);
  values = value
}

function SharesonChange(value) {
  console.log('changed', value);
  values = value
console.log('values is'+ value)
}

function priceprediction(returned) {
  console.log('changed', returned);
  pricepredicted = returned
console.log('values is'+ returned)
}

function showBuy () {

  showModal = () => {
    this.setState({
      visible:true,
    });

    handleOk = e => {
      console.log(e);
      this.setState({
        visible:false
      });
    };

    

    handleCancel = e => {
      console.log(e);
      this.setState({
        visible:false,
      });
    }

  }
  

}
let noteID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); //Random ID of the transaction.
let note = ''

const onBange = e => {  
  console.log(e);
  localStorage.setItem('currentnote', e);
  note = e
};

let stocksymbol = localStorage.getItem('stockname');
let currentnote = localStorage.getItem('currentnote');


    function showConfirm() {



      showModal = () => {
        this.setState({
          visible:true,
        });
      }

      handleOk = e => {
        console.log(e);
        this.setState({
          visible:false
        });
      };

      handleCancel = e => {
        console.log(e);
        this.setState({
          visible:false,
        });
      }

        confirm({
          title: "Are you sure you want to purchase 25 shares of Apple??",
          icon: <ExclamationCircleOutlined />,
          content: "Apple Price : $428.21",
          onOk() {
            console.log("OK");
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      }

      // state = {
      //   modal1Visible:false, 
      //   modal2Visible:false,
      // };
let comparison = '';


      function compareStocks(e) {
        console.log(`checked = ${e.target.checked}`);
        comparison = e
       // localStorage.setItem('comparedStock', comparison)
      }

      const comparedInput = e => {
        console.log('closefriends')
        console.log(e);
      };
      function comparedValue(value) {
        console.log('compared', value);
      }

      const comparedStock = e => {
        console.log(e)
console.log('test' + e)
        comparison = e
        localStorage.setItem('comparedStock', comparison)
      }
  function showCompare(comparison) {
  // let stockprice = localStorage.getItem('stockprice')
  // let stockID = localStorage.getItem('stockID')
  

  confirm({
    title: "Compare" + " "+"$"+stocksymbol+" "+"vs"+" "+"Your Selection",
    icon: <ExclamationCircleOutlined />,
    content:<>
    <strong>{stocksymbol}</strong> vs <strong> <Input onChange={comparedValue} /></strong>
    {/* <InputNumber min={1} max={1000} defaultValue={1} onChange={SharesonChange} />
    <p></p>
    <Checkbox onChange={conChange}>Share notes on purchase? (Optional)</Checkbox>
    <p></p>
  <strong>Feeling dangerous? Leave a price prediction on your note :)</strong>
  <p>
    <InputNumber defaultValue="3346" onChange={priceprediction}/>
    </p>
  
  <TextArea placeholder="textarea with clear icon" allowClear onChange={onBange} /> */}

     </>,
    onOk() {
      localStorage.setItem('comparedstock', comparison);
      console.log("Compared Stock is" + " " + comparison)

    },
    onCancel() {
      console.log("Cancel");
    },
  });
}


            
      function showBuy() {
        let stockprice = localStorage.getItem('stockprice')
        let stockID = localStorage.getItem('stockID')
        

        confirm({
          title: "Purchase of" + " "+"$"+stocksymbol+" "+"Strike Price @"+" "+stockprice,
          icon: <ExclamationCircleOutlined />,
          content:<>
          <InputNumber min={1} max={1000} defaultValue={1} onChange={SharesonChange} />
          <p></p>
          <Checkbox onChange={conChange}>Share notes on purchase? (Optional)</Checkbox>
          <p></p>

          {/* <TextArea
          value={balue}
          onChange={this.bonChange}
          placeholder="Tell us something about this purchase. Ex + 'Heres why I am long Zoom'"
          autoSize={{ minRows: 3, maxRows: 5 }}
        /> */}
        {/* <InputNumber min={1} max={1000} defaultValue={1} onChange={SharesonChange} /> */}
        <strong>Feeling dangerous? Leave a price prediction on your note :)</strong>
        <p>
          <InputNumber defaultValue="3346" onChange={priceprediction}/>
          </p>
        
        <TextArea placeholder="textarea with clear icon" allowClear onChange={onBange} />
  
           </>
          // content: <InputNumber min={1} max={1000} defaultValue={1} onChange={function stock(value) {
            // content:<>
            // <InputNumber min={1} max={1000} defaultValue={1} onChange={SharesonChange} />
            // <InputNumber min={1} max={1000} defaultValue={1} onChange={SharesonChange} />
            // <>
            ,
            
         //   console.log('changed', value);
       //   }
        //  } />,
          onOk() {
            console.log("OK");

            var docRef = db.collection("portfoliosputas").doc(uid);

docRef.get().then(function(doc) {
    if (doc.exists) {
      console.log('exists!')
      let stocksymbol = ""
      stocksymbol = localStorage.getItem('stockname')

       const data = {
         objectExample: {
           symbol:stocksymbol,
           name:stockID,
           price:stockprice,
           shares:values
         }
       };
       
    //   const resolution =  db.collection('portfolio').doc(uid).set(data);
   // const resolution =  db.collection('portfolio').doc(uid)
   const resolution =  db.collection('portfoliosputas').doc(uid)

   const revolution =  db.collection('notes').doc(noteID)

   console.log('price predicted is' + pricepredicted)
   var revolutionSet = revolution.set({
   [noteID]: {
     description:stocksymbol,
     stock:stockID,
     note:currentnote,
    pricetarget:pricepredicted,
     shares:values,
     by:uid
   }
 }, { merge: true })
      //   console.log("Document data:", doc.data());

var setWithMerge = resolution.set({
  [stocksymbol]: {
    symbol:stocksymbol,
    name:stockID,
    price:stockprice,
    shares:values
  }
}, { merge: true })
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");

    }


}).catch(function(error) {
    console.log("Error getting document:", error);
});
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      }

      function testCompare() {
        confirm({
          title: "You currently do not own any Apple Stock.",
          icon: <ExclamationCircleOutlined />,
          content: "You currently do not own any Apple Stock. perhaps you want to consider shorting?",
          onOk() {
            console.log("OK");
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      }

      

      function showSell() {
        confirm({
          title: "You currently do not own any Apple Stock.",
          icon: <ExclamationCircleOutlined />,
          content: "You currently do not own any Apple Stock. perhaps you want to consider shorting?",
          onOk() {
            console.log("OK");
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      }

      function showFit() {
        confirm({
          title: "Here you can see how this stock fits in your portfolio",
          icon: <ExclamationCircleOutlined />,
          content: <Fit />,
          onOk() {
            console.log("OK");
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      }

      //  function setModal1Visible(modal1Visible) {
      //     this.setState({ modal1Visible });
      //   }


      //  function set2Modal1Visible(modal1Visible) {
      //   this.setState({ modal1Visible });
      // }

      const { confirm } = Modal
      const { sell } = Modal


      let source = "https://api.stockdio.com/visualization/financial/charts/v1/PricesChange?app-key=7A455EB1CB88414CB37D2A847CC2053D&symbol="+stocksymbol+"&palette=Financial-Light&showLogo=Title"


        return (
      <div>
      <Helmet title="Dashboard: Analytics" />
      <div className="cui__utils__heading">
        <strong>Welcome Dobez [Paper Trading Account]</strong>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="card" style={{ width: '100%' }}>
            {/* <Card
              title="$AAPL"
              extra={<a href="#">About</a>}
              style={{ width: '100%' }}
            >
              <p>APPLE</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card> */}
            <Cars style={{ width: '100%' }} />
          </div>
        </div>

        <div className="col-xl-2">
          <div className="card">
            <Button
              className="btn btn-success"
              style={{ width: "100%" }}
              onClick={showBuy}
            >
              Buy
            </Button>
          </div>
          <div className="card">
          <Button
              className="btn btn-danger"
              style={{ width: "100%" }}
              onClick={showSell}
            >
              Sell
            </Button>
          </div>
          <div className="row">
            <div className="col">
              <iframe
                is="x-frame-bypass"
                // src="https://api.stockdio.com/visualization/financial/charts/v1/PricesChange?app-key=7A455EB1CB88414CB37D2A847CC2053D&symbol=AAPL&palette=Financial-Light&showLogo=Title"
                src={source}
                title="viola"
                width="100%"
                position="absolute"
                height="1100"
                style={{
                  position: "relative",
                  left: 0,
                  top: 0,
                  width: "400%",
                  height: "250%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-2">
          <div className="card">
            <Button type="primary">Tools</Button>
          </div>
          <div className="card">
            <DrawerForm />
          </div>
        </div>

        <div className="col-xl-2">
          <div className="card">
            <Button type="primary">Short</Button>
          </div>
          <div className="card">
            <Button type="primary">Option</Button>
          </div>
        </div>

        <div className="col-xl-2">
        <div className="card">
            <Trigger />
          </div>
          <div className="card">
            <Button type="primary" onClick={showCompare}>Compare</Button>

          </div>
        </div>

        <div className="col-xl-4">
          <div className="card">
            {/* <Button type="primary">Add to Pod</Button> */}
            <Pod />

          </div>
          <div className="card">
            <Button type="primary" onClick={showFit}>See Portfolio Fit</Button>
          </div>
        </div>
      </div>
      {/* <div className="cui__utils__heading">
        <strong>Portfolio Charts</strong>
      </div>
      <div className="col">
        <Chart3003 />
      </div> */}
      <div><p></p></div>
      <div><p></p></div>

      <div className="cui__utils__heading">
        <strong>Sweet Moving</strong>
      </div>
      <div className="col">
        <Chart3005 />
      </div>


      </div>
      );
};

export default DashboardAlpha;
