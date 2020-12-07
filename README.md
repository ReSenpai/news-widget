CDN - `https://unpkg.com/html-academy-widget@1.0.3/build/widget.min.js`


Для подключения виджета спопируйте:

```html
<div id="nwidget"></div> 
<script src="https://unpkg.com/html-academy-widget@1.0.3/build/widget.min.js" type="text/javascript"></script>
<script type="text/javascript">
    const locationPoint = document.getElementById('nwidget');
    const widget = new NWidget(locationPoint);
    // Опции можно не вызывать, тогда установяться параметры по умолчанию.
    widget.options({
        width: '300px', // Ширина виджета. По умолчанию 300px
        height: '90vh', // Высота виджета. По умолчанию 90vh
        button: 'right', // Позиция кнопки виджета right | left . По умолчанию right
        position: 'right', // Расположение виджета right | left . По умолчанию right
    })
    widget.render();
</script>
```



