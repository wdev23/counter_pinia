<template>
    <CounterPinia />
</template>

<script setup>
import CounterPinia from '../components/CounterPinia.vue'
</script>

<style lang="scss">
.counter__container {
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    display: grid;
    place-content: center;

    p {
        font-size: 2.6rem;
        font-weight: 600;
        text-align: center;
        padding-bottom: 1.2rem;
    }


    .counter__content {
        max-width: 90%;
        width: 460px;
        margin: 0 auto;
        height: 300px;
        background-color: blue;
        border-radius: 8px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); 

        display: flex;
        justify-content: center;
        align-items: center;
        // grid-template-columns: 1fr;
        flex-direction: column;
        gap: 1.2rem;

        label {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.1rem;
            color: #e7e7e7;
            font-weight: 700;
        }

        input[type="text"] {
            width: 350px;
            margin: 0 auto;
            padding: 5px 5px;
            align-self: auto;
            border-radius: 8px;
            text-align: center;
        }

        .result {
            background-color: #fff;
            padding: 15px 25px;
            width: 120px;
            margin: 0 auto;
            text-align: center;
            border-radius: 8px;
            font-size: 3.2rem;
            color: #000;
            justify-self: center;

        }

         .buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
        }

    }
}
</style>