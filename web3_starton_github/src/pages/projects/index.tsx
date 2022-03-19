import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div style={{ width: '100%', height: '500px', backgroundImage: 'url("/images/front.png")', backgroundSize: 'cover' }}>
                </div>
                <Container>
                    .
                 </Container>
                <Container>
                    ACTION GOAL
                 </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst quisque sagittis purus sit amet volutpat. Egestas dui id ornare arcu odio ut sem nulla. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Urna molestie at elementum eu facilisis sed. Id faucibus nisl tincidunt eget nullam non nisi est. Morbi tincidunt ornare massa eget egestas purus. Convallis convallis tellus id interdum velit laoreet. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Laoreet id donec ultrices tincidunt arcu. Elementum nisi quis eleifend quam adipiscing vitae. Sit amet tellus cras adipiscing enim eu turpis. Semper eget duis at tellus at urna condimentum mattis pellentesque. Metus aliquam eleifend mi in nulla posuere. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus.
                </Container>
                <Container>
                    FUNDING GOAL
                 </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    Justo nec ultrices dui sapien eget mi proin. Libero enim sed faucibus turpis in. Amet tellus cras adipiscing enim eu turpis egestas pretium. Ipsum consequat nisl vel pretium lectus quam id. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Nibh tellus molestie nunc non blandit massa. Suspendisse ultrices gravida dictum fusce ut placerat orci. Risus at ultrices mi tempus imperdiet nulla. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Laoreet suspendisse interdum consectetur libero id faucibus. Integer eget aliquet nibh praesent tristique magna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Sit amet facilisis magna etiam. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Sed nisi lacus sed viverra tellus in hac habitasse platea. Condimentum id venenatis a condimentum.
                </Container>
                <Container >
                    DECISIONS
                 </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    Justo nec ultrices dui sapien eget mi proin. Libero enim sed faucibus turpis in. Amet tellus cras adipiscing enim eu turpis egestas pretium. Ipsum consequat nisl vel pretium lectus quam id. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Nibh tellus molestie nunc non blandit massa. Suspendisse ultrices gravida dictum fusce ut placerat orci. Risus at ultrices mi tempus imperdiet nulla. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Laoreet suspendisse interdum consectetur libero id faucibus. Integer eget aliquet nibh praesent tristique magna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Sit amet facilisis magna etiam. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Sed nisi lacus sed viverra tellus in hac habitasse platea. Condimentum id venenatis a condimentum.
                </Container>
                
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}