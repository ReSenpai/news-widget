class NewsItem {
    /**
     * News class
     * @param {Object} param0 Constructor object
     * @param {String} param0.title News title
     * @param {String} param0.description News description
     * @param {String} param0.author News author
     * @param {String} param0.publishedAt News release time
     * @param {String} param0.url Link to source
     */
    constructor({title, description, author, publishedAt, url}, callbacks) {
        this.title = this._createTitleElement(title);
        this.author = this._createAuthorElement(author);
        this.publishedAt = this._createPublishedAt(publishedAt);
        this.url = this._createUrl(url);
        this.description = this._createDescription(description);
        this.readStatus = this._createReadStatus();
        this.callbacks = callbacks;
        this.newsElement = null;
        this._collectNewsItemElement();
        return this.newsElement;
    }
    /**
     * Create html element
     * @param {String} type Element type
     * @param {String} text Text content
     */
    _createElement(type, text) {
        const element = document.createElement(type);
        element.textContent = text ? `Автор - ${text}` : 'Автор не указан';
        return element;
    }
    /**
     * Cut the text
     * @param {String} text Text we want to trim
     * @param {Number} size Number of symbols
     */
    _textCutter(text, size) {
        if (text.length > size) return text.substring(0, size - 3) + '...';
        return text;
    }
    /**
     * Create html title element
     * @param {*} value 
     */
    _createTitleElement(value) {
        value = this._textCutter(value, 60);
        const title = this._createElement('h3', value);
        title.classList.add('title');
        return title;
    }
    /**
     * Create html author element
     * @param {String} value 
     */
    _createAuthorElement(value) {
        const author = this._createElement('span', value);
        return author;
    }
    /**
     * Create html publish date and time element
     * @param {String} value 
     */
    _createPublishedAt(value) {
        const publishedAt = document.createElement('span');
        const dateContainer = document.createElement('div');
        const date = new Date(value);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getUTCMinutes()).slice(-2);
        const seconds = ('0' + date.getUTCSeconds()).slice(-2);
        const days = ('0' + date.getDate()).slice(-2);
        const months = ('0' + (date.getMonth() + 1)).slice(-2);
        const years = date.getFullYear();
        const currentDate = `Опубликовано ${days}.${months}.${years} в ${hours}:${minutes}:${seconds}`;
        publishedAt.textContent = currentDate;

        dateContainer.classList.add('date-container');
        publishedAt.classList.add('date');

        dateContainer.append(publishedAt);

        return dateContainer;
    }
    /**
     * Create link to source news
     * @param {String} value 
     */
    _createUrl(value) {
        const url = document.createElement('a');
        url.setAttribute('href', value);
        url.setAttribute('target', '_blank');
        url.textContent = 'подробнее';
        url.classList.add('detailed');
        url.addEventListener('click', this.setReadStatus)
        return url;
    }
    /**
     * Create html description element
     * @param {String} value 
     */
    _createDescription(value) {
        value = this._textCutter(value, 200);
        const description = this._createElement('p', value);
        description.classList.add('description');
        return description;
    }
    /**
     * Create html read status element
     */
    _createReadStatus() {
        const status = document.createElement('span');
        return status;
    }
    /**
     * Collect block news
     */
    _collectNewsItemElement() {
        const wrapper = document.createElement('section');
        const br = document.createElement('br');
        const headerContainer = document.createElement('div');

        headerContainer.classList.add('header-container');
        headerContainer.append(this.readStatus, this.author);
        this.description.append(br, this.url);

        wrapper.append(headerContainer, this.title, this.description, this.publishedAt);
        wrapper.classList.add('widget-item');
        this.newsElement = wrapper;
    }
    /**
     * Set status - read
     */
    setReadStatus = () => {
        if(!this.readStatus.textContent) {
            this.readStatus.textContent = 'Прочитано';
            this.callbacks.lowerNewsButtonCounter();
        }
        return;
    }
}

export default NewsItem;