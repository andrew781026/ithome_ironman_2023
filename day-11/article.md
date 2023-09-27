# [Day 11] Angular In Astro - analogjs

最近找到 Angular 在 Astro 的 Integration , 他很奇特 , 因為在官方文件中並沒有提到他

這就是 [@analogjs/astro-angular](https://analogjs.org/docs/packages/astro-angular/overview) 

下面我試著串串看這個 Integration

```shell
# 使用 npm 建立新專案
npm create astro@latest -- --template basics
# 安裝 angular integration
npx astro add @analogjs/astro-angular
```

```angular
import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgIf],
  template: `
    <p>Hello from Angular!!</p>

    <p *ngIf="show">{{ helpText }}</p>

    <button (click)="toggle()">Toggle</button>
  `,
})
export class HelloComponent {
  @Input() helpText = 'help';

  show = false;

  toggle() {
    this.show = !this.show;
  }
}
```

```vue
---
import { HelloComponent } from '../components/hello.component';
---

<HelloComponent client:visible helpText="Helping" />
```

### 參考資料

- [@analogjs/astro-angular](https://analogjs.org/docs/packages/astro-angular/overview)
