import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Paper,
    Box,
    Typography,
    Tab,
    Tabs,
    Divider,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import style from "./subcomponents/hobbies.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div>
            <Typography variant="h4">Hobbies</Typography>
            <Box sx={{ width: '100%', height: '90%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                <Tab label="Baking" {...a11yProps(0)} />
                <Tab label="Woodcarving" {...a11yProps(1)} />
                <Tab label="Reading" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <Divider />

        <TabPanel value={value} index={0}>
            <Grid container spacing={12}>
                <Grid item xs={8}>
                    <Card sx={{ maxWidth: 100 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="../../static/frontend/bread.png"
                            alt="Beer Bread"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="p" ml={5}>
                                Beer Bread
                            </Typography>
                            <Typography variant="body2">
                                A soft chewy bread with a thick crust. Perfect as a side dish at dinner and
                                great with butter.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<DehazeIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                                                        <List>
                                <ListSubheader component="div">
                                    Ingredients
                                </ListSubheader>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Olive Oil" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Water" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Yeast" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Beer" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Salt" />
                                </ListItem>
                            </List>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary">
                                (Insert Recipe Here)
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12}>
                    <br />
                </Grid>
                <Grid item xs={8}>
                    <Card sx={{ maxWidth: 100 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Adkyl3wiKsvIlTAXeryTuQHaE8%26pid%3DApi&f=1"
                            alt="Beer Bread"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="p" ml={5}>
                                Baguettes
                            </Typography>
                            <Typography variant="body2">
                                Pourous and great for slicing, this is a good option for building snacks and pairing with
                                savory toppings.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<DehazeIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <List>
                                <ListSubheader component="div">
                                    Ingredients
                                </ListSubheader>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Olive Oil" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Water" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Yeast" />
                                </ListItem>
                            </List>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary">
                                (Insert Recipe Here)
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
            Also under construction...
        </TabPanel>

        <TabPanel value={value} index={2}>
            <Grid container spacing={12}>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 100 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image="https://stylecaster.com/wp-content/uploads/2020/09/dune-1.jpg?resize=1024"
                            alt="Dune Cover"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Dune
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Frank Herbert
                            </Typography>
                            <Typography variant="body2">
                                A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its
                                heir becomes troubled by visions of a dark future.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Rating name="read-only" value={4} readOnly />
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="text.secondary">
                                        I thought the book as a whole was very enjoyable and deep. The first act is loaded
                                        with foreshadowing which sets the rest of the book up, but the middle act drags on
                                        and on through desert and rock which does pay off but is difficult to get through
                                        without knowing where the story goes. The final act pulls it back together and ties
                                        up loose ends. I definitely want to read more of this series.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 100 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image="https://mamasgeeky.com/wp-content/uploads/2020/12/the-stand-poster.jpg.webp"
                            alt="The Stand Cover"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                The Stand
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Stephen King
                            </Typography>
                            <Typography variant="body2">
                                When a government-run lab accidentally lets loose a deadly virus, most of the population
                                of the world is wiped out. Survivors begin having dreams about two figures: a mystical old
                                woman, or a foreboding, scary man.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Rating name="read-only" value={0} disabled />
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2">
                                        Still reading! Review pending.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 100 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image="https://upload.wikimedia.org/wikipedia/en/f/ff/JMCoetzee_WaitingForTheBarbarians.jpg"
                            alt="WFTB Cover"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Waiting for the Barbarians
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                J.M. Coetzee
                            </Typography>
                            <Typography variant="body2">
                                After a magistrate of the Empire witnesses the cruel and unjust treatment of prisoners of war,
                                he reconsiders his role in the regime and carries out a quixotic act of rebellion.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Rating name="read-only" value={4} readOnly />
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2">
                                        This was a strange but compelling book that eschewed a sense of time period and geography
                                        in favor of focusing on colonialism and power structures. It doesn't have a strong
                                        driving plot behind the scenes so much as character development as the protagonist
                                        finds himself on both sides of the Empire's wrath. The story examines the consequences
                                        of colonialism without tying it to a real-world example to avoid commentary on a specific
                                        nation and condemn the concept itself universally.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <br />
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 100 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image="http://3.bp.blogspot.com/_6VqdYNSOxKo/TAZjFz1Rz1I/AAAAAAAACgQ/1Rzu502i6vA/s1600/worldwarz.jpg"
                            alt="World War Z Cover"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                World War Z
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Max Brooks
                            </Typography>
                            <Typography variant="body2">
                                A collection of individual accounts narrated by an agent of the United Nations Postwar Commission,
                                following the devastating global conflict against the zombie plague. 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Rating name="read-only" value={3} readOnly />
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 100 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image="https://upload.wikimedia.org/wikipedia/en/6/67/Confederacy_of_dunces_cover.jpg"
                            alt="CoD Cover"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                A Confederacy of Dunces
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                John Kennedy Toole
                            </Typography>
                            <Typography variant="body2">
                                "When a true genius appears in the world, you may know him by this sign, that the dunces are all
                                in confederacy against him." 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Rating name="read-only" value={5} readOnly />
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2">
                                        Ignatius Reilly, a so-called "modern Don Quixote", is a delusional recluse who condemns pop media
                                        and modern 1960s culture from the basement of his mother. Throughout the novel, his seemingly
                                        simple and straightforward plot culminates in a disaster for the near-entirety of the cast
                                        he directly and indirectly influences through his actions—and nothing is <i>ever</i> his fault.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 100 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780735221116_p0_v10%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                            alt="Couple Next Door Cover"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                The Couple Next Door
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Shari Lapena
                            </Typography>
                            <Typography variant="body2">
                                A couple returns from a neighbor's party only to find their infant child missing and
                                uncover a plot to unravel their family via extortion.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Rating name="read-only" value={3} readOnly />
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2">
                                        This book was fine--rather straightforward with a number of twists that I felt the
                                        reader could predict with a bit of thought, but perfectly fine for an easy read.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </TabPanel>
        </Box>
    </div>
  );
}