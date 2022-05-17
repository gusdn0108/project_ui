import React from 'react'
import { Grid , Paper , Avatar , Typography ,TextField} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const Signup = () => {
    const paperStyle = {padding:'30px 20px',width:300,margin:"200px auto", }
    const headerStyle = {margin:0}
    const AvatarStyle = {backgroundColor:'pink'}
  return (
  <Grid>
      <Paper elevation={20} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={AvatarStyle}>
            <AddCircleOutlineOutlinedIcon />

            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant='caption'>회원가입에 필요한 양식을 적어주세요</Typography>
            <TextField></TextField>
        </Grid>
      </Paper>
  </Grid>
  )
}

export default Signup