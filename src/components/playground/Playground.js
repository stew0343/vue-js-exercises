export default {
    name: 'Playground',
    data() {
        return {
            backgroundClassName: "red-background",
            counter: 0,
            message: 'static message',
            anchorTag: '<a href="http://google.ca"> {{ message }} </a>',
            nameInput: 'No Name'
        };
    },
    methods: {
        handleClick(value) {
            this.counter++;
            /* eslint-disable */
            console.log("value", value);
            this.message = `you are clicking this ${this.counter} times!`
            // old way
            /*
            if (this.counter % 2 === 0) {
                this.backgroundClassName = 'green-background';
            } else {
                this.backgroundClassName = 'red-background';
            }
            */

            // new way
            this.backgroundClassName = this.counter % 2 ? 'green-background' : 'red-background';

            this.message = this.nameInput;
        }
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    },
    watch: {
    nameInput(newValue, oldValue) {
    /* eslint disable no console */
        console.log('old value ', oldValue);
        console.log('new value ', newValue);
        }
    }
}