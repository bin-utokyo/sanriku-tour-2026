---
layout: default
title: Home
---
<section class="hero">
  <h1>東北研修の事前・事後資料</h1>
  <p>各スポットの事前調査・現地訪問後の考察を、執筆者別のsubpageとして整理する公開用サイトです。Homeではスポット別の担当者と論点を一覧し、各執筆者ページに遷移できます。</p>
  <div class="hero-actions">
    <a class="button" href="#spots">スポット一覧を見る</a>
    <a class="button-secondary" href="#authors">執筆者別ページを見る</a>
  </div>
</section>

<section id="spots" class="section">
  <div class="section-header">
    <div>
      <h2>スポット別資料一覧</h2>
      <p>事前資料・事後資料の執筆者名をクリックすると、該当subpageに移動します。</p>
    </div>
  </div>

  <div class="table-wrap">
    <table class="spot-table">
      <thead>
        <tr>
          <th>スポット</th>
          <th>事前資料</th>
          <th>事後資料</th>
          <th>論点の例</th>
        </tr>
      </thead>
      <tbody>
        {% for item in site.data.spots %}
        <tr>
          <td class="spot-name">{{ item.id }} {{ item.spot }}</td>
          <td><a class="author-link" href="{{ item.pre.url | relative_url }}">{{ item.pre.author }}</a></td>
          <td><a class="author-link" href="{{ item.post.url | relative_url }}">{{ item.post.author }}</a></td>
          <td>
            <ul>
              {% for point in item.discussion_points %}
              <li>{{ point }}</li>
              {% endfor %}
            </ul>
          </td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</section>

<section id="authors" class="section">
  <div class="section-header">
    <div>
      <h2>執筆者別ページ</h2>
      <p>Home下に配置する全subpageの一覧です。</p>
    </div>
  </div>

  <div class="author-grid">
    {% for item in site.data.spots %}
    <a class="author-card" href="{{ item.pre.url | relative_url }}">
      <span>事前資料</span>
      <strong>{{ item.pre.author }}</strong>
      <small>{{ item.id }} {{ item.spot }}</small>
    </a>
    <a class="author-card" href="{{ item.post.url | relative_url }}">
      <span>事後資料</span>
      <strong>{{ item.post.author }}</strong>
      <small>{{ item.id }} {{ item.spot }}</small>
    </a>
    {% endfor %}
  </div>
</section>
