# 東北研修 事前・事後資料 GitHub Pages スターター

このリポジトリは、東北研修の事前資料・事後資料を外部公開するためのGitHub Pages用スターターです。

## 構成

```text
docs/
  index.md                 # Home画面
  guidelines.md            # 執筆・公開ガイド
  _config.yml              # Jekyll設定
  _data/spots.yml          # Homeのスポット一覧データ
  _layouts/default.html    # 共通レイアウト
  _layouts/author.html     # 執筆者subpageレイアウト
  assets/css/style.css     # デザイン
  authors/*.md             # 執筆者ごとのsubpage
```

## GitHub Pagesで公開する手順

1. GitHubで新規リポジトリを作成する。
2. このZIPの中身をリポジトリ直下にアップロードする。
3. GitHubの `Settings` → `Pages` を開く。
4. `Build and deployment` の `Source` を `Deploy from a branch` にする。
5. `Branch` を `main`、フォルダを `/docs` にして保存する。
6. 表示されるGitHub Pages URLにアクセスする。

## 公開URLと `baseurl`

リポジトリ名が `username.github.io` のUser/Organization siteとして公開する場合、`docs/_config.yml` の `baseurl` は空欄のままで使えます。通常のProject siteとして `https://username.github.io/repository-name/` に公開する場合は、`baseurl: "/repository-name"` に変更してください。

## 編集方法

### Homeの一覧を編集する

`docs/_data/spots.yml` を編集します。スポット名、担当者名、論点、subpage URLをまとめて管理できます。

### 執筆者ページを編集する

`docs/authors/` 内のMarkdownファイルを編集します。本文は通常のMarkdownで記述できます。

### 新しいsubpageを追加する

1. `docs/_templates/author.md` をコピーする。
2. ファイル名を英数字のslugに変更する。
3. YAML front matter の `title`、`spot`、`author`、`phase_label`、`permalink` を編集する。
4. Homeに出したい場合は `docs/_data/spots.yml` に登録する。

## 公開前チェック

- 個人情報、顔写真、車両ナンバー、未公開資料が含まれていないか確認する。
- 画像・図表・文章の引用条件を確認する。
- 参考資料・出典を明記する。
- 現地関係者から聞いた非公開情報をそのまま掲載しない。
- Homeから全subpageへのリンクが開くか確認する。
