import { View, Text, SafeAreaView ,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTab,{bottomTabIcons} from '../components/home/BottomTab'

const HomeScreens = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Header/>
    <Stories/>
    <ScrollView>
    {POSTS.map((post, index)=>(
    <Post post={post} key={index} />
    ))}

    </ScrollView>
    <BottomTab icons={bottomTabIcons} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: '100%',
    height: '100%',
    marginTop:50,

}
})

export default HomeScreens

