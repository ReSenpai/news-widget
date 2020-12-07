CDN - `https://unpkg.com/html-academy-widget@1.0.0/build/widget.min.js`


Для подключения виджета спопируйте:

```html
<div id="nwidget"></div> 
<script src="https://unpkg.com/html-academy-widget@1.0.0/build/widget.min.js" type="text/javascript"></script>
<script type="text/javascript">
    const locationPoint = document.getElementById('nwidget');
    const widget = new NWidget(locationPoint);
    // Опции можно не вызывать, тогда установяться параметры по умолчанию.
    widget.options({
        width: '300px', // Ширина виджета. По умолчанию 300px
        height: '90vh', // Высота виджета. По умолчанию 90vh
        button: 'right', // Позиция кнопки виджета right | left . По умолчанию right
        position: 'right', // Расположение виджета right | left . По умолчанию right
        api: 'local' // Подключение к апи online | local. По умолчанию local
    })
    widget.render();
</script>
```

API новостей - [тут](https://newsapi.org/s/russia-news-api)

Если будете подключать `api: 'online'`, в режиме разработчика не забудьте разрешить кроссдоменные запросы на вашем локальном сервере.



