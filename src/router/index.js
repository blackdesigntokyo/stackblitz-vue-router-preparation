// Vue Router 4の主要な機能をインポート
// createRouter: ルーターインスタンスを作成するためのファクトリー関数
// createWebHistory: HTML5 History APIを使用するヒストリーモードを作成
import { createRouter, createWebHistory } from 'vue-router'

// Homeコンポーネントを通常のimportで読み込み（静的インポート）
// アプリケーション開始時に即座に読み込まれる
import Home from '../views/Home.vue'

// ルート設定の配列を定義
// 各オブジェクトはURLパスとコンポーネントのマッピングを表す
const routes = [
  {
    path: '/',           // URLパス（ルートパス）
    name: 'Home',        // ルート名（プログラムでナビゲーションする際に使用可能）
    component: Home      // 表示するコンポーネント（静的インポート済み）
  },
  {
    path: '/about',      // URLパス
    name: 'About',       // ルート名
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
    // 動的インポート（遅延読み込み）を使用
    // このルートにアクセスした時に初めてコンポーネントが読み込まれる
    // webpackChunkName: "about" は、生成されるチャンクファイル名を指定
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    
    // 上記の省略記法。以下のような関数と同等の動作
    // component: function() {
    //   return import('../views/About.vue')
    // }
  }
]

// ルーターインスタンスを作成
const router = createRouter({
  // HTML5 History APIを使用（URLに#が含まれない形式）
  // process.env.BASE_URLは環境変数からベースURLを取得
  history: createWebHistory(process.env.BASE_URL),
  routes  // 上で定義したルート設定を渡す（ES6のプロパティ省略記法 routes: routes）
})

// 作成したルーターインスタンスをエクスポート
// main.jsでapp.use(router)として使用される
export default router