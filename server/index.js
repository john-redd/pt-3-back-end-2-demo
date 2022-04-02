const PORT = 4004

const express = require('express')
const cors = require('cors')
const app = express()
const {
  getAllMovies,
  deleteMovie,
  createMovie,
  updateMovie,
} = require('./controllers/movie.controller')

app.use(cors())
app.use(express.json())

app.get('/api/movies', getAllMovies)
app.delete('/api/movies/:id', deleteMovie)
app.post('/api/movies', createMovie)
app.put('/api/movies/:id', updateMovie)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
