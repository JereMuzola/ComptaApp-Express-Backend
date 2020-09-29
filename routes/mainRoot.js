const classe=require('./classeRoot');
const exercice=require('./exerciceRoot');
const sorteCompte=require('./sorteCompteRoot')
const typeCompte=require('./typeCompteroot')

app.use('/classe',classe);
app.use('/exercice',exercice);
app.use('/sorteCompte',sorteCompte);
app.use('/typeCompte',typeCompte);