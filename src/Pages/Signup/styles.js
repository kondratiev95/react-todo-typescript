import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({

    signupBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    header: {
        fontSize: '60px',
        margin: '20px 0 0 0',
        color: '#AF7AC5',
        marginBottom: '20px'
    },

    button: {
        display: 'block',
        width: '200px',
        background: '#D2B4DE',
        '&:hover': {
            background: '#BB8FCE'
        }
    },

    error: {
        fontSize: '15px',
        color: 'tomato',
        marginBottom: '5px'
    },

    inputGlass: {
        width: '20px',
    },

    inputBlock: {
        width: '300px',
        marginBottom: '20px',
        border: '1px solid #AF7AC5',
        color: '#AF7AC5',
        outline: 'none'
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

    link: {
        fontSize: '15px',
        marginBottom: '15px',
        color: 'purple',
        borderBottom: 'purple'
    }
    
}))

export default useStyles;