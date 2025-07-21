---
layout: default
title: Prefabs
has_children: true
---

# Prefabs

Prefabs are identifiers often used in commands or configurations to refer to an object, item, effect, etc.

Full list here **(warning large file)**: [all prefabs](./All), [remainders prefabs](./Remainders), [Vblood Prefabs by Name](./VBloodNames).

<div class="prefab-list">
  {% assign sorted_prefabs = site.prefabs | sort: "name" %}
  {% for prefab in sorted_prefabs %}
    {% if prefab.name and prefab.name != "All" and prefab.name != "Remainders" and prefab.name != "VBloodNames" %}
      <a class="prefab-item" href="{{ site.baseurl }}{{ prefab.url }}"><b>{{ prefab.name }}</b></a>
    {% endif %}
  {% endfor %}
</div>
