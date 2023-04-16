# React + Handlebars + TypeScript Sample Project

This project is a sample single-page application that combines React and Handlebars. Code is written in TypeScript and built with Parcel.

## 開始方法
このリポジトリをクローンし、依存関係をインストールしてください。インストールには Yarn を使用します。

```
git clone https://github.com/your-username/react-handlebars-typescript-sass-lint.git
cd react-handlebars-typescript-sass-lint
yarn
```

## Directory Structure

```
project/
├── public/
│ ├── index.html
│ └── assets/
│ └── images/
├── src/
│ ├── components/
│ │ ├── App.tsx
│ │ └── Counter.tsx
│ ├── templates/
│ │ └── index.handlebars
│ ├── partials/
│ │ ├── footer.handlebars
│ │ └── header.handlebars
│ └── styles/
│ └── index.css
├── tsconfig.json
├── package.json
└── README.md
```


The `public/` directory contains the index HTML file and any assets such as images. The `src/` directory contains the TypeScript code, Handlebars templates, and CSS styles. The `src/components/` directory contains the React components. The `src/templates/` directory contains the Handlebars templates. The `src/partials/` directory contains the Handlebars partials. The `src/styles/` directory contains the CSS styles. The `tsconfig.json` file is the TypeScript configuration file. The `package.json` file contains the project's dependencies and scripts.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `yarn install` to install the dependencies.
3. Run `yarn start` to start the development server.
4. Open your web browser and navigate to `http://localhost:1234` to view the application.

## Scripts
このプロジェクトには、以下のスクリプトが含まれています。

start - 開発サーバーを起動します。
build - アプリケーションをビルドします。
lint - コードの静的解析を実行します。
lint:fix - コードの静的解析を実行し、自動修正可能な問題を修正します。
これらのスクリプトは、以下のコマンドを使用して実行できます。

# 開発サーバーを起動する
`yarn start`

# アプリケーションをビルドする
`yarn build`

# コードの静的解析を実行する
`yarn lint`

# コードの静的解析を実行し、自動修正可能な問題を修正する
`yarn lint:fix`

`start`スクリプトは、開発用のサーバーを起動し、アプリケーションを自動的に再読み込みします。`build`スクリプトは、アプリケーションをビルドし、`dist`ディレクトリに出力します。`lint`スクリプトは、ESLintを使用してコードを静的解析し、問題を報告します。`lint:fix`スクリプトは、ESLintを使用してコードを静的解析し、自動的に修正できる問題を修正します。

`src`ディレクトリ内のファイルを変更してアプリケーションを開発してください。`src/components`ディレクトリにはReactコンポーネントが、`src/partials`ディレクトリにはHandlebarsのパーシャルが、`src/templates`ディレクトリにはHandlebarsのテンプレートが含まれています。`src/styles`ディレクトリにはSCSSスタイルシートがあります。


## Building for Production

To build the application for production, run `yarn build`. The production-ready files will be generated in the `dist/` directory.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
