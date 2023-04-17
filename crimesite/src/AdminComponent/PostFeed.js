import { Button, Container, Stack, TextField } from '@mui/material'
import React,{useState} from 'react'
import axios from 'axios'
//import ImageUploading from 'react-images-uploading';

const PostFeed = () => {
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [image, setImage] = useState(null);
    
    const uploadPost=async(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title" , title )
        formData.append ( 'description' , description)
      
    try {
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/posts/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data)
      console.log(response)
      if( response.status === 200 ){
        alert('Post created Successfully')
        
    }
    } catch (e) {
        alert(e)
      }
      }
    
  return (
    <>
    <Container maxWidth='md'>
                <form onSubmit={uploadPost}>
                    <Stack direction='column' spacing={2}>
      {image==null  ? (
      <input required
        type="file"
        name="image" 

        onChange={(event) => {
          console.log(event.target.files[0]);
          setImage(event.target.files[0]);
        }}
      /> ):(
      
        <div>
          <img
            alt="not found"
            width={"400px"}
            src={URL.createObjectURL(image)}
          />
          <br />
          <Button variant='outlined' size='small' onClick={() => setImage(null)}>Remove</Button>
        </div>
      )}
<TextField type='text' label='Title'  name='title' required
                              fullWidth value={title} onChange={(e)=>setTitle(e.target.value)} />

        
<TextField type='text' label='Description' multiline name='description' required
                              fullWidth value={description} onChange={(e)=>setDescription(e.target.value)} />
        <Stack alignItems='flex-end'>
        <Button type='submit'variant='contained' >Create Post</Button>
        </Stack>
        </Stack>
        </form>
        </Container>
    </>
  )
}

export default PostFeed