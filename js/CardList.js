class CardList {
    constructor(selector, api) {
        this.container = document.querySelector(selector);
        this.list = [];
        this.apiVar = api;
    }

    addCard(apiObj) {
        const place = new Card(apiObj.name, apiObj.link, apiObj);
        this.container.appendChild(place.element);
        this.list.push(place);
    }

    render() {
        this.apiVar.fetchCardRenderApi()
            .then((res) => {
                for (let i = 0; i < res.length; i++) {
                    this.addCard(res[i]);
                }
            });
        /* 
         можно лучше : используйте for of для перебора массива с объектами
         https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of 
         как пример:
         
         const array1 = ['a', 'b', 'c'];
         for (const element of array1) {
          console.log(element);
         }
         
        */
    }
}
