// Vue 3の createApp 関数をインポート
// この関数はVueアプリケーションのインスタンスを作成するために使用される
import { createApp } from 'vue'

// メインのアプリケーションコンポーネントをインポート
// App.vueファイルからルートコンポーネントを読み込む
import App from './App.vue'

// Vue Routerのルーター設定をインポート
// ./routerディレクトリからルーティング設定を読み込む
import router from './router'

// Vueアプリケーションの初期化と起動
// 1. createApp(App): Appコンポーネントを基にVueアプリケーションインスタンスを作成
// 2. .use(router): Vue Routerプラグインをアプリケーションに追加（ページ遷移機能を有効化）
// 3. .mount('#app'): HTMLの id="app" を持つ要素にアプリケーションをマウント（表示）
createApp(App).use(router).mount('#app')