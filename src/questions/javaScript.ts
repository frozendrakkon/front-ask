import { type TAsk } from "@/types"

const jsAsk: Array<TAsk> = [
    {
        id: 1,
        theme: 'js',
        ask: 'Какие типы данных есть в javaScript?',
        level: 1
    },
    {
        id: 2,
        theme: 'js',
        ask: 'Что такое переменная?',
        level: 1
    },
    {
        id: 3,
        theme: 'js',
        ask: 'В чем отличия var, let, const?',
        level: 1
    },
    {
        id: 4,
        theme: 'js',
        ask: 'Что такое функция?',
        level: 1
    },
    {
        id: 5,
        theme: 'js',
        ask: 'Расскажи про hoisting (всплытие/поднятие)',
        level: 2
    },
    {
        id: 6,
        theme: 'js',
        ask: 'В чем отличия Function expression и Function declaration',
        level: 2
    },
    {
        id: 7,
        theme: 'js',
        ask: 'Что такое замыкание?',
        level: 2
    },
    {
        id: 8,
        theme: 'js',
        ask: 'что такое рекурсия?',
        level: 1
    },
    {
        id: 9,
        theme: 'js',
        ask: 'что добавили в ES6, чем вы пользуетесь из добавленного?',
        level: 1
    },
    {
        id: 10,
        theme: 'js',
        ask: 'Что такое ошибка undefined',
        level: 1
    },
    {
        id: 11,
        theme: 'js',
        ask: 'Что такое глобальные переменные, какие проблемы могут быть с ними связаны?',
        level: 1
    },
    {
        id: 12,
        theme: 'js',
        ask: 'В чем отличия === и == ?',
        level: 1
    },
    {
        id: 13,
        theme: 'js',
        ask: 'Что такое null?',
        level: 1
    },
    {
        id: 14,
        theme: 'js',
        ask: 'Что такое метод?',
        level: 1
    },
    {
        id: 15,
        theme: 'js',
        ask: 'что такое свойства функций?',
        level: 1
    },
    {
        id: 16,
        theme: 'js',
        ask: 'Что такое анонимные функции?',
        level: 1
    },
    {
        id: 17,
        theme: 'js',
        ask: 'какие есть методы у массивов',
        level: 1
    },
    {
        id: 18,
        theme: 'js',
        ask: 'Что такое Объект?',
        level: 1
    },
    {
        id: 19,
        theme: 'js',
        ask: 'Можно ли изменить содержимое объекта, если объявление произошло через const?',
        level: 1
    },
    {
        id: 20,
        theme: 'js',
        ask: 'Можем ли мы получить свойство в объекте, которого не существует?',
        level: 2
    },
    {
        id: 21,
        theme: 'js',
        ask: 'Как мы можем проверить существование свойства в объекте?',
        level: 2
    },
    {
        id: 22,
        theme: 'js',
        ask: 'Упорядочены ли свойства объектов?',
        level: 2
    },
    {
        id: 23,
        theme: 'js',
        ask: 'Как js понимает, что нужно удалить объект? какие методы используются для этого?',
        level: 2
    },
    {
        id: 24,
        theme: 'js',
        ask: 'Что такое конструктор объекта?',
        level: 1
    },
    {
        id: 25,
        theme: 'js',
        ask: 'как мы можем проверить функция вызвана с помощью new, или нет?',
        level: 3
    },
    {
        id: 26,
        theme: 'js',
        ask: 'Что такое опциональная цепочка "?" ?',
        level: 1
    },
    {
        id: 27,
        theme: 'js',
        ask: 'Отличия объектов от примитивных типов данных?',
        level: 1
    },
    {
        id: 28,
        theme: 'js',
        ask: 'Какие методы есть у Объектов',
        level: 1
    },
    {
        id: 29,
        theme: 'js',
        ask: 'Что такое ООП?',
        level: 1
    },
    {
        id: 30,
        theme: 'js',
        ask: '4 Парадигмы ООП, и что они значат',
        level: 2
    },
    {
        id: 31,
        theme: 'js',
        ask: 'Что делает цикл for in, и чем он опасен?',
        level: 2
    },
    {
        id: 32,
        theme: 'js',
        ask: 'что происходит со старым значением в переменной, после того как мы ее переопределили?',
        level: 1
    },
    {
        id: 33,
        theme: 'js',
        ask: 'как называются языки программирования, в которых мы можем не связывать типы данных с переменной?',
        level: 1
    },
    {
        id: 34,
        theme: 'js',
        ask: 'Как будет вести себя результат вычисления, если где-то в выражении будет NaN?',
        level: 2
    },
    {
        id: 35,
        theme: 'js',
        ask: 'чему равно сравнение null == undefined? что можете рассказать об этом сравнении?',
        level: 1
    },
    {
        id: 36,
        theme: 'js',
        ask: 'Как сравниваются строки?',
        level: 2
    },
    {
        id: 37,
        theme: 'js',
        ask: 'Какие логические операторы есть в js? как они работают?',
        level: 1
    },
    {
        id: 38,
        theme: 'js',
        ask: 'Что такое "use strict"',
        level: 2
    },
    {
        id: 39,
        theme: 'js',
        ask: 'Что вы можете рассказать про оператор "??"',
        level: 1
    },
    {
        id: 40,
        theme: 'js',
        ask: 'как называется повторение шага в цикле?',
        level: 1
    },
    {
        id: 41,
        theme: 'js',
        ask: 'Как можно завершить цикл, или перейти к следующей итерации цикла?',
        level: 2
    },
    {
        id: 42,
        theme: 'js',
        ask: 'Как можно выйти из нескольких уровней цикла?',
        level: 2
    },
    {
        id: 43,
        theme: 'js',
        ask: 'Что вы можете рассказать о конструкции switch case?',
        level: 1
    },
    {
        id: 44,
        theme: 'js',
        ask: 'Что происходит с внешней переменной, если в функции мы объявляем переменную с таким же именем',
        level: 1
    },
    {
        id: 45,
        theme: 'js',
        ask: 'Что такое параметр по умолчанию, как его задать?',
        level: 1
    },
    {
        id: 46,
        theme: 'js',
        ask: 'Если параметр не указан, то его значение?',
        level: 1
    },
    {
        id: 47,
        theme: 'js',
        ask: 'Что произойдет если использовать return без значения?',
        level: 1
    },
    {
        id: 48,
        theme: 'js',
        ask: 'Почему не следует добавлять перенос строки между return и его значением?',
        level: 1
    },
    {
        id: 49,
        theme: 'js',
        ask: 'функция это значение?',
        level: 1
    },
    {
        id: 50,
        theme: 'js',
        ask: 'Что такое callback функция?',
        level: 1
    },
    {
        id: 51,
        theme: 'js',
        ask: 'Что такое транспилер и полифил?',
        level: 2
    },
    {
        id: 52,
        theme: 'js',
        ask: 'Что такое линтер?',
        level: 1
    },
    {
        id: 53,
        theme: 'js',
        ask: 'Принципы SOLID',
        level: 2
    },
    {
        id: 54,
        theme: 'js',
        ask: 'что такое кроссбраузерность',
        level: 1
    },
    {
        id: 55,
        theme: 'js',
        ask: 'Что такое HTTP, какие у него есть методы?',
        level: 1
    },
    {
        id: 56,
        theme: 'js',
        ask: 'Что такое Json',
        level: 1
    },
    {
        id: 57,
        theme: 'js',
        ask: 'Что такое Ajax',
        level: 1
    },
    {
        id: 58,
        theme: 'js',
        ask: 'Что такое a11y',
        level: 2
    },
    {
        id: 59,
        theme: 'js',
        ask: 'Что такое symbol? Где его можно использовать?',
        level: 2
    },
    {
        id: 60,
        theme: 'js',
        ask: 'Можем ли мы сделать symbol с двумя одинаковыми именами единой сущностью?',
        level: 3
    },
    {
        id: 61,
        theme: 'js',
        ask: 'как преобразуется объект при математических операциях?',
        level: 3
    },
    {
        id: 62,
        theme: 'js',
        ask: 'можем ли мы повлиять на преобразование объекта?',
        level: 3
    },
    {
        id: 63,
        theme: 'js',
        ask: 'Что такое this/контекст?',
        level: 2
    },
    {
        id: 64,
        theme: 'js',
        ask: 'call, apply, bind, для чего они нужны? в чем их разница?',
        level: 2
    },
    {
        id: 65,
        theme: 'js',
        ask: 'Как работает прототипное наследование в js?',
        level: 2
    },
    {
        id: 66,
        theme: 'js',
        ask: 'В чем разница между __proto__ и prototype?',
        level: 3
    },
    {
        id: 67,
        theme: 'js',
        ask: 'В чем отличие forEach от map?',
        level: 1
    },
    {
        id: 68,
        theme: 'js',
        ask: 'В чем разница между переменной , которая является: null, undefined?',
        level: 1
    },
    {
        id: 69,
        theme: 'js',
        ask: 'Что вы можете рассказать о  переменной объявленной без var/let/const?',
        level: 2
    },
    {
        id: 70,
        theme: 'js',
        ask: 'В чем разница между объектами хоста и собственными объектами?',
        level: 2
    },
    {
        id: 71,
        theme: 'js',
        ask: 'Что такое тернарный оператор, почему он так называется',
        level: 1
    },
    {
        id: 72,
        theme: 'js',
        ask: 'Объясните разницу между синхронными и асинхронными функциями',
        level: 1
    },
    {
        id: 73,
        theme: 'js',
        ask: 'что такое функции высшего порядка?',
        level: 2
    },
    {
        id: 74,
        theme: 'js',
        ask: 'что такое promise?',
        level: 1
    },
    {
        id: 75,
        theme: 'js',
        ask: 'Как называются внутренние состояния Promise?',
        level: 2
    },
    {
        id: 76,
        theme: 'js',
        ask: 'Расскажите о методах Promise',
        level: 1
    },
    {
        id: 77,
        theme: 'js',
        ask: 'Что вы можете рассказать про асинхронность?',
        level: 2
    },
    {
        id: 78,
        theme: 'js',
        ask: 'Что такое Async/Await',
        level: 1
    },
    {
        id: 79,
        theme: 'js',
        ask: 'Что происходит с массивами, когда мы пытаемся их сложить?',
        level: 2
    },
    {
        id: 80,
        theme: 'js',
        ask: 'Почему js не может работать напрямую с памятью компьютера?',
        level: 2
    },
    {
        id: 81,
        theme: 'js',
        ask: 'Что происходит, когда мы вводим url в адресную строку и нажимаем enter?',
        level: 2
    },
    {
        id: 82,
        theme: 'js',
        ask: 'Что приходит с сервера первым html/css/js или все вместе?',
        level: 2
    },
    {
        id: 83,
        theme: 'js',
        ask: 'В чем отличия неопределенной переменной и необъявленной?',
        level: 1
    },
    {
        id: 84,
        theme: 'js',
        ask: 'Почему мы можем обратиться к свойству примитивного типа, ведь это примитив?',
        level: 2
    },
    {
        id: 85,
        theme: 'js',
        ask: 'Как проверить число на NaN?',
        level: 2
    },
    {
        id: 86,
        theme: 'js',
        ask: 'Как работает eventLoop?',
        level: 2
    },
    {
        id: 87,
        theme: 'js',
        ask: 'Что вы можете рассказать о генераторах и итераторах?',
        level: 2
    },
    {
        id: 88,
        theme: 'js',
        ask: 'Что такое Map и Set?',
        level: 2
    },
    {
        id: 89,
        theme: 'js',
        ask: 'Что такое webPack, какой опыт работы с ним вы имеете?',
        level: 2
    },
    {
        id: 90,
        theme: 'js',
        ask: 'Сколько прототипов может иметь объект?',
        level: 3
    },
    {
        id: 91,
        theme: 'js',
        ask: 'Что такое ошибка cors, способы обхода?',
        level: 2
    },
    {
        id: 92,
        theme: 'js',
        ask: 'Что такое CDN?',
        level: 2
    },
    {
        id: 93,
        theme: 'js',
        ask: 'Что такое модель OSI? Модель OSI',
        level: 3
    },
    {
        id: 94,
        theme: 'js',
        ask: 'Что такое сервис-воркер?',
        level: 2
    },
    {
        id: 95,
        theme: 'js',
        ask: 'что такое веб-воркеры?',
        level: 2
    },
    {
        id: 96,
        theme: 'js',
        ask: 'Что такое GateWay и Backend-for-Frontend?',
        level: 3
    },
    {
        id: 97,
        theme: 'js',
        ask: 'Что такое SSE?',
        level: 2
    },
    {
        id: 98,
        theme: 'js',
        ask: 'Что такое Web-socket?',
        level: 2
    },
    {
        id: 99,
        theme: 'js',
        ask: 'Что такое TLS (SSL)',
        level: 3
    },
    {
        id: 100,
        theme: 'js',
        ask: 'Что за метод Object.create()?',
        level: 2
    },
    {
        id: 101,
        theme: 'js',
        ask: 'Что за метод Object.assign(target, source1, source2 ...)?',
        level: 2
    },
    {
        id: 102,
        theme: 'js',
        ask: 'Что за метод Object.prototype.hasOwnProperty()?',
        level: 2
    },
    {
        id: 103,
        theme: 'js',
        ask: 'Что за метод Array.flat()?',
        level: 2
    },
    {
        id: 104,
        theme: 'js',
        ask: 'Как мы можем копировать глубоко объект?',
        level: 2
    },
    {
        id: 105,
        theme: 'js',
        ask: 'Что произойдет, если мы попытаемся скопировать глубоко вложенный объект, через Object.Assign()',
        level: 2
    },
]

export default jsAsk