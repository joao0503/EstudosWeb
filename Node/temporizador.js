const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds());
})

setTimeout(function() {
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1!');
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)]; // segunda a sexta
regra.hour = 11; // na hora 11
regra.second = 15; // no segundo 15

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds());
})
