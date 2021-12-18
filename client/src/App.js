import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import Memoirr from "./images/Memoirr.jpg";
import Posts from "./Posts/Posts.js";
import Form from "./Form/Form.js";

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memoirr</Typography>
                <img src={Memoirr} alt="Memoirr" />
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
