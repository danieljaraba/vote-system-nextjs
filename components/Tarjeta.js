import * as React from 'react';
import { useRouter } from 'next/router'
import { Card, Stack, Button, CardActions, Alert, AlertTitle, Snackbar } from '@mui/material'

function Tarjeta(props) {
    const [open, setOpen] = React.useState(false);
    const router = useRouter()

    const handleClick = async () => {
        setOpen(true);
        fetch(`http://localhost:3000/api/votar/${props.id}`,{method:'POST'})
        setTimeout(() => { router.push("/results")},3000)
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Card sx={{ maxWidth: 300, my: 2 }}>
            <Stack direction="row">
                <div>
                    <div>
                        <img
                            src={props.plink}
                            style={{ width: 150, height: 180, objectFit: "cover" }}
                        />
                    </div>
                    <div>
                        <div>
                            <h5>PRESIDENTE</h5>
                        </div>
                        <div>
                            <h5>{props.pname}</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src={props.vlink}
                            style={{ width: 150, height: 180, objectFit: "cover" }}
                        />
                    </div>
                    <div>
                        <div>
                            <h5>VICEPRESIDENTE</h5>
                        </div>
                        <div>
                            <h5>{props.vname}</h5>
                        </div>
                    </div>
                </div>
            </Stack>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button variant="contained" onClick={handleClick}>VOTAR</Button>
            </CardActions>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity="success">
                    <AlertTitle>Exitoso</AlertTitle>
                    Voto registrado exitosamente — <strong>¡Redirigiendo!</strong>
                </Alert>
            </Snackbar>
        </Card>
    )
}

export default Tarjeta