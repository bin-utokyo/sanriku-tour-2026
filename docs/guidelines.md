---
layout: default
title: 執筆・公開ガイド
permalink: /guidelines/
---
# 執筆・公開ガイド

## 1. 執筆者ページの基本構成

各subpageは `docs/authors/` にMarkdownファイルとして置きます。基本構成は次の通りです。

1. 概要
2. 現地・対象施設の背景
3. 事前に確認する観点、または現地訪問後の観察
4. 論点・考察
5. 参考資料

## 2. 編集方法

1. `docs/authors/` 内の該当ファイルを開く。
2. YAML front matter の `title`、`author`、`phase_label`、`discussion_points` を確認する。
3. `## 1. 概要` 以下の本文を差し替える。
4. Homeの一覧を変える場合は `docs/_data/spots.yml` を編集する。

## 3. 参考資料・画像の扱い

外部公開するため、画像・図表・文章の引用条件を確認してください。引用や出典表示が必要な資料は、本文中に出典を明記します。現地関係者、同行者、児童生徒、車両ナンバー、私有地、未公開資料が写る写真は、公開範囲と許諾を確認してから掲載してください。

## 4. 公開前チェックリスト

- 個人情報、連絡先、顔写真、車両ナンバー、内部メモが残っていない。
- 事実関係、地名、施設名、年月日が確認されている。
- 引用箇所と参考資料が明記されている。
- 現地で聞いた非公開情報をそのまま掲載していない。
- Homeのリンク切れがない。

## 5. 新しいsubpageを追加する場合

`docs/_templates/author.md` をコピーし、ファイル名を英数字のslugに変更してください。例：`sendai-koseki-post.md`。その後、`permalink` を `/authors/sendai-koseki-post/` のように設定し、Homeの一覧に出す場合は `docs/_data/spots.yml` にURLを登録します。
