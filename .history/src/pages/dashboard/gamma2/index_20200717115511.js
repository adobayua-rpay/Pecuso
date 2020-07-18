import React from 'react'
import { Helmet } from 'react-helmet'

import { Input,Button } from 'antd'
import {StyleSheet, View } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




const DashboardGamma2 = () => {
  return (
    <div>
      <Helmet title="Portfolio Starter" />
      <div className="cui__utils__heading">
        <strong>Get Started with your portfolio!</strong>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <h5 className="mb-3">
              <strong>Portfolio Name</strong>
            </h5>
            <div className="mb-5">
              <Input placeholder="What Would you like to call this portfolio?" />
            </div>
            
            <div className="mb-5">
              <div className=".col-md-4">
                <Button className="mr-3 mb-3">Begin!</Button>
              </div>
            </div>
            <View style={styles.container}>
              <div className=".col-md-4">
                <Button className="mr-3 mb-3">Begin!</Button>
              </div>
            </View>
            
          </div>
        </div>
      </div>
    </div>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:wp('100%'),
    height:hp('100%'),
    backgroundColor: "#0a0a0a"
  },
  portfolioRect:{
    marginLeft: wp('25.5%'),
    backgroundColor: "#ffffff",
    width:wp('50.5%'),
      height:hp('35.2%'),
      borderRadius: "5px",
      marginTop: hp('-74.5%'),
      },
    
});
export default DashboardGamma2
