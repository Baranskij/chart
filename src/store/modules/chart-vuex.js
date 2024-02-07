export default {
    actions: {
    },
    mutations: {

    },
    state: {
        navItem: null,
        acordeonTop: [
            { id: 'Overview', name: 'Overview', listItem: [], img:'Overview-img' },
            { id: 'Pages', name: 'Pages', listItem: [
                { item: 'Some Pages', id: 2 },
                { item: 'Some Pages', id: 3 },
                { item: 'Some Pages', id: 4 },
                { item: 'Some Pages', id: 5 },
            ], img:'' },
            { id: 'Sales', name: 'Sales', listItem: [
                {item: 'Product List' , id: 1},
                { item: 'Biling', id: 2 },
                { item: 'Invoice', id: 3 }] },
            { id: 'Messages', name: 'Messages', listItem: [
                { item: 'Some Messages', id: 2 },
                { item: 'Some Messages', id: 3 },
                { item: 'Some Messages', id: 4 },
                { item: 'Some Messages', id: 5 },
            ], img:'' },
            { id: 'Authentication', name: 'Authentication', listItem: [
                { item: 'Some Authentication', id: 2 },
                { item: 'Some Authentication', id: 3 },
                { item: 'Some Authentication', id: 4 },
                { item: 'Some Authentication', id: 5 },
            ], img:'' },
        ],
        acordeonBottom: [
            { id: 'Docs', name: 'Docs', listItem: [], img:'' },
            { id: 'Components', name: 'Components', listItem: [], img:'' },
            { id: 'Help', name: 'Help', listItem: [], img:'' },
        ],
    },
    getters: {
        acordeonTop(state) {
            return state.acordeonTop
        },
        acordeonBottom(state) {
            return state.acordeonBottom
        },
        navItem(state) {
            return state.navItem
        },
    },
}