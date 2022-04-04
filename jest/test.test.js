test('2+2', ()=>{
    expect(2+2).toBe(4)
});

//测试button 点击



import React from "react";
import { render, fireEvent } from "@testing-library/react";
/**
 * @jest-environment jsdom
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
