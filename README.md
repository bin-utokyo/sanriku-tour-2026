# 福島三陸ツアー2026 GitHub Pages

このリポジトリは、福島三陸ツアー2026の行程、訪問先ごとの記録、写真ギャラリーを公開するためのGitHub Pagesサイトです。

## 構成

```text
docs/
  index.md                 # トップページ
  guidelines.md            # 公開方針
  _config.yml              # Jekyll設定
  _data/itinerary.yml      # 行程データ
  _data/spots.yml          # 訪問先リンクデータ
  _layouts/default.html    # 共通レイアウト
  _layouts/author.html     # 訪問先ページレイアウト
  assets/css/style.css     # デザイン
  assets/images/logo.ai    # ロゴ原本
  assets/images/logo.png   # Web表示用ロゴ
  assets/images/materials/ # トップページのギャラリー画像
  authors/*.md             # 訪問先ごとの本文
```

## GitHub Pagesで公開する手順

1. GitHubで新規リポジトリを作成する。
2. このリポジトリの中身をリポジトリ直下にアップロードする。
3. GitHubの `Settings` → `Pages` を開く。
4. `Build and deployment` の `Source` を `Deploy from a branch` にする。
5. `Branch` を `main`、フォルダを `/docs` にして保存する。
6. 表示されるGitHub Pages URLにアクセスする。

## 公開URLと `baseurl`

リポジトリ名が `username.github.io` のUser/Organization siteとして公開する場合、`docs/_config.yml` の `baseurl` は空欄のままで使えます。通常のProject siteとして `https://username.github.io/repository-name/` に公開する場合は、`baseurl: "/repository-name"` に変更してください。

## 編集方法

### トップページの訪問先リンクを編集する

`docs/_data/spots.yml` を編集します。訪問先名、担当者名、着目点、ページURLをまとめて管理できます。

### 行程を編集する

`docs/_data/itinerary.yml` を編集します。公開ページには集合・解散・訪問先など、外部向けに出してよい情報だけを載せます。

### 訪問先ページを編集する

`docs/authors/` 内のMarkdownファイルを編集します。公開URLは front matter の `permalink` で `/notes/.../` に設定しています。

### 新しいページを追加する

1. `docs/_templates/author.md` をコピーする。
2. ファイル名を英数字のslugに変更する。
3. YAML front matter の `title`、`spot`、`author`、`phase_label`、`permalink` を編集する。
4. トップページに出したい場合は `docs/_data/spots.yml` に登録する。

## 公開前チェック

- 個人情報、顔写真、車両ナンバー、未公開資料が含まれていないか確認する。
- 画像・図表・文章の引用条件を確認する。
- 参考資料・出典を明記する。
- 現地関係者から聞いた非公開情報をそのまま掲載しない。
- トップページから各ページへのリンクが開くか確認する。
