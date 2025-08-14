---
layout: default
title: Prefabs
---
Prefabs are identifers often used in commands or configurations to refer to an object, item, effect, etc.


Full list here **(warning large file)**: [all prefabs](./All) also the remainder of the prefabs with fewer than 10 in a category into [remainders prefabs](./Remainders). [Vblood Prefabs by Name](./VBloodNames).

<div class="prefab-list">
  {{ range $name, $prefab := site.Data.prefabs }}
    {{ if ne $name "All" }}
      <a class="prefab-item" href="{{ (printf "/prefabs/%s" $name) | relURL }}"><b>{{ $name }}</b> ({{ len $prefab }})</a>
    {{ end }}
  {{ end }}
</div>
