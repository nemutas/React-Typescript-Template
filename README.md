### パッケージインストール

```
npm install
```

### ビルド

```
npm run build
```

### サーバーの起動

```
npm start
```

ローカルホスト  
http://localhost:3000

### デバッグ

1. 以下の拡張機能を VSCode にインストールする  
   [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

2. launch.json 内に起動するサーバーのポートを入力する

3. サーバーを起動して、F5

### パッケージ

開発にほぼ必須となるパッケージの説明です。  
※ デフォルトパッケージは、説明から除いています。

* **axios**  
  jsonデータ読み込む

* **node-sass, @types/node-sass**  
  CSSの拡張機能（SASS、SCSS）をモジュールとして扱えるようになる  
  ファイル名は、 hoge.module.scss とする

* **styled-components, @types/styled-components**  
  CSSの拡張機能で、tsxファイル内にスタイルの記述ができるようになる  
  VSCodeの拡張機能を使用すると、自動補完もできる  
  [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=diegolincoln.vscode-styled-components)

* **sanitize.css**  
  CSSをサニタイズする  
  [使い方](https://csstools.github.io/sanitize.css/)
  
* **recoil, @types/recoil**  
  状態管理ライブラリ。プロジェクト内でグローバル変数を管理する  
  [React 新しい状態管理ライブラリ Recoil の紹介](https://zenn.dev/ria/articles/2427d0e998c557cdbb96)
