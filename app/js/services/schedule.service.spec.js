var scheduleServiceModule = require('./schedule.service.js');

describe('Service', function () {
    var groupId = "Ch-037";
    var lesson = "OOP";
    var schedule = {
        "groupIds": [
            {
                "id": "Ch-037",
                "days": [
                    {
                        "date": "Monday",
                        "lessons": [
                            {
                                "time": "08:30-10:00",
                                "name": "OOP"
                    },
                            {
                                "time": "10:30-12:00",
                                "name": "Databases"
                    },
                            {
                                "time": "13:30-15:00",
                                "name": "UI"
                    },
                            {
                                "time": "15:30-17:00",
                                "name": "Linear Algebra"
                    }
                ]
            },
                    {
                        "date": "Tuesday",
                        "lessons": [
                            {
                                "time": "08:30-10:00",
                                "name": "Databases"
                    },
                            {
                                "time": "10:30-12:00",
                                "name": "Testing"
                    },
                            {
                                "time": "13:30-15:00",
                                "name": "Math"
                    },
                            {
                                "time": "15:30-17:00",
                                "name": "UI"
                    }
                ]
            },
                    {
                        "date": "Wednesday",
                        "lessons": [
                            {
                                "time": "08:30-10:00",
                                "name": "Databases"
                    },
                            {
                                "time": "10:30-12:00",
                                "name": "UI"
                    },
                            {
                                "time": "13:30-15:00",
                                "name": "Math"
                    },
                            {
                                "time": "15:30-17:00",
                                "name": "Testing"
                    }
                ]
            },
                    {
                        "date": "Thursday",
                        "lessons": [
                            {
                                "time": "08:30-10:00",
                                "name": "Databases"
                    },
                            {
                                "time": "10:30-12:00",
                                "name": "UI"
                    },
                            {
                                "time": "13:30-15:00",
                                "name": "Testing"
                    },
                            {
                                "time": "15:30-17:00",
                                "name": "OOP"
                    }
                ]
            },
                    {
                        "date": "Friday",
                        "lessons": [
                            {
                                "time": "08:30-10:00",
                                "name": "Databases"
                    },
                            {
                                "time": "10:30-12:00",
                                "name": "OOP"
                    },
                            {
                                "time": "13:30-15:00",
                                "name": "Testing"
                    },
                            {
                                "time": "15:30-17:00",
                                "name": "Linear Algebra"
                    }
                ]
            }
            ]
        }
    ]
    }

    var scheduleService;

    beforeEach(inject(function () {
        scheduleService = new scheduleServiceModule();
    }));

    it('should return correct count', function () {
        var count = scheduleService.calculateLesson(groupId, lesson, schedule);
        expect(count).toEqual(3);
    });

    it('should have some groups direction', function () {
        var groups = scheduleService.getLessonsNames();
        expect(groups.length).not.toBeLessThan(0);
    });
    
    it('calculation', function () {
        var result = scheduleService.calculate(2, 3);
        expect(result).toEqual(6);
    });
});