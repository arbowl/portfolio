import React, { Component } from "react";
import {
    Button,
    Grid,
    Typography,
    TextField,
    FormControl,
    FormHelperText,
    Radio,
    RadioGroup,
    FormControlLabel
} from "@material-ui/core"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import img01 from "../../static/frontend/drewsophiegrad.png";
import img02 from "../../static/frontend/friends.jpg";
import img03 from "../../static/frontend/family.jpg";
import img04 from "../../static/frontend/claire.jpg";
import img05 from "../../static/frontend/welly.jpg";
import img06 from "../../static/frontend/renfaire.jpg";
import img07 from "../../static/frontend/bread.png";
import img08 from "../../static/frontend/toronto.png";
import img09 from "../../static/frontend/monica.png";
import img10 from "../../static/frontend/mowgli.png";
import img11 from "../../static/frontend/mango.png";
import img12 from "../../static/frontend/chriskids.png";


export default class Album extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={12} alignItems="center" justifyContent="center">
                <Typography variant="h4">Photo Album</Typography>
                <ImageList sx={{ width: 800, height: 600 }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.caption}
                        actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                        >
                            <InfoIcon />
                        </IconButton>
                        }
                    />
                    </ImageListItem>
                ))}
                </ImageList>
                <Typography variant="p">A photo album containing images I want to share. I don't use social media
                                        very much, so this is a way for me to post the pictures I care to share.</Typography>
            </Grid>
        );
    }
}

const itemData = [
    {
      img: img01,
      title: 'Graduation',
      caption: 'Me and Sophia (May 2021)',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: img02,
      title: 'Vermont',
      caption: 'Me and my friends in a winter cabin, PC: Josh (Jan 2020)',
    },
    {
      img: img03,
      title: 'Family Dinner',
      caption: 'Birthday dinner for Kim with siblings and Sophia (Jan 2022)',
    },
    {
      img: img04,
      title: 'Claire',
      caption: 'Holding my niece Claire with my brother JT (June 2019)',
      cols: 2,
    },
    {
      img: img05,
      title: 'Welly',
      caption: 'My nephew Wellington (June 2019)',
      cols: 2,
    },
    {
      img: img06,
      title: 'Renaissance Faire',
      caption: 'Renaissance Faire with my friends (Oct 2021)',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: img07,
      title: 'Bread',
      caption: 'Beer bread I baked for the family of my girlfriend (Nov 2021)',
    },
    {
      img: img08,
      title: 'Toronto',
      caption: 'Spring break in Toronto (Mar 2019)',
    },
    {
      img: img09,
      title: 'Monica',
      caption: 'A selfie with my niece Monica (Jun 2021)',
      rows: 2,
      cols: 2,
    },
    {
      img: img10,
      title: 'Mowgli',
      caption: 'My cat Mowgli (Jun 2021)',
    },
    {
      img: img11,
      title: 'Mango',
      caption: 'My other cat, Mango, twins with Mowgli (Jun 2021)',
    },
    {
      img: img12,
      title: "Chris's kids",
      caption: 'Four of my nieces and nephews (Aug 2021)',
      cols: 2,
    },
  ];
  