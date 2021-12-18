import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import Memoirr from "./images/Memoirr.jpg";
import Posts from "./Posts/Posts.js";
import Form from "./Form/Form.js";
import useStyles from "./styles.js";

const App = () => {
    const classes = useStyles();

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memoirr</Typography>
                <img className={classes.image} src={Memoirr} alt="Memoirr" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignContent="stretch" spacing={3}>
                        <Grid xl={12} xm={7}>
                            <Posts />
                        </Grid>
                        <Grid xl={12} xm={7}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
