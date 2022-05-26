import Header from '../components/Header'
import Tarjeta from '../components/Tarjeta'
import {Box, Paper, Container} from '@mui/material'
import urls from '../public/assets/urls.json'

function index({names}) {
    return(
        <div>
            <Header title="Votaciones"/>
            <Container sx={{textAlign:"center"}}>
                <div>
                    <h1>VOTO POR LA FÓRMULA DE</h1>
                </div>
                <div>
                    <h1>PRESIDENTE Y VICEPRESIDENTE DE LA REPÚBLICA</h1>
                </div>
                <div>
                    <h2>PERIODO 2022 - 2026</h2>
                </div>
            </Container>
            <Paper elevation={3} sx={{my:5,mx:5}}>
                <Box sx={{display:"flex",flexDirection:"row",flexFlow:"wrap",justifyContent:"space-evenly"}}>
                    {names.map((item) => (
                        <Tarjeta
                            pname={item.presidente} vname={item.vicepresidente}
                            plink={urls[parseInt(item.id)].plink}
                            vlink={urls[parseInt(item.id)].vlink}
                            id={item.id}
                            key={item.id}
                        />
                    ))}
                </Box>
            </Paper>
        </div>
    )
}


export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api/getcandidates',{method:'GET'})
    const names = await res.json()
    return {props:{names}}
}

export default index