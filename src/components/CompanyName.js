import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CompanyName from './CompanyName';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#B6B3A6",
    paddingBottom:"10%"
  },
  paper: {
    padding: theme.spacing(10),
    color: theme.palette.text.secondary,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    color: "#31353D",
    paddingTop:"5%"
  },
  pos: {
    marginBottom: 12,
  },
 
}));

export default function Company() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>

      <Grid container >
       
        <Grid item xs={4}>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} component="h1" variant="h6"  gutterBottom>
          Word of the Day
        </Typography>
        <hr style={{  marginBottom: "1%", width: "80%" ,float:"left"}} />
        <AccountCircleIcon style={{fontSize: 40,marginLeft:"7%",marginTop:"5%"}}/> <span style={{color:"textSecondary",fontStyle:"oblique"}}>At least one director
Who must be located within Australia</span>

        <AccountCircleIcon style={{fontSize: 40,marginLeft:"7%",marginTop:"5%"}}/> <span style={{color:"textSecondary",fontStyle:"oblique"}}>At least one shareholder
Can be an individual, trustee or company</span>

        <AccountCircleIcon style={{fontSize: 40,marginLeft:"7%",marginTop:"5%"}}/> <span style={{color:"textSecondary",fontStyle:"oblique"}}>A physical Australian address
No PO boxes, can be your home address</span>
        
      </CardContent>
      
    </Card>
        </Grid>
        
        <Grid item xs={4}>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} component="h1" variant="h6"  gutterBottom>
        What to expect
        </Typography>
        <hr style={{  marginBottom: "1%", width: "80%" ,float:"left"}} />
        <AccountCircleIcon style={{fontSize: 40,marginLeft:"7%",marginTop:"5%"}}/> <span style={{color:"textSecondary",fontStyle:"oblique",display:"block"}}>A 5-10 minutes to complete application
Save and resume any-time </span>

        <AccountCircleIcon style={{fontSize: 40,top: "5px",marginLeft:"7%",marginTop:"5%"}}/> <span style={{color:"textSecondary",fontStyle:"oblique"}}>ACN + documents delivered-via email within 2-3 minutes</span>

        <AccountCircleIcon style={{fontSize: 40,marginLeft:"7%",marginTop:"5%"}}/> <span style={{color:"textSecondary",fontStyle:"oblique"}}>$544 for ACN + Documents
Including all ASIC fees, legal fees and GST</span>
        
      </CardContent>
      
    </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} component="h1" variant="h6"  gutterBottom>
        What you will need
        </Typography>
        <hr style={{  marginBottom: "1%", width: "80%" ,float:"left"}} />
        <AccountCircleIcon style={{fontSize: 40,marginLeft:"7%",marginTop:"7%"}}/> <span style={{color:"textSecondary",fontStyle:"oblique"}}>Details of the New Company Company Name & Address</span>

        <AccountCircleIcon style={{fontSize: 40,marginLeft:"7%",marginTop:"7%"}}/> <span style={{color:"textSecondary",fontStyle:"oblique"}}>Structure of the New Company Directors & Shareholders</span>

        <AccountCircleIcon style={{fontSize: 40,marginLeft:"7%",marginTop:"7%"}}/> <span style={{color:"textSecondary",fontStyle:"oblique"}}>Personal Details for Directors/Shareholders Full Name, Birth Details & Address</span>
        
      </CardContent>
      
    </Card>
        </Grid>
        
      </Grid>
      <Typography  component="h1" variant="h4" style={{marginLeft: "10%",marginTop: "4%"}} className={classes.typo}>
      Get Started
      </Typography>
     <hr style={{ marginTop: "1%", marginBottom: "3%", width: "80%" }} />
      <Typography  component="h1" variant="h6" style={{marginTop: "4%",marginLeft: "30%"}} className={classes.typo}>
      Enter Company Name
      </Typography>
      
          
      <TextField
            required
            id="companyName"
            label="Company Name"
            name="companytName"
            autoComplete="Text"
            style={{ float: "left", marginLeft: "30%",marginTop:"2%",marginBottom:"3%",width:"40%" }}
          />
    </div>
  );
}
