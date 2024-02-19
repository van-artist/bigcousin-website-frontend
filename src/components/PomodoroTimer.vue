<template>
    <div class="pomodoro-timer">
        <h2>番茄钟</h2>
        <div class="timer-display">
            {{ formatTime }}
        </div>
        <div class="controls">
            <button v-if="!timerRunning" @click="startPomodoro">开始计时</button>
            <button v-else @click="stopTimer">停止</button>
            <button @click="startRest">开始休息</button>
        </div>
        <div class="settings">
            番茄时间（分钟）: <input type="number" v-model.number="pomodoroTime" />
            休息时间（分钟）: <input type="number" v-model.number="restTime" />
        </div>
        <div v-if="sessionType !== 'work'" class="progress">
            <div :style="{ width: progress + '%' }" class="progress-bar"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PomodoroTimer',
    data() {
        return {
            defaultPomodoroTime: 25,
            defaultRestTime: 5,
            currentTime: 0,
            timer: null,
            timerRunning: false,
            pomodoroTime: 25,
            restTime: 5,
            sessionType: 'work', // 'work' or 'rest'
        };
    },
    computed: {
        formatTime() {
            let minutes = Math.floor(this.currentTime / 60);
            let seconds = this.currentTime % 60;
            return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        },
        progress() {
            let totalTime = this.sessionType === 'work' ? this.pomodoroTime * 60 : this.restTime * 60;
            return (this.currentTime / totalTime) * 100;
        },
    },
    methods: {
        startPomodoro() {
            this.sessionType = 'work';
            this.currentTime = this.pomodoroTime * 60;
            this.startTimer();
        },
        startRest() {
            this.sessionType = 'rest';
            this.currentTime = this.restTime * 60;
            this.startTimer();
        },
        startTimer() {
            if (this.timer) {
                clearInterval(this.timer);
            }
            this.timerRunning = true;
            this.timer = setInterval(() => {
                if (this.currentTime > 0) {
                    this.currentTime--;
                } else {
                    this.stopTimer();
                    alert(this.sessionType === 'work' ? '休息时间！' : '工作时间！');
                    if (this.sessionType === 'work') {
                        this.startRest();
                    } else {
                        this.startPomodoro();
                    }
                }
            }, 1000);
        },
        stopTimer() {
            clearInterval(this.timer);
            this.timer = null;
            this.timerRunning = false;
        },
    },
};
</script>

<style scoped>
.pomodoro-timer {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    background: linear-gradient(135deg, #ff6347, #ff634780);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: #fff;
}

.timer-display {
    font-size: 3em;
    margin: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 10px;
}

.controls button {
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.controls button:hover {
    background-color: #f76b8a;
}

#start_button {
    background-color: #4caf50;
    color: #fff;
}

#rest_button {
    background-color: #2196f3;
    color: #fff;
}

.settings input {
    width: 60px;
    padding: 10px;
    margin: 10px 10px;
    border: 2px solid #fff;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    color: #000;
}

.progress {
    background-color: #ddd;
    border-radius: 5px;
    margin-top: 20px;
    height: 20px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.progress-bar {
    height: 100%;
    background-color: #f44336;
    border-radius: 5px;
}
</style>
