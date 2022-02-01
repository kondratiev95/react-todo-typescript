import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles(() => ({
    inputRoot: {
        margin: '15px auto',
        border: '1px solid #AF7AC5',
        padding: '10px 15px',
        borderRadius: '6px',
        color: '#AF7AC5',
        width: '320px'
    },
    header: {
        fontSize: '60px',
        textAlign: 'center',
        margin: '20px 0 0 0',
        color: '#AF7AC5'
    },
    button: {
        display: 'block',
        margin: '0px auto',
        width: '200px',
        background: '#D2B4DE',
        '&:hover': {
            background: '#BB8FCE'
        }
    },
    error: {
        fontSize: '20px',
        textAlign: 'center',
        color: 'tomato'
    },
    inputGlass: {
        width: '20px',
    },
    inputBlock: {
        width: '350px',
        margin: '0px auto'
    },
    inputSpanLight: {
        marginLeft: '5px',
        opacity: '1'
    },
    inputSpanDark: {
        marginLeft: '5px',
        opacity: '0.4'
    },
    inputSpanLightConfirm: {
        marginLeft: '5px',
        opacity: '1'
    },
    inputSpanDarkConfirm: {
        marginLeft: '5px',
        opacity: '0.4'
    },
}))

export default useStyles;