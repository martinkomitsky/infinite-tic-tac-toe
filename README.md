# infinite-tic-tac-toe
Крестики-нолики на одном экране

- [x] Поле бесконечное
- [x] Ходы поочередные
- [x] Первый ход за крестиками и всегда в клетку с координатой (0,0)
- [x] Условие победы – [C] крестиков/ноликов в ряд по горизонтали, вертикали или диагонали.
    C – произвольный параметр, предусмотреть управление этим параметром при сборке проекта.
- [x] Стек – Typescript, React, Redux.
- [x] В Redux должен быть ровно 1 Action.
Кол-во редюсеров не ограничено, но приветствуются оптимальные решения
- [x] Размер клетки поля по желанию, масштабированием и скроллингом можно пренебречь, считаем, что игра закончится на одном экране. Но будет плюсом, если поле будет действительно бесконечно
- [x] В идеале – юнит-тесты на редюсеры и компоненты, хотя бы по 1.
- [x] Все остальные детали – на ваше усмотрение. Мы хотим видеть структуру, качество и эффективность кода.


### Стек
* ES6
* TypeScript
* React
* Redux
* Webpack
* PostCSS, CSS Modules, Autoprefixer
* StoryBook
* Jest

### Инструменты
* TS Lint
* Style Lint
* Prettier
* Husky

### Разработка

```bash
npm start
# или
npm run storybook
```

### Сборка

```bash
npm run build
```

### Тестирование

```bash
npm run test
```

### Анализ размера бандла

```bash
npm run build:analyze
```

### Параметр для установки победного количества фигур в ряд
```
... webpack ... --env.C=<number>
```
