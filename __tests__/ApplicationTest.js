import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트", async () => {

    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트(이름 5글자 이상)", async () => {

    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  // 여기서부터 추가 테스트

  test("공동 우승자 테스트", async () => {

    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni,yun", "1"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("최종 우승자 : pobi, woni, yun"))
  }) 

  test("공백 포함 이름 테스트", async () => {
    const inputs = ["   pobi,       yun","1"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4,3])

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi : -"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("yun : "));
  })

  test("여러 라운드 경주 테스트", async () => {
    const inputs = ["pobi,woni","3"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4,4,3,3,5,5,4,3,2,4,4,3]);
    // 1R: pobi +1, woni +1
    // 2R: pobi +1, woni +1
    // 3R: pobi +2, woni +2
    // 4R: pobi +3, woni +2
    // 5R: pobi +3, woni +3
    // 5R: pobi +4, woni +3

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("최종 우승자 : pobi"));
  })

  test("예외 테스트(입력값 X)" , async () => {
    const inputs = [""];
    mockQuestions(inputs);
    
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  })

  test("에외 테스트(시도 횟수 음수)", async () => {
    const inputs = ["pobi, woni","-1"];
    mockQuestions(inputs);

    const app = new App();
    
    await expect(app.run()).rejects.toThrow("[ERROR]")
  })
});
