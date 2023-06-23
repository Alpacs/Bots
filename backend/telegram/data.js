let data = [{
    username: 'akiaray',
    food: false,
    classTicket: 2,
    start_station: '',
    depart_time: '',
    arrival_time: ''
},{
    username: 'kamarilya',
    food: true,
    classTicket: 1,
    start_station: '',
    depart_time: '',
    arrival_time: ''
}]

await axios.post('http://localhost:8080/TR/getChatId', {
    body: [{
            username: 'akiaray',
            food: false,
            classTicket: 2,
            start_station: '',
            depart_time: '',
            arrival_time: ''
        },{
            username: 'kamarilya',
            food: true,
            classTicket: 1,
            start_station: '',
            depart_time: '',
            arrival_time: ''
        }],
    Headers: {
      'Content-Type': 'application/json'
    }
})