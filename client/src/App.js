import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import Memoirr from "./images/Memoirr.jpg";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import useStyles from "./styles.js";

const App = () => {
    const classes = useStyles();

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memoirr</Typography>
                <img className={classes.image} src={Memoirr} alt="Memoirr" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignContent="stretch" spacing={3}>
                        <Grid xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
