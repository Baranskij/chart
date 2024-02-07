<template>

<div>
    <div id="accordion" class="accordion">
        <div class="accordion__item" v-for="list in acordeon" :key="list.id" :id="list.id">
          <div :class="[ list.img ]"></div>
          <div class="accordion__header" @click="colapseAcordeon" :class="[list.listItem.length ? 'accordion__header-icon' : '']">
            {{ list.name }}
          </div>
          <div class="accordion__body">
            <div class="accordion__content" v-for="element in list.listItem" :key="element.id">
                {{ element.item }}
            </div>
          </div>
        </div>
    </div>
</div>

</template>
<script>
import { mapGetters, mapActions } from "vuex";
    export default {
        props: ['acordeon'],
        data() {
            return{}
        },
        mounted(){
            
        },
        computed: mapGetters(["navItem"]),
        methods: {
            colapseAcordeon(event){
                
                const parent = event.target.parentNode
                let nonActiv = document.querySelectorAll('.accordion__header')
                if(parent.classList.contains('accordion__item_show')){
                    parent.classList.remove('accordion__item_show')
                    event.target.classList.remove('accordion__item-activ')
                    this.$store.state.chart.navItem = null
                }else{
                    parent.classList.add('accordion__item_show')
                    event.target.classList.add('accordion__item-activ')
                    this.$store.state.chart.navItem = parent.getAttribute('id')
                }
                nonActiv.forEach(item => {
                    if(item !== event.target) {
                        if(item.parentNode.classList.contains('accordion__item_show')){
                            item.parentNode.classList.remove('accordion__item_show');
                            item.classList.remove('accordion__item-activ')
                        }
                    }
                })
            }
        }
    }
</script>
<style scoped> 
    .accordion {
        max-width: 16rem;
        margin: 1rem;
        border-bottom: 1px solid #efe8e8;
    }
    .accordion__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.55rem 1rem;
        color: #000000;
        font-weight: 500;
        background-color: #fff;
        border-radius: 1rem;
        cursor: pointer;
        transition: background-color 0.2s ease-out;
        margin-bottom: 0.2rem;       
    }

    .accordion__header-icon::after {
        flex-shrink: 0;
        width: 1.25rem;
        height: 1.25rem;
        margin-left: auto;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000000'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-size: 1.25rem;
        content: "";
        transition: transform 0.2s ease-out;
    }

    .accordion__item_show .accordion__header::after,
    .accordion__item_slidedown .accordion__header::after {
        transform: rotate(-180deg);
    }

    .accordion__header:hover {
        background-color: #cccdce;
    }

    .accordion__content {
        padding: 0.75rem 1rem;
        background: #fff;
        border-radius: 1rem;
    }
    .accordion__content:hover {
        background-color: #cccdce;
    }
    .accordion__item:not(.accordion__item_show) .accordion__body {
        display: none;
    }
    .accordion__item-activ {
        background-color: #cccdce;
    }
</style>