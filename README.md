# Pomodoro

Wanted to give Vite, ReatJS & TypeScript ago and try writing something like a Pomodoro application.

## Building

### Locally

```bash
yarn
yarn dev
```

### Docker

```bash
docker build -t pomodoro .
```

### docker-compose

```bash
docker-compose build pomodoro
```

## PomodoroCard Component

- Card has a 25 minute timer that counts down once started.
- Card will change background color when timer has expired.
- Card can be renamed by double clicking the name of the card.
