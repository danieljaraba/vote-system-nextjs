import {Card, Stack, Button, CardActions} from '@mui/material'

function Tarjeta(props){
    return(
        <Card sx={{maxWidth:300,my:2}}>
            <Stack direction="row">
                <div>
                    <div>
                        <img
                            src={props.plink}
                            width={150}
                            height={180}
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
                            width={150}
                            height={180}
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
            <CardActions sx={{justifyContent:"center"}}>
                <Button variant="contained" onClick={() =>{
                    alert(`Se presionó el boton ${props.id}`)
                }}>VOTAR</Button>
            </CardActions>
        </Card>
    )
}

export default Tarjeta