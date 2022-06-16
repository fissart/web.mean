import express, { Application} from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

import user from './3.routes/1_users.route'
import curse from './3.routes/2_curses.route'
import section from './3.routes/3_sections.route'
import theme from './3.routes/4_themes.route'
import task from './3.routes/5_task.route'
import integer from './3.routes/integer.route'
import news from './3.routes/new.route'

//1_MV
//2_RH
//3_L-AUTORIDADES
//4_L-ADMINISTRATIVOS
//5_L-CONSEJOESTUDIANTIL
//6_EDUCACION
//7_AP-P
//8_AP-G
//9_AP-E
//10_TESIS
//11_BIBLIOTECA
//12_ADMISION
//13_PRE
//14_STD
//15_EGRESADOS
//16_EVENTOS
//17_DOCUMENTOS
//18_ORGANIGRAMA
//19_CRONOGRAMA
//21_RECLAMOS
//22_PREGUNTAS
//23_MESADEPARTES
//24_HORARY
//25_SILABOS
//26_NOTAS


// Initializations
const app: Application = express();
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/users', user);//usuarios unicamente
app.use("/api/themes", theme);
app.use("/api/task", task);
app.use("/api/integer", integer);
app.use("/api/news", news);


app.use("/api/curses", curse);
app.use("/api/sections", section);
//app.use('/api/', curse);//cursos, temas
//app.use('/api', unity);//usuarios unicamente
//app.use('/api', require('./routes/index'));

// this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));


export default app;
