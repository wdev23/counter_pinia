<template>
    <div class="counter__container">
        <div class="even__odd">
            <p>This counter is {{ theCounter.oddOrEven }}</p>
        </div>
        <div class="counter__content">
            <label for="counterTitle">{{ theCounter.title }}</label>
            <input type="text" id="counterTitle" v-model="theCounter.title" />
            <h3 class="result">{{ theCounter.count }}</h3>
            <div class="buttons">
                <button class="btn" @click="theCounter.increaseCounter(1)">+</button>
                <button class="btn" @click="theCounter.decreaseCounter(1)">-</button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const theCounter = useCounterStore()

</script>
