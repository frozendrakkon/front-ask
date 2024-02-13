import { type TAsk } from "@/types/index";


export const codeAsk: Array<TAsk> = [
    {
        id: 1,
        theme: 'code',
        ask: 'Есть массив чисел, нужно найти максимальное число',
        level: 1
    },
    {
        id: 2,
        theme: 'code',
        ask: 'Есть список строк, найти те, которые являются палиндромами',
        level: 1
    },
    {
        id: 3,
        theme: 'code',
        ask: 'Напишите рекурсивную функцию на примере поиска чисел Фибоначчи. На вход функция получает порядковый номер числа, а возвращает само число',
        level: 2
    },
    {
        id: 4,
        theme: 'code',
        ask: 'Развернуть одномерный массив без создания дополнительного массива [1, 2, 3 ,4] => [4, 3, 2, 1]',
        level: 1
    },
    {
        id: 5,
        theme: 'code',
        ask: 'Напишите код, который выводит все простые числа из интервала от 2 до n',
        level: 1
    },
    {
        id: 6,
        theme: 'code',
        ask: 'Есть объект salaries, в котором указаны зарплаты сотрудников - sergei: 500, roma: 300... Нужно написать код, который суммирует зарплаты всех сотрудников, если объект пустой, то возвращается 0',
        level: 1
    },
    {
        id: 7,
        theme: 'code',
        ask: 'Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2, не числовые оставляет без изменений',
        level: 1
    },
    {
        id: 8,
        theme: 'code',
        ask: 'Создайте объект calculator (калькулятор) с тремя методами',
        level: 1
    },
]

export default codeAsk