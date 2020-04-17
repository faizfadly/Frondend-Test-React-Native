import React, { Component, useState } from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, Modal, Button, TouchableOpacity,TouchableHighlight } from 'react-native';

import iconHome from './icon/home-active.png'
import iconOrder from './icon/order.png'
import iconHelp from './icon/help.png'
import iconInbox from './icon/inbox.png' 
import iconAccount from './icon/account.png'

export default class App extends Component {
  state = {
    modalVisible: false,
  }
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{flex :1}}> 
        <Modal animationType = {"slide"} transparent = {false}
            visible = {this.state.modalVisible}
            onRequestClose = {() => { console.log("Modal has been closed.") } }>
            <View style={{marginLeft:10,marginTop:10, marginBottom:5}}>
              <TouchableOpacity onPress = {() => { this.toggleModal(!this.state.modalVisible)}}>
                <Text style = {styles.modalCloseButton}>x</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginLeft:12, marginHorizontal:20,  flexDirection:'row', justifyContent:'space-between', }}>
              <Text style={{fontSize:18,fontWeight:'bold'}}>Your Favorit</Text>
              <TouchableOpacity style={styles.editButton}>
                <Text style={{fontSize:12, fontWeight:'bold', color:'#61A756', textAlign:'center'}}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.modal}>
              <View style = {styles.menuWrap}>
                <View style = {styles.menuRow}>
                  <View style={styles.menuCol}>
                    <View style={styles.menuBox}>
                      <Image source={require('./icon/go-send.png')} />
                    </View>
                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>Go-Send</Text>
                  </View>
                  <View style={styles.menuCol}>
                    <View style={styles.menuBox}>
                      <Image source={require('./icon/go-deals.png')} />
                    </View>
                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>Go-Deal</Text>
                  </View>
                  <View style={styles.menuCol}>
                    <View style={styles.menuBox}>
                      <Image source={require('./icon/go-food.png')} />
                    </View>
                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>Go-Food</Text>
                  </View>
                  <View style={styles.menuCol}>
                    <View style={styles.menuBox}>
                      <Image source={require('./icon/go-car.png')} />
                    </View>
                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>Go-Car</Text>
                  </View>
                </View>
              </View>
            </View>
        </Modal> 
        
        <ScrollView style={{flex :1, backgroundColor:'white', paddingTop:15}}>
            {/*Search Bar*/}
            <View style={{marginHorizontal:17, flexDirection:'row'}}>
              <View style={{position:'relative', flex:1}}>
                <TextInput placeholder="what do you want to eat" 
                  style={styles.inputSearch}/>
                <Image source={require('./icon/search.png')} 
                  style={{position:"absolute", top:5, left:10}}
                />
              </View>
              <View style={{width:35, alignItems:'center', justifyContent:'center'}}>
                <Image source={require('./icon/promo.png')}/>
              </View>
            </View>

            {/*Gopay*/}
            <View style={{marginHorizontal:17, marginTop:8}}>
              <View style={styles.gopayMenuHeader}>
                <Image source={require('./icon/gopay.png')} />
                <Text style={{fontSize:17, fontWeight:'bold', color:'white'}}>Rp50.000</Text>
              </View>
              <View style={styles.gopayMenu}>
                <View style={{flex:1, alignItems:'center'}}>
                  <Image source={require('./icon/pay.png')} />
                  <Text style={styles.gopayMenuText}>Pay</Text>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                  <Image source={require('./icon/nearby.png')} />
                  <Text style={styles.gopayMenuText}>Nearby</Text>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                  <Image source={require('./icon/topup.png')} />
                  <Text style={styles.gopayMenuText}>Topup</Text>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                  <TouchableOpacity onPress = {() => { this.toggleModal(!this.state.modalVisible)}}>
                    <Image source={require('./icon/more.png')} />
                    <Text style={styles.gopayMenuText}>More</Text>
                  </TouchableOpacity>  
                </View>
              </View>
            </View>  

            {/*Main Menu*/}
            <View style = {styles.menuWrap}>
              <View style = {styles.menuRow}>
                <View style={styles.menuCol}>
                  <View style={styles.menuBox}>
                    <Image source={require('./icon/go-ride.png')} />
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>GO-RIDE</Text>
                </View>
                <View style={styles.menuCol}>
                  <View style={styles.menuBox}>
                    <Image source={require('./icon/go-car.png')} />
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>GO-CAR</Text>
                </View>
                <View style={styles.menuCol}>
                  <View style={styles.menuBox}>
                    <Image source={require('./icon/go-food.png')} />
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>GO-FOOD</Text>
                </View>
                <View style={styles.menuCol}>
                  <View style={styles.menuBox}>
                    <Image source={require('./icon/go-deals.png')} />
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>GO-DEAL</Text>
                </View>
              </View>
              <View style = {styles.menuRow}>
                <View style={styles.menuCol}>
                  <View style={styles.menuBox}>
                    <Image source={require('./icon/go-pulsa.png')} />
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>GO-PULSA</Text>
                </View>
                <View style={styles.menuCol}>
                  <View style={styles.menuBox}>
                    <Image source={require('./icon/go-bluebird.png')} />
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>GO-BLUEBIRD</Text>
                </View>
                <View style={styles.menuCol}>
                  <View style={styles.menuBox}>
                    <Image source={require('./icon/go-send.png')} />
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>GO-SEND</Text>
                </View>
                <View style={styles.menuCol}>
                  <TouchableOpacity onPress = {() => {this.toggleModal(true)}}>
                    <View style={styles.menuBox}>
                      <Image source={require('./icon/go-more.png')} />
                    </View>
                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center',marginTop:6}}>MORE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            
            {/*Delimeter*/}
            <View style={styles.dilemiter}></View>
            {/*Section News*/}
            <View style={{paddingTop:10, paddingHorizontal:16}}>
              <View style={{position:'relative'}}>
                <Image source={require('./dummy/konflik_rawon_kluwek_vs_rawon_kuning.jpg')} style={{height:170, width:'100%', borderRadius:6}} /> 
                <View style={{width:'100%', height:'100%',position:'absolute',top:0,left:0, backgroundColor:'black', opacity:0.2, borderRadius:6}}></View> 
                <View style={{height:15, width:60, position:'absolute', top:16, left:16}}>
                  <Image source={require('./logo/white.png')} style={{width:undefined, height:undefined, resizeMode:'contain', flex:1}}/>  
                </View>
              </View>
              <View style={{marginTop:16,marginBottom:20, borderBottomWidth:1, borderBottomColor:'#E8E9ED', paddingBottom:20}}>
                <Text style={{fontSize:16, fontWeight:'bold', color:'#1C1C1C'}}>GO-NEWS</Text> 
                <Text style={{fontSize:14, fontWeight:'normal', color:'#7A7A7A', marginBottom:11}}>Konflik dan perdebatan berbagai sekte rawon! yang masih debat sekte bubur di aduk harap minggir</Text> 
                <TouchableOpacity style={styles.readmoreButton}>
                  <Text style={{fontSize:13, fontWeight:'bold', color:'white', textAlign:'center'}}>READ</Text>
                </TouchableOpacity>
              </View>
            </View>
        </ScrollView>

        <View style={styles.tabMenu}>
          <View style={styles.tabMenuItem}>
            <Image style={{width:26, height:26}} source={iconHome} />
            <Text style={{fontSize:10, color: '#545454', marginTop:4, color:'#43AB4A'}}>Home</Text>
          </View>
          <View style={styles.tabMenuItem}>
            <Image style={{width:26, height:26}} source={iconOrder} />
            <Text style={{fontSize:10, color: '#545454', marginTop:4}}>Order</Text>
          </View>
          <View style={styles.tabMenuItem}>
            <Image style={{width:26, height:26}} source={iconHelp} />
            <Text style={{fontSize:10, color: '#545454', marginTop:4}}>Help</Text>
          </View>
          <View style={styles.tabMenuItem}>
            <Image style={{width:26, height:26}} source={iconInbox} />
            <Text style={{fontSize:10, color: '#545454', marginTop:4}}>Inbox</Text>
          </View>
          <View style={styles.tabMenuItem}>
            <Image style={{width:26, height:26}} source={iconAccount} />
            <Text style={{fontSize:10, color: '#545454', marginTop:4}}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding:0,
  },
  modalCloseButton:{
    fontSize:18,
    fontWeight:'bold'
  },
  /* Main Menu*/
  menuWrap: {
    flexDirection:'row', 
    flexWrap:'wrap', 
    marginHorizontal:10, 
    marginTop:18 
  },
  menuRow: {
    justifyContent: 'space-between', 
    flexDirection:'row', 
    width:'100%', 
    marginBottom:18 
  },
  menuCol: {
    width: '25%', 
    alignItems:'center'
  },
  menuBox:{
    width:58, 
    height:58, 
    borderWidth:1.5, 
    borderColor:'#EFEFEF', 
    borderRadius:18, 
    justifyContent:'center', 
    alignItems:'center'
  },
  /* End Main Menu*/
  inputSearch:{
    borderWidth: 1, 
    borderColor:'#E8E8E8', 
    borderRadius:25, 
    height:40, 
    fontSize:14, 
    paddingLeft:40,
    paddingRight:20, 
    backgroundColor:'white', 
    marginRight:18
  },
  gopayMenuHeader:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    backgroundColor:'#2C5FBB', 
    borderTopLeftRadius:4, 
    borderTopRightRadius:4, 
    padding:14
  },
  gopayMenu:{
    flexDirection:'row',
    paddingTop:20, 
    paddingBottom:14, 
    backgroundColor:'#2F65BD', 
    borderBottomLeftRadius:4, 
    borderBottomRightRadius:4
  },
  gopayMenuText:{
    fontSize:13, 
    color:'white', 
    fontWeight:'bold', 
    marginTop:15
  },
  tabMenu : {
    height:54, 
    flexDirection:'row', 
    backgroundColor:'white'
  },
  tabMenuItem:{
    flex:1, 
    alignItems: 'center', 
    justifyContent:'center'
  },
  dilemiter:{
    height:17, 
    backgroundColor:'#F2F2F4', 
    marginTop:5
  },
  readmoreButton:{
    backgroundColor:'#61A756',
    paddingHorizontal:12,
    paddingVertical:11, 
    alignSelf:'flex-end', 
    borderRadius:4
  },
  editButton:{
    backgroundColor:'#fff',
    paddingHorizontal:10,
    paddingVertical:2, 
    alignSelf:'flex-end', 
    borderRadius:4,
    borderWidth:2,
    borderColor:'#61A756'
  }


  

});
