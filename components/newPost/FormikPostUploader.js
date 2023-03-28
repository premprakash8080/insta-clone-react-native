import { View, Text,Image ,TextInput} from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import {Formik} from 'formik'
import { Button, Divider } from 'react-native-elements';

const PLACEHOLDER_IMG = 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s';

const uploadPostSchema = Yup.object().shape({
    imageUrl:Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200,'Caption has reached the character limit.')
})

const FormikPostUploader = () => {
    const [thumbnailUrl , setThumbnailUrl] = useState(PLACEHOLDER_IMG)
  return (
    <Formik
    initialValues={{caption:'', imageUrl:''}}
    onSubmit={Values=> console.log(Values)}
    validationSchema={uploadPostSchema}
    validateOnMount={true}
    
    >
    {({handleBlur, handleChange, handleSubmit, values, errors, isValid})=>
    <>
        <View style={{margin:20, justifyContent:'space-between', flexDirection:'row'}}>
        <Image source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}} 
            style={{width:100, height:100}}
        />
       <View style={{flex:1, marginLeft:12}}>

        <TextInput 
        style={{color:'white', fontSize:20}} 
        placeholder='Enter a caption...' 
        placeholderTextColor='gray' 
        multiline={true}
        onChangeText={handleChange('caption')}
        onBlur={handleBlur('caption')}
        values={values.caption}    
        />

       </View>
        </View>
        <Divider width={0.2} orientation='vertical'/>
        <TextInput 
        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
        style={{color:'white'}} 
        placeholder='Enter Image Url' 
        placeholderTextColor='gray' 
        onChangeText={handleChange('imageUrl')}  
        onBlur={handleBlur('imageUrl')}
        values={values.imageUrl}  
        />

        {errors.imageUrl && (
            <Text style={{fontSize:10 , color:'red'}} >
                {errors.imageUrl}
            </Text>
        )}

        <Button onPress={handleSubmit} title='Share' disabled={!isValid} />    
    </>
    
    }

    </Formik>
  )
}

export default FormikPostUploader