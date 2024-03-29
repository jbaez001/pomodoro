# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.2.0](https://github.com/jbaez001/pomodoro/compare/v0.1.5...v0.2.0) (2023-10-29)


### Features

* added a default pomodoro ([e3903ee](https://github.com/jbaez001/pomodoro/commit/e3903ee64d3f90a4c6d22564d22d59262df9af48))
* new component to add pomodoros on the fly ([f9784bc](https://github.com/jbaez001/pomodoro/commit/f9784bc14d6199ef2aebfe6981b27e82c9dbf7c1))
* pomodoro controller ([2cc61b1](https://github.com/jbaez001/pomodoro/commit/2cc61b18453df351e7a57c22278e7481c03c6fd0))
* pomodoro titles can now be updated ([8cb3e2d](https://github.com/jbaez001/pomodoro/commit/8cb3e2dcf83bbb20c0982b55af5ebd5b1be0c6f7))
* pomodoros are retrieved from backend api ([8b74226](https://github.com/jbaez001/pomodoro/commit/8b74226f3773246a6cccd9027f2c8bb17351372a))
* when pressing escape in pomodoro creation bar, it resets it ([f0bac0e](https://github.com/jbaez001/pomodoro/commit/f0bac0e4213cc888177ce3d5eef145ed1534dbf5))


### Bug Fixes

* no longer able to create blank pomodoros ([f0a1949](https://github.com/jbaez001/pomodoro/commit/f0a1949d8bb970ddd5b03764a2c37e25136d2513))
* resetting a pomodoro card actually resets it ([7eb794e](https://github.com/jbaez001/pomodoro/commit/7eb794e93b55099318f27c490dbfe18647926e3d))
* stopping and then starting a card no longer resets timer ([2199268](https://github.com/jbaez001/pomodoro/commit/21992683d68771fafdc9ea27f2596a109c09b469))

### [0.1.5](https://github.com/jbaez001/pomodoro/compare/v0.1.4...v0.1.5) (2023-05-05)


### Bug Fixes

* pomodoro card names cannot be empty or contain only white spaces ([87a167e](https://github.com/jbaez001/pomodoro/commit/87a167ee71fdea5214adb42479c82788f06cb751))

### [0.1.4](https://github.com/jbaez001/pomodoro/compare/v0.1.3...v0.1.4) (2023-05-04)

### [0.1.3](https://github.com/jbaez001/pomodoro/compare/v0.1.2...v0.1.3) (2023-05-04)


### Bug Fixes

* timer accuracy ([68b15df](https://github.com/jbaez001/pomodoro/commit/68b15dfb795d0e18fcf6207529c189ee43ad0c51))

### [0.1.2](https://github.com/jbaez001/pomodoro/compare/v0.1.1...v0.1.2) (2023-04-06)


### Bug Fixes

* bug with card not starting if previously expired ([c1eebb5](https://github.com/jbaez001/pomodoro/commit/c1eebb59e5f24157e7ff66747807a998c293c075))
* expired cards will properly reset timer ([af2f512](https://github.com/jbaez001/pomodoro/commit/af2f512c9841b843f957fd812f63d482ffd2fd6a))
* if pomodoro card is in a neutral state, then the 'stop' button will not change the card's state ([20b1002](https://github.com/jbaez001/pomodoro/commit/20b1002ca100690fc175ea8e2416d8d89e0d81ec))

### [0.1.1](https://github.com/jbaez001/pomodoro/compare/v0.1.0...v0.1.1) (2022-01-03)


### Features

* card bg color now changes based on current card state ([95b7804](https://github.com/jbaez001/pomodoro/commit/95b78047033d9b8af3dd34bc39ee732c9fcb5729))


### Bug Fixes

* package name ([7b61c82](https://github.com/jbaez001/pomodoro/commit/7b61c82627e0f64c51744dffa0ed206e4f72ea79))
* timer expiration not resetting ([494a6d2](https://github.com/jbaez001/pomodoro/commit/494a6d2e45a2bc842e9efaad6284540eb91a2d38))
* timer speed ([66ff0b8](https://github.com/jbaez001/pomodoro/commit/66ff0b8b59ccf689a2ddd758329bc1080d602f5d))

## 0.1.0 (2022-01-02)


### Features

* added chakra-ui ([34a53ce](https://github.com/jbaez001/pomodoro/commit/34a53cef7539c727166eddaa268c8ce0fb283adf))
* initial commit ([a8d07d8](https://github.com/jbaez001/pomodoro/commit/a8d07d87915cec19e84b857bb1e6d7af0c7ecf20))
* moved from chakra-ui to tailwindscss for much more added utility ([a14a6bb](https://github.com/jbaez001/pomodoro/commit/a14a6bbf19f1f3cda85e20bae3bf6aa24de1d529))
* new component PomodoroTimerText ([862afe0](https://github.com/jbaez001/pomodoro/commit/862afe04f6da111297d4c3d17bf9366ed42cf60e))


### Bug Fixes

* corrected license on packages.json ([388ee0b](https://github.com/jbaez001/pomodoro/commit/388ee0b8b804b13be81c6e98924defd1c3a42ef1))
* removed duplicate use of pomodoro css class ([19a7c9b](https://github.com/jbaez001/pomodoro/commit/19a7c9b74753928dce8d9d1f680d2e481e0d932b))
