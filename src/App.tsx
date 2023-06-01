import { useState, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user";
import "./styles.css";

export const App = () => {
  // 取得したユーザー情報
  const [users, setUsers] = useState<User[]>([]);
  // str:で型指定ができる
  let str: string = "A";
  str = "10"; // intの数字は使えない
  // str = 10;
  let num: number = 0;
  num = 10;
  // num = "10"; // stringは使えない
  // string以外の型の値を代入しようとするとエラーが出る
  const strObj: CustomType<string> = { val: "A" };

  const [str, setStr] = useState<string>("");
  // setStr(10); // エラー吐く
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
