/**
 * Created by Alternateev on 22.07.2019.
 */
const source_arr = [
    {
        name: 'Jonny Walker',
        birthDay: '1995-12-17'
    },
    {
        name: 'Andrew',
        birthDay: '2001-10-29'
    }
];

Array.prototype.searchByName = function(search) {
    let results = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i].name.indexOf(search) >= 0) {
            results.push(this[i]);
        }
    }
    return results;
};

Array.prototype.getBiggestAge = function() {
    let minBirthdayTimestamp = Date.now();//текущая дата в секундах от начала эпохи Linux 1970-01-01
    let maxAgeObj = null;
    for (let i = 0; i < this.length; i++) {
        let currentAgeParts = this[i].birthDay.split('-');
        let birthdayObj = new Date(currentAgeParts[0], currentAgeParts[1], currentAgeParts[2]);//создаём объект Data для заданых года, месяца и дня
        if (birthdayObj.getTime() < minBirthdayTimestamp) {
            minBirthdayTimestamp = birthdayObj.getTime();//если дата которую мы проверяем < текущей min даты
            //то она становится текущей min датой
            maxAgeObj = this[i]; // объект(ячейка массива) который соответствует текущеей min дате
        }
    }
    return maxAgeObj;
};

console.log(source_arr.searchByName('nd'));
console.log(source_arr.getBiggestAge());
