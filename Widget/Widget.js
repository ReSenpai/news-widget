import newsApi from "./Api.js";
import NewsItem from "./NewsItem.js";
import styles from "./style.js";
import localApi from "./localApi.js";

class Widget {
    /**
     * News widget
     * @param {HTMLElement} locationPoint Page rendering point
     */
    constructor(locationPoint) {
        this.locationPoint = locationPoint;
        this.newsContainer = this._createNewsContainer();
        this.widgetContainer = this._createWidgetContainer();
        this.newsButtonCounter = null;
        this.newsButton = this._createWidgetButton();
        this.callbacks = {};
        this.isShow = false;
        this.isOptionsActive = false;
        this.API = null;
    }
    /**
     * Create html widget container element
     */
    _createWidgetContainer() {
        const widgetContainer = document.createElement('div');
        widgetContainer.classList.add('widget-container');
        return widgetContainer;
    }
    /**
     * Create html news container element
     */
    _createNewsContainer() {
        const newsContainer = document.createElement('div');
        newsContainer.classList.add('news-container');
        return newsContainer;
    }
    /**
     * Set the value of the news button counter
     * @param {String} value Counter value
     */
    _setNewsButtonCounter(value) {
        this.newsButtonCounter.textContent = value;
    }
    /**
     * Reduce the news counter by 1
     */
    lowerNewsButtonCounter = () => {
        this.newsButtonCounter.textContent--;
    }
    /**
     * Widget display switch
     */
    handleShowAndCloseWidget = () => {
        this.newsContainer.style.display = this.isShow ? 'block' : 'none';
        this.isShow = !this.isShow;
    }
    /**
     * Create html widget button element
     */
    _createWidgetButton() {
        const iconButtonContainer = document.createElement('div');
        const iconButton = document.createElement('Button');
        const icon = document.createElement('span');
        const counter = document.createElement('span');

        iconButtonContainer.classList.add('icon-button-container');
        iconButton.classList.add('icon-button');
        icon.classList.add('icon-news');
        counter.classList.add('icon-button__badge');

        this.newsButtonCounter = counter;
        
        iconButton.append(icon, counter);
        iconButtonContainer.append(iconButton);
        iconButton.addEventListener('click', this.handleShowAndCloseWidget)
        return iconButtonContainer;
    }
    /**
     * Collect a callback object
     */
    _collectCallbacks() {
        this.callbacks.lowerNewsButtonCounter = this.lowerNewsButtonCounter;
    }
    /**
     * Collect content for news and put it in the newsContainer
     */
    _collectNews() {
        this.API.getNews().then(data => {
            const newsContent = data.articles.map(obj => new NewsItem(obj, this.callbacks));
            this._setNewsButtonCounter(data.articles.length);
            newsContent.forEach(element => {
                this.newsContainer.append(element);
            });
        }).catch(err => console.error(err));
    }
    /**
     * Collect widget
     */
    _collectWidget() {
        this._collectNews();
        this._collectCallbacks();
        this.widgetContainer.append(this.newsContainer, this.newsButton);
        this.locationPoint.append(this.widgetContainer);
    }
    /**
     * Set styles to the page
     * @param {String} styleString 
     */
    injectCSS(styleString) {
        const head = document.getElementsByTagName('head')[0];
        const style = document.createElement('style');
        style.textContent = styleString;
        head.appendChild(style);
    }
    /**
     * Widget options
     * @param {Object} param0 
     * @param {string} param0.width 
     * @param {string} param0.height
     * @param {string} param0.button
     * @param {string} param0.position
     * @param {string} param0.api
     */
    options({
        width,
        height,
        button,
        position,
        api
    }) {
        this.newsContainer.style.width = width || '300px';
        this.newsContainer.style.height = height || '90vh';
        this.widgetContainer.style.right = '10px';
        if (button === 'left') this.newsButton.style.justifyContent = 'flex-start';
        if (button === 'right') this.newsButton.style.justifyContent = 'flex-end';
        if (position === 'left') {
            this.widgetContainer.style.right = null;
            this.widgetContainer.style.left = '10px';
            this.widgetContainer.style.direction = 'rtl';
        }
        if (position === 'right') {
            this.widgetContainer.style.left = null;
            this.widgetContainer.style.right = '10px';
            this.widgetContainer.style.direction = 'ltr';
        }
        this.API = api === 'online' ? newsApi : localApi;
        this.isOptionsActive = true;
        return;
    }
    /**
     * Render widget
     */
    render() {
        this.injectCSS(styles);
        !this.isOptionsActive && this.options({});
        this._collectWidget();
    }
}


const locationPoint = document.getElementById('html-academy-widget');
const widget = new Widget(locationPoint);
widget.options({
    position: 'right',
    api: 'online'
})
widget.render();

export default Widget;