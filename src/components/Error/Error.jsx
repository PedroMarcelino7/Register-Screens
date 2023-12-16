import { Paper } from '@mui/material'
import styles from './Error.module.css'

const Error = ({ error }) => {
    return (
        <Paper sx={{
            backgroundColor: 'rgba(255, 0, 0, 0.75)',
            width: '100%',
            padding: '3%',
            marginTop: '25px',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 'bold',
            textAlign: 'center'
        }}>
            {error}
        </Paper>
    )
}

export default Error