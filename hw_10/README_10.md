# Домашнее задание 10. GraphQl

    API для онлайн магазина проката фильмов


## Как проверить ДЗ?

### 1. Запустить сервер

1. `npm i`
2. `npm run server`

### 2. Сделать тестовые запросы

2.1. Перейти по адресу `localhost:4000`. Откроются окна для вставки кода запроса и просмотра ответа сервера

2.2. Скопировать код в поле запроса:

- 1.  Показать фильмы

```
query ShowAllMoovies{
    moovies {
        id
        title
    }
  }
}
```
- 2. Показать один фильм
```
query ShowOneMoovie {
    getOneMoovie(id:12) {
        id
        title
        genre
    }
}
```

- 3. Заказать фильм

```
mutation {
    addOrder(buyerId:1, moovieId: 15) {
        id
        buyer {
            username
        }
        moovies {
            title
        }
    }
 }
```

- 4. Показать текущие заказы

```
query ShowAllOrders{
    orders {
        id
        buyers {
            username
        }
        moovies {
            title
            genre
        }
    }
  }
}
```
4. Удалить заказ

    Скопировать id заказа из выведенных ранее заказов, вставить в запрос

```
mutation {
    deleteOrder(orderId: "b5bb04d0-b839-11e9-9101-5577b3fed2ae") { // Вставить здесь id заказа
        ... on Order {
        id
        buyer {
            username
            }
        }
        ... on OrderError {
            message
        }
    }
}
```