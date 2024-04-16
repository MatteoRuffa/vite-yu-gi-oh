import { reactive} from 'vue';

export const store = reactive ({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endPoint: {
        cardInfo: 'cardinfo.php/',
    },
    options: {
        params: {
            num: 20,
            offset: 0
        },
    },
    data: [],
    loading: false,
    
});