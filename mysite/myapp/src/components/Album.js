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
                                        very much, so this is a way for me to post the pictures I want without being
                                        bogged down by social expectations and ramifications. There may be several
                                        stock photos used for spacing and testing.</Typography>
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
      caption: 'Holding my niece Claire with my brother JT (June 2019',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      caption: '@hjrc33',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      caption: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      caption: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      caption: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      caption: '@silverdalex',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      caption: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      caption: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      caption: '@southside_customs',
      cols: 2,
    },
  ];
  