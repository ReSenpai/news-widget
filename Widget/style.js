const styles = `
.widget-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  position: absolute;
  z-index: 99999;
  bottom: 10px;
}

.news-container {
  display: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 300px;
  height: 90vh;
  padding: 10px;
  overflow-y: scroll;
}

.widget-item {
  max-width: 280px;
  max-height: 280px;
  padding: 5px;
  border: 2px solid rgb(139, 134, 134);
  background-color: whitesmoke;
  border-radius: 5px;
  font-family: monospace;
  margin-bottom: 5px;
}

.header-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.title {
  font-size: 17px;
}

.description {
  font-size: 14px;
}

.icon-button-container {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

.icon-news {
  background: url('https://i.ibb.co/kGCCv3Z/baseline-article-black-36dp.png');
  width: 36px;
  height: 36px;
}

.icon-button {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 50px;
  height: 50px;
  color: #333333;
  background: #dddddd;
  border: none;
  outline: none;
  border-radius: 50%;
  margin: 0 10px;
}

.icon-button:hover {
  cursor: pointer;
}

.icon-button:active {
  background: #cccccc;
}

.icon-button__badge {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 25px;
  height: 25px;
  background: red;
  color: #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-radius: 50%;
}

.news-container::-webkit-scrollbar {
  width: 1em;
}
 
.news-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
.news-container::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
`

export default styles;