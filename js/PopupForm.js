// Можно лучше: обычно названия, для примера 'Должно быть от 2 до 30 символов' 
// выносят в отдельный объект. Допустим может появится задача сделать многоязычный сайт
// Для примера : const words = { validationLenght: 'Должно быть от 2 до 30 символов'	} 
// Далее words передаётся в функцию и используется.
const validationErrorLenght = 'Должно быть от 3 до 30 символов';
const validationError = 'Это обязательное поле';
// const objApi = new Api(variable);

class PopupForm extends Popup {
    // переменная objApi ни как не используется
    constructor(selector, obj) {
        super(selector);
        this.form = this.formOpen();
        this.form.addEventListener('submit', () => this.functionForm(event, obj));
        
    }

    functionInput(event) {
        validationInput(event.target);
        validationForm(event.target);
    }

    formOpen() {
        return this.container.querySelector(`div.popup__content form.popup__form`);;
    }

} 