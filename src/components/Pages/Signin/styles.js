import { makeStyles } from "@material-ui/styles";

 

 const useStyles = makeStyles(() => ({
    authBlock: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center'

    },
    inputUsername: {
        border: '1px solid #AE745C',
        width: '300px',
        marginBottom: '10px',
        borderRadius: '5px',
        padding: '10px'
    },
    inputBlock: {
        border: '1px solid #AE745C',
        width: '300px',
        marginBottom: '10px',
        borderRadius: '5px',
    },
    header: {
        marginTop: '60px',
        marginBottom: '20px',
        fontSize: '60px',
        color: '#AE745C'
    },
    authBtn: {
        backgroundColor: 'red',
        color: 'white',
        // width: '200px',
        '&:hover': {
            background: 'green'
        }
    },
    link: {
        textDecoration: 'none',
        marginBottom: '10px',
        color: 'brown',
        fontSize: '15px',
        borderBottom: '1px solid brown'
    },
    error: {
        fontSize: '15px',
        color: 'tomato',
        marginBottom: '5px'
    },



 }))

 export default useStyles;