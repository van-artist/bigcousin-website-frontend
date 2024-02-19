<template>
    <div class="calendar-container">
        <div class="table-head">
            <div class="table-head-day">
                {{ currentDay }}
            </div>
            <div class="table-head-month">
                {{ monthNames[currentMonth] }}
            </div>
            <div class="table-head-year">
                {{ currentYear }}
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="week in weeks" :key="week">
                    <td v-for="{ day, isToday } in week" :key="day" :class="{ today: isToday }">{{ day }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: ' MyCalendar',
    data() {
        return {
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth(),
            currentDay: new Date().getDate(),
            weeks: [],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        };
    },
    methods: {
        generateCalendar() {
            const now = new Date();
            const today = now.getDate();
            const isCurrentMonth = this.currentYear === now.getFullYear() && this.currentMonth === now.getMonth();

            const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
            const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

            const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
            const paddingDays = Array(firstDay).fill('');
            const calendarDays = [...paddingDays, ...days];

            this.weeks = [];
            while (calendarDays.length) {
                const week = calendarDays.splice(0, 7).map(day => ({
                    day: day !== '' ? day : null, // 确保空白天使用null而不是空字符串
                    isToday: isCurrentMonth && day === today // 添加是否为今天的标识
                }));
                this.weeks.push(week);
            }
        }

    },
    mounted() {
        this.generateCalendar();
    }
}
</script>

<style scoped>
.calendar-container {
    width: 100%;
    min-width: 100%;
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    padding: 20px;

}

.table-head {
    background-color: #546aa9;
    color: #ffffff;
    min-height: 150px;
    text-align: left;
    font-size: 26px;
    border-radius: 10px 10px 0 0;
    padding: 10px;
    /* 背景替换为本地资源图片 */
    background-image: url('~@/assets/canlendar-covers/cover1.gif');
}

th {
    color: #007bff;
    padding: 10px 0;
    text-align: center;
    font-size: 16px;
    border-radius: 10px;
    margin: 10px;
}

td {
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
    color: #949399;
    /* 字体加粗 */
    font-weight: bold;
    transition: background-color 0.3s ease;
    /* 平滑过渡效果 */
    border-radius: 50%;
    /* 使得每个日期默认就显示为圆形 */
    cursor: pointer;
    /* 显示可点击的手形光标 */
}

td:hover {
    cursor: pointer;
    color: #007bff;
}

/* 高亮今天的日期 */
.today {
    padding: 10px;
    animation: pulseAnimation 2s infinite;
}

td:hover,
.today {
    color: #007bff;
}


/* 调整周末日期的颜色 */
.weekend {
    color: #ff0000;
    /* 为周末日期使用红色 */
}

.table-head-year {
    font-size: 14px
}

.table-head-day {
    font-size: 45px;
    font-weight: bold;
    padding: 10px;
}
</style>

