import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import MuiAlert from '@material-ui/lab/Alert';
import CardFilmes from '../../Components/CardFilmes';
import useStyles from './styled';
import axios from '../../Services/axios';
export default function Home() {
  const classes = useStyles();
  const [loading,setLoading] = useState(false);
  const [name,setName] = useState('');
  const [page, setPage] = useState(1);
  const [erro, setErro] = useState(false);
  const [movies,setMovies] = useState([]);


  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    async function getMovies(name,page){
      if(name){
        const response = await axios.get(`${name}&page=${page}`,{
          onDownloadProgress: (progressEvent) => {
            setLoading(true);
          }
        }).then( value => new Promise(resolve => {
          setTimeout(() => {
            resolve(value);
            setErro(false)
            setLoading(false);
          },2000)
        })).catch(error => {
          console.log(error.message);
          setErro(true)
          setLoading(false);
          setPage(1);
        });

        if(response){
          setMovies(response.data.results);
        }
      }
      return;
    }
    getMovies(name, page)

  },[name,page])

  return (
    <Card className={classes.root}>
      <CardContent>
        <FormControl fullWidth={true} >
          <InputLabel >Nome do filme</InputLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <FormHelperText>Digite o nome do filme que deseja.</FormHelperText>
        </FormControl>

      {
        loading && <div className={classes.progress}>
                      <CircularProgress size='25%' />
                    </div>
      }

      {
        erro && <MuiAlert severity="error" elevation={6} variant="filled" >Houve um erro na requisição</MuiAlert>
      }


      {
        !loading && movies.length > 0 ?
        <React.Fragment>
          {
            movies.map(item => {
              return (
                <li key={item.id}>
                  <CardFilmes path={item.backdrop_path} title={item.title} overview={item.overview} />
                </li>
              )
            })
          }
          <div className={classes.pagination}>
            <Pagination page={page} onChange={handleChange} count={100} />
          </div>
        </React.Fragment>
        :
        <></>
      }

      </CardContent>
    </Card>
  );
}
