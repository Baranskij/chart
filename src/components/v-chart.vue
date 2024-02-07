<template>
    <div class="chart">
        <h2 class="chart-header">
            {{ navItem }}
        </h2>
    <v_line :data="data" :options="options" v-if="data.labels.length > 0"/>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import v_line from './v_line.vue'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineController,
    LineElement
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineController, LineElement)

export default {
    props: ['navItem'],
    components: {
        v_line
    },
    data() {
        return {
            data: {
                labels: [],
                datasets: [
                    {
                        label: 'Коммиты на GitHub',
                        backgroundColor: [
                            'rgb(75, 192, 192)',
                        ],
                        borderColor: 'rgb(75, 192, 192)',
                        data: [40, 20, 12, 39, 10, 40, 39, 25, 40, 20, 12, 11],
                        lineTension: 0.5,
                        bezierCurve: true,                        
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        cornerRadius: 17,
                        caretSize: 10,
                        padding: 10,
                        borderColor: "gray",
                        borderWidth: 1,
                        titleMarginBottom: 4,
                        bodyFont: {
                            "size": 20
                        },
                        titleFont: {
                            "size": 15
                        }
                    }
                },       
                
            },
            date: []
        }
    },
    async mounted() {
        this.test()
    },
    computed: mapGetters([]),
    methods: {
      test(){
        const today = new Date();
        const currentDay = today.getDate();
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        const daysArray = [];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const currentMonth = monthNames[today.getMonth()];
        for (let i = 1; i <= lastDay; i++) {
                if (i <= currentDay) {
                    daysArray.push(i + ' ' + currentMonth);
                }
            }
        this.data.labels = daysArray
      },
    }
}
</script>

<style scoped>
    .chart {
        width: 100%;
        box-shadow: 0px 0px 20px 2px #c5c6d1;
        border-radius: 10px;
        padding: 40px 25px 25px;
    }
    .chart-header{
        text-align: left;
        width: fit-content;
    }

</style>
