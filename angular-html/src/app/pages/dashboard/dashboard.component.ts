import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  // Count Up
  countUpOption1 = {
    useIndianSeparators: true,
    prefix: '+',
    suffix: 'k',
    decimalPlaces: 2,
    separator: '',
  };
  countUpOption2 = {
    useIndianSeparators: true,
    separator: '',
  };
  countUpOption3 = {
    useIndianSeparators: true,
    prefix: '$',
    suffix: 'k',
  };

  ngOnInit(): void {
    // Chart
    new Chart('salesChart', {
      type: 'doughnut',
      data: {
        labels: ['21%', '43%', '33%'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [21, 43, 33],
            backgroundColor: ['#99C53C', '#9952E1', '#4D97DB'],
            hoverOffset: 4,
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: 70,
        offset: 6,
        plugins: {
          legend: {
            position: 'bottom',
            align: 'center',
            labels: {
              color: '$textDark',
              boxWidth: 10,
              boxHeight: 10,
              borderRadius: 60,
              useBorderRadius: true,
              usePointStyle: true,
              padding: 34,
              font: {
                size: 18,
                lineHeight: 24,
                family: '"Poppins", sans-serif',
              },
            },
          },
        },
        animation: {
          duration: 2000,
          easing: 'easeOutSine',
        },
      },
    });
  }

  // Checked Checkbox
  checked1 = true;
  checked2 = true;
  checked3 = true;
  checked4 = true;

  // Sorting Todo Task List
  tasks: Task[] = [
    { description: 'Managing other tasks.', checked: false },
    { description: 'Managing other tasks.', checked: true },
    { description: 'Managing other tasks.', checked: false },
    { description: 'Managing other tasks.', checked: false },
    { description: 'Managing other tasks.', checked: false },
    { description: 'Managing other tasks.', checked: true },
    { description: 'Managing other tasks.', checked: true },
    { description: 'Managing other tasks.', checked: false },
    { description: 'Managing other tasks.', checked: true },
    // Add more tasks as needed
  ];

  showCompleted = false;

  filterTasks() {
    if (this.showCompleted) {
      return this.tasks.filter((task) => task.checked);
    } else {
      return this.tasks;
    }
  }
}

interface Task {
  description: string;
  checked: boolean;
}
