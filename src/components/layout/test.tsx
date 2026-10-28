"use client";
import React from "react";

export default function Test() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("submitted!");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <button>Đăng nhập</button>
      </form>
    </div>
  );
}
