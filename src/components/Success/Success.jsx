import { Paper } from "@mui/material"
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';

const Success = () => {
    return (
        <Paper sx={{
            backgroundColor: 'rgba(0, 128, 0, 0.85)',
            width: '100%',
            padding: '3%',
            marginTop: '25px',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
        }}>
            <CheckCircleTwoToneIcon />
            Registration successful
        </Paper>
    )
}

export default Success