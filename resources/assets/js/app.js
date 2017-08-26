


import algoliaComponent from '../component';
import AisInput from './Input.vue';
import AisClear from './Clear.vue';


export default {
    mixins: [algoliaComponent],
    props: {
        placeholder: {
            type: String,
            default: '',
        },
        submitTitle: {
            type: String,
            default: 'search',
        },
        clearTitle: {
            type: String,
            default: 'clear',
        },
        autofocus: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            blockClassName: 'ais-search-box',
        };
    },
    methods: {
        onFormSubmit() {
            const input = this.$el.querySelector('input[type=search]');
            input.blur();
        },
    },
    components: {
        AisInput,
        AisClear,
    },
};
