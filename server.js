                const mongoose = require('mongoose')
                const express = require('express')

                const app = express()

                
                app.use(express.json())

                            const db = 'mongodb+srv://bashar:7XTV55KW@cluster0-5zahv.mongodb.net/todolist?retryWrites=true&w=majority'

                mongoose
                    .connect(db, {
                        useCreateIndex: true,
                        useUnifiedTopology: true,
                        useNewUrlParser: true
                    })
                    .then(() => console.log('Connected to MongoDB Database...'))
    .catch(err => console.log('Database connection error : '+err))



app.use('/api/todo', require('./routes/todo'))


`        = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server is started on Port'+port)
})
