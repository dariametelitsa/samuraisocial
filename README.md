# :wave: Samurai Social Network

**Экспериментальный** студенческий проект. Цель - сделать нечто близкое к соцсети "Путь самурая", но с использованием актуального технологического стека.

# Использование оригинального репозитория

## Запуск проекта
- для npm: `npm install` => `npm start`
- для yarn: `yarn install` => `yarn start`


## Деплой на gh-pages
- для npm
	- `npm run build` => `npm run deploy`
- для yarn
	- `yarn build` => `yarn deploy`

Результат деплоя на github  <br/>
  
  <img src="doc/github/deploy.jpg" alt="instructions" width="400"/> 
    <br/>
  <hr/>
  <img src="doc/github/deploy-link.png" alt="instructions" width="400"/> 
    <br/>

# Совместная работа над проектом:
1. Сделать `fork` этого проекта (одна из четырех кнопок в правом верхнем углу github -> `create fork`).  <br/>

    <img src="doc/github/to-fork.jpg" alt="instructions" width="800"/>  

2. Клонировать полученный в результате `fork` проект на компьютер (в вашем github аккаунте):  <br/>
    <img src="doc/github/clone-ssh.jpg" alt="instructions" width="500"/>
    - копируем ссылку, предпочтительно использовать SSH (зеленая кнопка `Code` в **вашем** репозитории)
    - в консоли на ПК в папке с проектами прописываем команду `git clone` + скопированная ссылка 
  
	`git clone git@github.com:<YOUR-USERNAME>/<YOUR-REPOSITORY>.git`

3. Установить зависимости:
    - для npm `npm install`
    - для yarn `yarn install`
4. Создать новую ветку для работы. В ней и будет проходить вся ваша основная работа
	`git checkout -b <BRANCH-NAME>`


 :warning: **Не сливайте вашу уникальную ветку с main - вы потеряете возможность выкачивать новые изменения из оригинального репозитория.** 


## Чтобы скачать актуальные изменения из оригинального репозитория
- в вашем репизитории на github проверяем, что выставлена ветка `main`, нажимаем на кнопку `Synk fork` -> `Update branch`   <br/>
  
    <img src="doc/github/get-update-from-origin.jpg" alt="instructions" width="600"/>


- после обновления при клике на кнопку выдастся сообщение "This branch is not behind the upstream". Это означает что вы успешно обновились и скачали все актуальные изменения.   <br/>
  
  <img src="doc/github/there-is-no-change-in-origin.jpg" alt="instructions" width="600"/>


- в IDE в проекте нужно переключиться на ветку `main`:
    -  в консоли ввести `git checkout main` или воспользоваться интерфейсом программы для переключения между ветками
    - в консоли ввести `git pull` или воспользоваться интерфейсом программы для обновления (web storm команда `Ctrl + T`)

:sunglasses: **Готово!**
Обновления скачаны из удаленного репозитория. Теперь для работы не забудьте вернуться в свою рабочую ветку `git checkout <BRANCH-NAME>*`



## Сравнение файлов

Если вы не успели или хотите что-то разобрать из основного проекта, можно воспользоваться функцией сравнения файлов

### Для Web Storm
- убедитесь, что находитесь в своей ветке проекта. Проверить это можно или в интерфейсе IDE, или с помощью команды `git branch`
- в файлах проекта выберите интересующий файл или целую папку, вызовите контекстное меню и выбрите `git` -> `Compare with Branch...`   <br/>
  <img src="doc/ws/diff-ws.jpg" alt="instructions" width="500"/>


- выберите для сравнения `main`   <br/>
  <img src="doc/ws/main-branch-ws.jpg" alt="instructions" width="400"/>


- Результат команды будет такой   <br/>
  <img src="doc/ws/result-ws.jpg" alt="instructions" width="700"/>


### Для VS Code
- убедитесь, что находитесь в своей ветке проекта. Проверить это можно или в интерфейсе IDE, или с помощью команды `git branch`
- в файлах проекта выберите интересующий файл или целую папку, вызовите контекстное меню и выбрите `git` -> `Compare with Branch...`   <br/>
  <img src="doc/vc/diff-vc.jpg" alt="instructions" width="600"/>


- выберите для сравнения `main`   <br/>
  <img src="doc/vc/main-branch-vc.jpg" alt="instructions" width="500"/>


- Результат команды будет такой   <br/>
  <img src="doc/vc/result-vc.jpg" alt="instructions" width="700"/>

