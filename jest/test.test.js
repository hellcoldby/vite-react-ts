import React from "react";
import { render, fireEvent } from "@testing-library/react";



//常规测试
test('2+2', ()=>{
    expect(2+2).toBe(4)
});






/**
 * react 测试button 点击
 */
test("component", () => {
  const onClick = jest.fn(); // 测试函数
  // render 用来渲染元素
  const { getByLabelText } = render(
    <button aria-label="Button" onClick={onClick} />
  );
  // getByLabelText 可以通过aria-label的值来获取元素
  const btn = getByLabelText("Button");
  fireEvent.click(btn); // 模拟点击事件
  expect(onClick).toBeCalled(); // 期望被调用
  expect(onClick).toBeCalledTimes(1); // 期望被调用一次
});


/**
 * input 输入和输出
 */
test("输入框输入,校验值", () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <input data-testid="input" onChange={onChange} />
  );
  // 通过data-testid的方式来获取元素
  const input = getByTestId("input");
  // 模拟change事件，第二个参数模拟event的值
  fireEvent.change(input, { target: { value: "test" } });
  expect(onChange).toBeCalled();
  expect(input).toHaveValue("test");
});


/**
 * 测试元素是否被disable，是否包含某一类名
 */
test("测试元素是否disabled，是否包含某一类名", () => {
  const { getByText } = render(
    <button disabled className="button-disabled">
      this is a button
    </button>
  );
  // getByText从text来获取元素
  const btn = getByText("this is a button");
  expect(btn).toBeDisabled();
  expect(btn).toHaveClass("button-disabled");
});
