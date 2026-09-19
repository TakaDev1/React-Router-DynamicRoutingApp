# React Router Dynamic Routing App

React Routerの動的ルーティングを学習するための練習アプリです。

## 概要

`/user/:id` の動的なルートを作成し、URLに含まれるユーザーIDを `useParams` で取得して画面に表示します。

## 学習内容

* `BrowserRouter`
* `Routes`
* `Route`
* 動的ルーティング
* `:id` パラメータ
* `useParams`
* TypeScriptでの `useParams` の型指定
* `pages` ディレクトリによる画面コンポーネントの管理

## ルーティング

| URL       | 表示ページ      | 内容         |
| --------- | ---------- | ---------- |
| `/`       | `Home`     | ユーザー一覧     |
| `/user/1` | `UserPage` | User ID: 1 |
| `/user/2` | `UserPage` | User ID: 2 |

## ディレクトリ構成

```text
src/
├── pages/
│   ├── Home.tsx
│   └── UserPage.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 実装

### App.tsx

```tsx
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

### UserPage.tsx

```tsx
import { useParams } from "react-router";

const UserPage = () => {
  const { id } = useParams<"id">();

  return (
    <h2 className="text-xl font-semibold text-blue-600">
      User ID: {id}
    </h2>
  );
};

export default UserPage;
```

## 動的ルーティングの仕組み

```text
/user/:id
   ↓
:id は動的なパラメータ
   ↓
/user/123
   ↓
id = "123"
   ↓
useParams()
   ↓
{ id: "123" }
```

例えば、

```text
/user/1
```

にアクセスすると、

```tsx
const { id } = useParams<"id">();
```

によって、

```text
id = "1"
```

を取得できます。

## `useParams<"id">()` の `"id"` について

`"id"` はURLの `:id` と対応する**パラメータ名**です。

```tsx
<Route path="/user/:id" element={<UserPage />} />
```

の場合、

```tsx
useParams<"id">();
```

となります。

もしルートを、

```tsx
<Route path="/user/:userId" element={<UserPage />} />
```

とした場合は、

```tsx
const { userId } = useParams<"userId">();
```

となります。

つまり、

```text
:id
 ↓
パラメータ名「id」
 ↓
useParams<"id">()
 ↓
idの値を取得
```

という関係です。

## 重要ポイント

`Route` はURLと表示するコンポーネントを紐付けます。

```tsx
<Route
  path="/user/:id"
  element={<UserPage />}
/>
```

これは、

```text
/user/:id
    ↓
UserPage
```

という対応関係を定義しています。

`BrowserRouter` が現在のURLを管理し、`Routes` が一致する `Route` を探し、`Route` の `element` に指定されたコンポーネントを表示します。

```text
BrowserRouter
    ↓
Routes
    ↓
Route
    ↓
URLと一致
    ↓
UserPage
    ↓
useParams()
    ↓
URLパラメータを取得
```
